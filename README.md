# Pixel RPG Portfolio — Sugeng Supriyadi (`wongpinter`)

A retro 16-bit RPG-themed developer portfolio built with React 18, TypeScript, Tailwind CSS, and Vite.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
# Standard optimized multi-file build (dist/)
npm run build

# Standalone single-file HTML bundle (dist-singlefile/)
npm run build:singlefile
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
profile/
├── public/                     # Static assets (extracted images, favicon)
│   ├── avatar.webp             # Hero avatar sprite
│   └── github-badge.webp       # GitHub profile badge
├── src/
│   ├── types/                  # TypeScript interfaces (Project, Quest, Skill, etc.)
│   ├── data/                   # Typed portfolio content data files
│   │   ├── profile.ts          # Bio, quotes, contact links, save slots
│   │   ├── menu.ts             # RPG command menu configuration
│   │   ├── projects.ts         # 10 open-source public projects
│   │   ├── quests.ts           # 13 internal and client builds
│   │   └── stats.ts            # Skills progression & technology matrix
│   ├── hooks/                  # Custom React hooks
│   │   ├── useKeyboardNav.ts   # Keyboard navigation (W/S, Arrows, Enter, Esc)
│   │   ├── useKonamiCode.ts    # Easter egg listener (↑ ↑ ↓ ↓ ← → ← → B A)
│   │   └── useTypewriter.ts    # Retro typewriter text stream
│   ├── components/
│   │   ├── common/             # Background stars, scanlines
│   │   ├── layout/             # Header, Footer, PlayerCard
│   │   ├── screens/            # TitleScreen, CommandMenu
│   │   └── modals/             # About, Inventory, ItemDetail, Stats, QuestLog, SavePoint
│   ├── App.tsx                 # Root application state orchestrator
│   ├── main.tsx                # React DOM mount entrypoint
│   └── index.css               # Tailwind directives + RPG pixel shadows & animations
├── index.html                  # SEO, OpenGraph metadata, font preconnects
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🎮 Controls & Shortcuts

- **Title Screen**: Press `Enter` or `Space` (or click button) to enter.
- **Menu Navigation**: Use `W` / `S` or `↑` / `↓` arrow keys to highlight commands.
- **Select Option**: Press `Enter` or click on any menu card.
- **Exit Modal**: Press `Escape` or click outside / close button.
- **Secret Easter Egg**: Enter Konami Code (`↑ ↑ ↓ ↓ ← → ← → B A`) or click the `[ 🎮 KONAMI ]` header button to activate Rainbow Mode.
