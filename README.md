# Initiative Tracker

A real-time initiative tracking system for tabletop RPGs, designed for both DMs and players. Features a modern, wall-display-friendly interface with separate admin and user views.

## Features

### Admin Interface (`/admin`)
- Full control over initiative order
- Add/Edit/Remove combatants
- Upload character images
- Initiative tie-breaking with DEX modifiers
- Boss monster highlighting
- Group entry support
- Import/Export functionality

### User Interface (Main View)
- Modern, sleek design optimized for wall displays
- Large, easily readable character icons and names
- Real-time updates via WebSocket
- Responsive design for all screen sizes
- Visual indicators for:
  - Current turn
  - Boss monsters
  - Initiative ties (with DEX modifier display)
  - Round tracking

### Technical Features
- Real-time synchronization across all connected devices
- Automatic network interface discovery
- Secure WebSocket communication
- State persistence
- Cross-platform compatibility

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

3. Access the interfaces:
- Admin interface: `http://[your-ip]:8080/admin`
- Player view: `http://[your-ip]:8080`

## Usage

### Admin View
1. Add entries using the form at the top
2. Use the control buttons to manage combat:
   - Next Turn
   - Previous Turn
   - Next Round
   - Reset
3. Edit entries by clicking on them
4. For initiative ties, enter DEX modifiers to determine order

### Player View
- Automatically updates to show current initiative order
- Highlights active combatant
- Shows round number
- Displays network connection status

## Technical Requirements
- Node.js
- Modern web browser
- Network connectivity for multi-device usage
