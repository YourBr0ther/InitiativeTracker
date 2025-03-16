# Initiative Tracker

A real-time initiative tracking system for tabletop role-playing games, designed to be accessible across multiple devices on a local network.

## Features

- **Real-time Updates**: Changes sync instantly across all connected devices
- **Dual Interface**:
  - Admin view (`/admin`) for game masters to manage the initiative order
  - Player view (`/`) for players to follow combat
- **Persistence**: State survives page refreshes and reconnections
- **Mobile Responsive**: Works on both desktop and mobile devices
- **Combat Management**:
  - Track initiative order
  - Mark boss enemies
  - Designate NPCs and group enemies
  - Round counter
  - 20-minute turn timer
- **Session Management**:
  - Export/Import session data
  - Clear all functionality
  - Edit entries on the fly

## Setup

1. Install Node.js if you haven't already
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. The server will display available IP addresses. Players can connect using any of these addresses.

## Usage

### Admin Interface (Game Master)
- Access via `http://[YOUR-IP]:8080/admin`
- Features:
  - Add new entries with initiative, name, and optional icon
  - Mark entries as Boss, NPC, or Group
  - Edit or delete entries
  - Control turn order
  - Export/Import session data
  - Clear all entries
  - View 20-minute turn timer

### Player Interface
- Access via `http://[YOUR-IP]:8080`
- Features:
  - View current initiative order
  - See active character
  - View round number
  - Auto-scrolls to current character

### Controls
- **Next Turn**: Click 'Next Turn' or press Right Arrow/Space
- **Previous Turn**: Click 'Previous Turn' or press Left Arrow
- **Add Entry**: Click 'Add Entry' and fill in the form
- **Edit Entry**: Click the pencil icon (✏️) next to an entry
- **Delete Entry**: Click the X icon (❌) next to an entry

## Technical Details

- Built with vanilla JavaScript
- Uses WebSocket for real-time communication
- Local storage for state persistence
- Node.js backend with ws library
- Responsive design with CSS media queries

## Network Requirements

- Requires all devices to be on the same local network
- Server runs on port 8080
- WebSocket connections use the same port
