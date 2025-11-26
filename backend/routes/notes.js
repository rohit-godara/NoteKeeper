import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// Get all notes with pagination, sorting, filtering, and search
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc', category, search } = req.query
    
    const skip = (parseInt(page) - 1) * parseInt(limit)
    
    const where = {
      userId: req.user.userId,
      ...(category && { category }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } }
        ]
      })
    }

    const [notes, total] = await Promise.all([
      prisma.note.findMany({
        where,
        skip,
        take: parseInt(limit),
        orderBy: { [sortBy]: order }
      }),
      prisma.note.count({ where })
    ])

    res.json({
      notes,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message })
  }
})

// Create a new note
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { title, content, category } = req.body
    
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' })
    }

    const note = await prisma.note.create({
      data: {
        title,
        content,
        category,
        userId: req.user.userId
      }
    })

    res.status(201).json(note)
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error: error.message })
  }
})

// Update a note
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params
    const { title, content, category } = req.body

    const note = await prisma.note.findFirst({
      where: { id, userId: req.user.userId }
    })

    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    const updatedNote = await prisma.note.update({
      where: { id },
      data: { title, content, category }
    })

    res.json(updatedNote)
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message })
  }
})

// Delete a note
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params

    const note = await prisma.note.findFirst({
      where: { id, userId: req.user.userId }
    })

    if (!note) {
      return res.status(404).json({ message: 'Note not found' })
    }

    await prisma.note.delete({ where: { id } })
    res.json({ message: 'Note deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message })
  }
})

export default router