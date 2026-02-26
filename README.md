# 🐴 HorseOS

**Scheduled Horse Moments for Digital Wellness**

A retro Windows 98/XP-style digital wellness platform that forces mandatory breaks using the power of absurdity.

![HorseOS Screenshot](screenshot.png)

## 🚀 What Is This?

HorseOS is a browser-based wellness suite styled as a Windows 98 "virus" that's actually good for you. It interrupts doomscrolling and overwork with mandatory "Horse Moments" — absurdist breaks that force contemplation and reflection.

**The Philosophy:** *You cannot close this window. Please contemplate why.*

## ✨ Features

### 🐴 ScheduledHorseMoment.exe
- Full-screen modal that CAN'T be closed for 60 seconds
- Random contemplation prompts with 3D horse
- Progress bar and countdown timer
- "I am Contemplating" button (mandatory participation)

### 📁 Retro Windows 98 Desktop
- **My Computer** — Classic file explorer
- **Recycle Bin** — Delete your screen time guilt
- **Internet Explorer** — Horse facts API
- **Notepad** — Read-only horse facts
- **Start Menu** — Authentic Windows 98 experience

### 🎯 Digital Wellness Tools
- **Mandatory Break Timer** — Interrupts after 20 minutes of doomscrolling
- **Contemplation Prompts** — 20+ existential questions
- **Global Stats** — Track worldwide "Horse Moments Completed"
- **Uncloseable Windows** — The horse cannot be dismissed

## 🛠️ Technology Stack

- **Pure HTML/CSS/JS** — No frameworks, maximum retro
- **CSS3 Animations** — Floating horse, progress bars
- **LocalStorage** — Track contemplation count
- **Responsive Design** — Works on mobile (though the horse prefers desktop)

## 📁 File Structure

```
horseos/
├── index.html          # Main desktop interface
├── css/
│   └── horseos.css     # Windows 98 aesthetic styles
├── js/
│   └── horseos.js      # Interactive functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Local Development
```bash
cd horseos
# Open in browser
open index.html
# Or serve locally
python3 -m http.server 8080
```

### Deploy
This is a static site — deploy anywhere:
- GitHub Pages
- Vercel
- Netlify
- Any static host

## 🎮 How to Use

1. **Wait for startup** — The classic Windows 98 boot sequence
2. **Double-click icons** — Open various "applications"
3. **Experience Horse Moment** — Automatic full-screen contemplation
4. **Cannot close it** — Seriously, you have to wait
5. **Reflect** — Answer the horse's questions

### Keyboard Shortcuts
- `Windows/Super` — Open Start Menu
- `Alt+F4` — Close windows (except Horse Moments)

## 🎨 Customization

### Add More Contemplation Prompts
Edit `js/horseos.js`:
```javascript
const contemplationPrompts = [
    "Your custom prompt here",
    "Another deep question",
    // ...
];
```

### Change the Horse
Replace the emoji in CSS:
```css
.horse-3d {
    content: "🦄"; /* Or any emoji */
}
```

### Adjust Timer Duration
```javascript
let currentTimer = 120; // 2 minutes of contemplation
```

## 🌟 Roadmap

### Phase 1: Browser Extension
- [ ] Chrome/Firefox extension
- [ ] Intercept doomscrolling on real sites
- [ ] Configurable break intervals

### Phase 2: Team/Enterprise
- [ ] Slack/Discord bot
- [ ] Team Horse Moments
- [ ] Corporate wellness dashboard

### Phase 3: Physical Product
- [ ] Horse Moment Timer device
- [ ] Desk companion with speaker
- [ ] "The horse judges you" LED display

### Phase 4: Mobile
- [ ] iOS/Android app
- [ ] Phone freezing during Horse Moments
- [ ] Widget for home screen

## 🤝 Contributing

This is a passion project about digital wellness through absurdity. Contributions welcome!

### Ideas Wanted
- More contemplation prompts
- Additional Windows 98 "applications"
- Horse animations
- Sound effects (Windows 98 startup sound, horse neigh)

## 📜 License

MIT License — Free to use, modify, and deploy.

**One condition:** You must take at least one Horse Moment before shipping to production.

## 🙏 Acknowledgments

- Inspired by the "Scheduled Horse Moment" meme
- Windows 98 aesthetic nostalgia
- Everyone who needs a break but won't take one

---

<p align="center">
  <strong>🐴 Please stand by for a scheduled Horse Moment.</strong><br>
  <em>This is not a suggestion.</em>
</p>