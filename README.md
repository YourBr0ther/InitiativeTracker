# D&D Initiative Tracker

A clean, fast, and responsive initiative tracker built with HTML, CSS, and JavaScript — perfect for tabletop RPGs like Dungeons & Dragons. Now with real-time synchronization across multiple devices!

## ✨ Features

- 🎲 Add players, NPCs, groups, and bosses
- 📸 Supports image icons or automatic emote fallbacks (⚔️, 📜, 👥, 💀)
- 🔥 Auto-sort by initiative
- ✏️ Inline editing of initiative, name, and icon
- ⌨️ Keyboard control (Space / Arrows to advance turns)
- 💾 Export and Import session data (JSON)
- ⏰ 20-minute per-turn timer alert
- 🎯 Smooth animations and scroll-to-active effect
- 🌐 **Real-time sync across multiple devices on the same network**

## 💡 How It Works

- Click **Add Entry** to start building your tracker.
- Entries can be **Players, Groups, Bosses, or NPCs** with different visual indicators.
- Edit any row live using ✏️, save using 💾, or delete ❌.
- The table auto-sorts by initiative each time.
- Changes made on any connected device will instantly sync to all others!
- **Keyboard Shortcuts:**
  - ▶️ **Space / Right Arrow**: Next Turn
  - ◀️ **Left Arrow**: Previous Turn

## 🔄 Network Synchronization

The tracker uses WebSockets to provide real-time synchronization:

- All connected devices see the same initiative order
- Turn changes are synchronized across all screens
- Adding, editing, or removing entries updates all connected devices
- Each client has a unique ID to prevent echo effects
- Automatic reconnection if the connection is lost

## 📁 Files

```
index.html        # Main application
server.js         # WebSocket server for real-time sync
package.json      # Node.js dependencies
Template.json     # Sample character template for import
README.md         # You're here!
```

## 🚀 Usage Options

### Option 1: Local Browser Use (No Sync)
Just open `index.html` in any modern browser.

### Option 2: Host on Local Network with Real-time Sync
1. Install Node.js if you don't have it already
2. Run these commands in the project directory:

```bash
npm install
npm start
```

3. Access the tracker from any device on your network at:
   `http://[YOUR_COMPUTER_IP]:8080`

4. Changes made on any connected device will sync to all others in real-time!

## 💾 Import/Export

- **Export Session**: Saves the current state (characters, initiative, current turn, round) as a JSON file
- **Import Session**: Load a previously exported session or a character template
- The included `Template.json` file can be used as a starting point for your campaign

## 🎮 DM Tips

- Use boss highlighting (red background) for important enemies
- Group similar enemies with the (G) tag for cleaner tracking
- Use the NPC tag for friendly non-player characters
- The 20-minute timer helps keep combat moving

## ⚖️ License

MIT – Free to use, fork, modify, and share.

> May your turns be fast and your crits be high!
