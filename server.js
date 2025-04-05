const WebSocket = require('ws');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Get all network interfaces
function getNetworkAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  
  for (const interfaceName in interfaces) {
    const interface = interfaces[interfaceName];
    for (const entry of interface) {
      // Skip internal and non-IPv4 addresses
      if (!entry.internal && entry.family === 'IPv4') {
        addresses.push(entry.address);
      }
    }
  }
  return addresses;
}

// Create HTTP server to serve static files
const server = http.createServer((req, res) => {
  let filePath = '.';
  
  // Route handling
  if (req.url === '/') {
    filePath += '/index.html';
  } else if (req.url === '/admin') {
    filePath += '/admin.html';
  } else if (req.url === '/network-info') {
    // Endpoint to get network information
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      addresses: getNetworkAddresses(),
      port: PORT
    }));
    return;
  } else {
    filePath += req.url;
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if(error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Create WebSocket server
const wss = new WebSocket.Server({ server });

// Store connected clients
const clients = new Set();
let currentState = {
  entries: [],
  currentIndex: 0,
  round: 1
};

// Handle WebSocket connections
wss.on('connection', (ws, req) => {
  // Check if the connection is from admin
  const isAdmin = req.url === '/admin';
  ws.isAdmin = isAdmin;
  
  clients.add(ws);
  console.log(`${isAdmin ? 'Admin' : 'User'} connected. Total clients:`, clients.size);

  // Send current state to newly connected client
  ws.send(JSON.stringify({
    type: 'sync',
    ...currentState,
    clientId: 'server'
  }));

  // Handle messages from clients
  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      
      // Only allow state updates from admin connections
      if (!ws.isAdmin) {
        console.log('Rejected non-admin update attempt');
        // Send current state back to non-admin client to force sync
        ws.send(JSON.stringify({
          type: 'sync',
          ...currentState,
          clientId: 'server'
        }));
        return;
      }
      
      // Update current state if message is from admin
      if (data.type === 'sync') {
        currentState = {
          entries: data.entries,
          currentIndex: data.currentIndex,
          round: data.round
        };
      }
      
      // Broadcast the message to all connected clients
      clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message.toString());
        }
      });
    } catch (e) {
      console.error('Error processing message:', e);
    }
  });

  // Handle client disconnection
  ws.on('close', () => {
    clients.delete(ws);
    console.log(`${ws.isAdmin ? 'Admin' : 'User'} disconnected. Total clients:`, clients.size);
  });
});

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log('\nServer running on the following addresses:');
  getNetworkAddresses().forEach(addr => {
    console.log(`http://${addr}:${PORT}`);
    console.log(`http://${addr}:${PORT}/admin`);
  });
  console.log('\nLocal access:');
  console.log(`http://localhost:${PORT}`);
  console.log(`http://localhost:${PORT}/admin`);
}); 
