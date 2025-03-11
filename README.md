# D&D Initiative Tracker

A clean, fast, and responsive initiative tracker built with HTML, CSS, and JavaScript — perfect for tabletop RPGs like Dungeons & Dragons.

## ✨ Features

- 🎲 Add players, NPCs, groups, and bosses
- 📸 Supports image icons or emote fallback
- 🔥 Auto-sort by initiative
- ✏️ Inline editing of initiative, name, and icon
- ⌨️ Keyboard control (Space / Arrows to advance turns)
- 💾 Export and Import session data (JSON)
- ⏰ 20-minute per-turn timer alert
- 🎯 Smooth animations and scroll-to-active effect
- 🎨 Theme-ready layout (custom color support built-in)

## 💡 How It Works

- Click **Add Entry** to start building your tracker.
- Entries can be **Players, Groups, Bosses, or NPCs**.
- Edit any row live using ✏️, save using 💾, or delete ❌.
- The table auto-sorts by initiative each time.
- **Keyboard Shortcuts:**
  - ▶️ **Space / Right Arrow**: Next Turn
  - ◀️ **Left Arrow**: Previous Turn

## 📁 Files

```
index.html        # Main application
README.md         # You're here!
initiative_session.json (optional)  # Save/load state
```

## 🚀 Usage Options

### Option 1: Local Browser Use
Just open `index.html` in any modern browser.

### Option 2: Host on Local Network
Serve with a lightweight web server:

```bash
npx serve .
```

Players can join from other devices using your IP (e.g., `http://192.168.0.X:3000`).

## 🧙‍♂️ Example Use Cases

- DM screen companion
- Player-facing battle order display
- Theater-of-the-mind sessions
- Convention games or live-stream overlays

## 📦 Future Ideas (Pull Requests Welcome!)

- Add tag filters (Player/NPC/Enemy)
- Visual initiative order ticker
- Persistent theme selector
- Condition tracking per row

## ⚖️ License

MIT – Free to use, fork, modify, and share.

> May your turns be fast and your crits be high!
