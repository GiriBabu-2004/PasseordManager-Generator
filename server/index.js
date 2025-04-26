import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'

import authRoutes from './routes/auth.js'
import passwordRoutes from './routes/passwords.js'

dotenv.config()
const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors({
  origin: 'https://gen-lock.onrender.com',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}))
app.use(express.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/passwords', passwordRoutes)

// Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
