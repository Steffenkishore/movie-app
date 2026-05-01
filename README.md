# 🎬 Movie Web App

A modern movie discovery web application that lets users explore trending films, search for movies, and manage their favorites — built with a production-ready architecture for better performance and reliability.

---

## 🚀 Overview

This application allows users to:

* View currently popular movies
* Search for any movie
* Add and manage favorite movies
* Redirect to Google for more details

The app uses a backend proxy to securely fetch data from TMDB API.

---

## 🛠️ Tech Stack

### Frontend

* React (with Vite)
* Context API (state management)

### Backend

* Node.js
* Express.js

### Deployment

* Frontend → Vercel
* Backend → Render

---

## ✨ Features

* Display trending/popular movies
* Search movies instantly
* Add/remove favorites
* Responsive UI
* Redirect to Google for movie details
* Centralized state using Context API

---

## 🔗 API Integration

This project uses the following endpoints from TMDB API:

Get Popular Movies <br>
```bash
https://api.themoviedb.org/3/movie/popular?api_key=your_api_key
```

Search Movies <br>
```bash
https://api.themoviedb.org/3/search/movie?api_key=your_api_key&query=movie_name
```
---

## 🏗️ Architecture

Instead of calling TMDB directly from the frontend, this app uses a backend proxy.

### Data Flow

React (Frontend)
     ➡️
Backend (Render)
     ➡️
TMDB API
     ➡️
Backend (Render)
     ➡️
React (Frontend)

---

## 🧩 Why Backend Proxy?

Direct frontend calls to TMDB can:

* Fail on public/shared WiFi networks
* Become slow due to IP-based restrictions

### ✅ Solution

* Route API calls through backend
* Backend communicates with TMDB
* Frontend talks only to backend

### 🎯 Benefits

* API key is secure
* No CORS issues
* Better performance
* Works across all networks

---

## ⚙️ Environment Variables

### Frontend (.env)

```env id="7y3b8
VITE_API_URL=https://your-backend-url.onrender.com
```

### Backend (.env)

```env id="r4xk2p"
API_KEY=your_tmdb_api_key  
BASE_URL=https://api.themoviedb.org/3
```

---

## 📥 Installation

### Clone Repository

```bash id="3v4y81"
git clone <your-repo-url>
cd movie-app
```

### Frontend Setup

```bash id="w7d1qa"
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash id="9m2k1z"
cd backend
npm install
node index.js
```

---

## 🚀 Build & Deployment

### Build Frontend

```bash id="m8d3o2"
npm run build
```

This generates a production-ready `/dist` folder.

### Deploy

* Frontend → Vercel
* Backend → Render

---

## 📄 License

This project is for educational and demonstration purposes.

