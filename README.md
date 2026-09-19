# 🐥 GitHub Pet

> A Tamagotchi-style virtual companion powered by your daily GitHub activity! Keep your pet happy, fed, and leveling up by committing code, opening pull requests, and maintaining your streaks.

---

## 🌟 Features

- **Activity-Powered Pet**: Your pet's mood, XP, and health react dynamically to your GitHub commits and coding habits.
- **XP & Levels**: Earn experience points for contributions and watch your pet evolve.
- **Mood & Streaks**: Track your daily coding streaks and keep your pet happy.
- **Chrome Extension UI**: Clean browser popup with live stats, cute animations, and status indicators.
- **Local SQLite Backend**: Fast and lightweight local data storage for offline state and caching.

---

## 📁 Project Structure

```text
github-pet/
├── backend/          # Node.js + Express API server & SQLite database
│   ├── database.js   # SQLite schema & queries
│   ├── github.js     # GitHub API integration & OAuth flow
│   ├── mood.js       # Pet mood calculation logic
│   ├── streak.js     # Streak tracking algorithms
│   ├── xp.js         # XP calculation & level progression
│   └── server.js     # Express server & API routes
├── extension/        # Chrome Extension (Manifest V3)
│   ├── images/       # Pet SVGs and mood illustrations
│   ├── manifest.json # Extension configuration
│   ├── popup.html    # Extension popup interface
│   ├── popup.css     # Styling & animations
│   └── popup.js      # Frontend interaction & API client
└── preview.html      # Standalone preview of pet moods & SVGs
```

---

## 🚀 Quick Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- A Chromium-based browser (Google Chrome, Brave, Edge, Arc)

---

### 2. Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Register a new GitHub OAuth App at [GitHub Developer Settings](https://github.com/settings/developers):
     - **Application name**: `GitHub Pet`
     - **Homepage URL**: `http://localhost:3000`
     - **Authorization callback URL**: `http://localhost:3000/auth/github/callback`
   - Fill in your `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` in `.env`.

4. **Start the backend server:**
   ```bash
   npm start
   ```
   The backend server will run at `http://localhost:3000`.

---

### 3. Chrome Extension Setup

1. Open your browser and navigate to `chrome://extensions/` (or `edge://extensions/`).
2. Toggle on **Developer mode** in the top-right corner.
3. Click **Load unpacked**.
4. Select the `extension` folder inside this repository (`github-pet/extension`).
5. Pin the **GitHub Pet** extension to your browser toolbar!

---

### 4. Standalone SVG Preview (Optional)

To preview all pet mood graphics and animations without running the backend:
- Open [`preview.html`](preview.html) directly in any web browser.

---

## 🎮 How It Works

| Action | Effect on Pet |
| :--- | :--- |
| **Daily Commits** | Boosts pet mood and maintains your streak |
| **Pull Requests / Reviews** | Grants bonus XP and speeds up leveling |
| **Inactivity / Missed Days** | Pet gets sleepy or grumpy |
