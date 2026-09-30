# Kushagra Tomar — Personal Developer Portfolio

An optimized, production-ready developer portfolio application featuring a dark brutalist 3D card deck engine interface, interactive terminal, Web Audio SFX synthesis, and an Express backend API.

## Architecture

- **`frontend/`**: Built with React, TypeScript, Vite, and Tailwind CSS.
  - Card deck viewport & 3D stacking engine
  - Stacked & Spread view modes
  - Full-screen modal expansion
  - Interactive CLI Terminal
  - Web Audio SFX synthesizer
- **`backend/`**: Built with Node.js, Express, TypeScript, CORS, and Rate Limiting.
  - `/api/contact`: Secure contact form endpoint with validation and rate limiting.

## Quick Start

### 1. Run Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2. Run Backend
```bash
cd backend
npm install
npm run dev
```

## Environment Variables

- `frontend/.env`:
  ```env
  VITE_API_BASE_URL=http://localhost:5000
  ```
- `backend/.env`:
  ```env
  PORT=5000
  CORS_ORIGIN=http://localhost:5173
  ```
