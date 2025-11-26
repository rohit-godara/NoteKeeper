# NoteKeeper Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

## Quick Start

### 1. Backend Setup
```bash
cd backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the backend directory:
```env
DATABASE_URL="your-mongodb-connection-string"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
PORT=5000
```

### 3. Database Setup
```bash
npm run db:generate
npm run db:push
```

### 4. Start Backend Server
```bash
npm run dev
```
Backend will run on http://localhost:5000

### 5. Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on http://localhost:5173

## Features Included
✅ User Authentication (Signup/Login)
✅ CRUD Operations for Notes
✅ Search and Filter Notes
✅ Sort by Date/Title
✅ Pagination
✅ Category/Tag Support
✅ Responsive Design
✅ Real-time Updates

## API Endpoints
- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/notes` - Get notes (with pagination, search, filter)
- `POST /api/notes` - Create note
- `PUT /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

## Deployment
- Frontend: Deploy to Vercel
- Backend: Deploy to Render
- Database: MongoDB Atlas

Your NoteKeeper app is now ready! 🎉