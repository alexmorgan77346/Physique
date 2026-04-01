# 💪 Physique Program

A Progressive Web App (PWA) for gym workout tracking — installable on any device.

## Features
- 6 muscle group workouts (Back, Biceps, Chest, Triceps, Shoulders, Legs)
- Exercise GIFs with zoom modal
- Dark / Light theme toggle (status bar color updates too)
- Fully offline-capable via Service Worker
- Installable on Android & iOS home screen

## File Structure
```
physique/
├── index.html          # Main HTML
├── style.css           # All styles + theme variables
├── app.js              # Theme, rendering, SW registration
├── data.js             # Exercise data
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (cache-first)
├── icons/
│   ├── icon-72.png
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-180.png
│   ├── icon-192.png    ← maskable
│   └── icon-512.png    ← maskable
└── .github/
    └── workflows/
        └── deploy.yml  # Auto-deploy to GitHub Pages
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo
2. Go to **Settings → Pages → Source → GitHub Actions**
3. The `deploy.yml` workflow will auto-deploy on every push to `main`
4. Your app will be live at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Install as PWA

- **Android**: Open in Chrome → browser menu → "Add to Home Screen"
- **iOS**: Open in Safari → Share → "Add to Home Screen"
