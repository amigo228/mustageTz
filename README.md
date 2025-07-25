# Task Manager

A simple task manager app built with **Electron + React (Vite)** on the frontend and **NestJS + PostgreSQL** on the backend.



##  Project Structure
`
task-manager/
    ├── client/ # Frontend (React)
    #Frontend (Electron)
├── task-manager-server/ # Backend (NestJS + PostgreSQL)
`

Setup

### 1. Install dependencies

```bash
# Root (install Electron wrapper deps)
npm install

# Frontend
cd client
npm install
cd ..

# Start the app
npm run dev

# Backend
See [task-manager-server/README.md]([https://www.postgresql.org/](https://github.com/amigo228/mustageTz/blob/master/task-manager-server/README.md)) for full backend setup instructions.

# Database
You need PostgreSQL installed locally (install from [official site](https://www.postgresql.org/download/)) or use Docker to quickly start.
