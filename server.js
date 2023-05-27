require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection

db.on('error', (error)=> console.log(error))
db.once('open', ()=>console.log('Connected to Database Wordle.'))

app.use(express.json())
app.use(cors())

// Solutions
const solutionsRouter = require('./src/routes/solutions')
app.use('/solutions', solutionsRouter)

// Letters
const lettersRouter = require('./src/routes/letters')
app.use('/letters', lettersRouter)

app.listen(process.env.PORT || 3001, ()=> console.log('Server started'))