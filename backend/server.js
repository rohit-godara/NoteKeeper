import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import notesRoutes from './routes/notes.js'
import userRoutes from './routes/user.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5001

app.use(cors(
  {
    origin: "*",
    credentials: true
  }
))
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/notes', notesRoutes)
app.use('/api/user', userRoutes)

app.get('/', (req, res) => {
  res.json({ message: 'NoteKeeper API is running!' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})