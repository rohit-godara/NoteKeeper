# NoteKeeper - Login/Signup Implementation

A simple notes app with authentication using React + Vite frontend and Node.js + Express + Prisma + MongoDB backend.

## Project Structure
```
Notekeeper/
├── frontend/          # React + Vite frontend
└── backend/           # Node.js + Express + Prisma backend
```

## Setup Instructions

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

## Features Implemented
- ✅ User signup with name, email, password
- ✅ User login with email, password
- ✅ JWT-based authentication
- ✅ Protected routes
- ✅ Responsive design with TailwindCSS
- ✅ Error handling and loading states
- ✅ Automatic token management
- ✅ Basic dashboard with logout functionality

## API Endpoints
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user

## Tech Stack
- **Frontend**: React, Vite, React Router, TailwindCSS, Axios
- **Backend**: Node.js, Express.js, Prisma, JWT, bcryptjs
- **Database**: MongoDB

## Next Steps
- Add notes CRUD functionality
- Implement sorting, filtering, and search
- Add pagination
- Deploy to Vercel (frontend) and Render (backend)