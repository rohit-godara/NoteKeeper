# NoteKeeper – A Simple Online Notes App

## 1. Problem Statement
People often need a quick and simple way to save and organize short notes or ideas without using complex apps.

NoteKeeper provides a clean, minimal web interface where users can create, edit, delete, and organize notes efficiently from any device — now with smart sorting, filtering, pagination, and search features for better usability.

## 2. System Architecture
**Frontend → Backend (API) → Database**

### Stack:
- **Frontend**: React.js with React Router
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (via MongoDB Atlas)
- **Authentication**: JWT-based login/signup
- **Hosting**:
  - Frontend → Vercel
  - Backend → Render
  - Database → MongoDB Atlas

## 3. Key Features

| Category | Features |
|----------|----------|
| **Authentication & Authorization** | User signup, login, logout using JWT |
| **CRUD Operations** | Users can create, view, edit, and delete notes |
| **Sorting & Filtering** | Users can sort notes (by date/title) and filter by category or tags |
| **Pagination** | Notes list supports pagination for better performance |
| **Search** | Real-time searching of notes by title or content |
| **Dynamic Feature Rendering** | Components and data are loaded dynamically across multiple pages using React Router and lazy loading |
| **Frontend Routing** | Pages: Home, Login, Signup, Dashboard (My Notes), Profile, Alert Page |
| **UI Simplicity** | Minimal, mobile-friendly design using TailwindCSS |
| **Hosting** | Live URLs for frontend and backend deployment |

## 4. Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js, React Router, Axios, TailwindCSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JWT |
| **Hosting** | Vercel (frontend), Render (backend) |

## 5. API Overview

| Endpoint | Method | Description | Access |
|----------|--------|-------------|--------|
| `/api/auth/signup` | POST | Register new user | Public |
| `/api/auth/login` | POST | Login user and get token | Public |
| `/api/notes` | GET | Get all notes of logged-in user | Authenticated |
| `/api/notes` | POST | Create a new note | Authenticated |
| `/api/notes/:id` | PUT | Update a specific note | Authenticated |
| `/api/notes/:id` | DELETE | Delete a specific note | Authenticated |

## 6. Extended API Functionality

**GET /api/notes** – with Query Parameters

Supports sorting, filtering, pagination, and searching:

| Parameter | Type | Description | Example |
|-----------|------|-------------|----------|
| `page` | Number | Page number for pagination | `/api/notes?page=2&limit=10` |
| `limit` | Number | Number of notes per page | `/api/notes?limit=5` |
| `sortBy` | String | Sort by a field (e.g., createdAt, title) | `/api/notes?sortBy=title` |
| `order` | String | Sort order: asc or desc | `/api/notes?sortBy=createdAt&order=desc` |
| `category` | String | Filter notes by category/tag | `/api/notes?category=work` |
| `search` | String | Search notes by title or content | `/api/notes?search=meeting` |

## 7. Setup Instructions

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update `.env` file with your MongoDB connection string:
   ```
   DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/notekeeper?retryWrites=true&w=majority"
   JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
   ```

4. Generate Prisma client and push schema:
   ```bash
   npm run db:generate
   npm run db:push
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 8. Project Structure
```
Notekeeper/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.jsx
│   └── vercel.json
└── backend/           # Node.js + Express + Prisma backend
    ├── routes/
    ├── middleware/
    ├── prisma/
    └── vercel.json
```