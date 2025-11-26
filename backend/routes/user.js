import express from 'express'
import { PrismaClient } from '@prisma/client'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()
const prisma = new PrismaClient()

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        name: true,
        email: true,
        profilePhoto: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { notes: true }
        }
      }
    })

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching profile', error: error.message })
  }
})

// Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { name, profilePhoto } = req.body

    const updateData = {}
    
    if (name !== undefined) {
      if (!name || !name.trim()) {
        return res.status(400).json({ message: 'Name cannot be empty' })
      }
      updateData.name = name.trim()
    }
    
    if (profilePhoto !== undefined) {
      updateData.profilePhoto = profilePhoto
    }

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'No data to update' })
    }

    const updatedUser = await prisma.user.update({
      where: { id: req.user.userId },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        profilePhoto: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: { notes: true }
        }
      }
    })

    res.json(updatedUser)
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error: error.message })
  }
})

export default router