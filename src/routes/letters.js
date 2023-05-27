const express = require('express')
const router = express.Router()
const Letter = require('../models/letter')

// GET SOLUTIONS
router.get('/', async (req, res) => {
  try {
    const letters = await Letter.find()
    res.json(letters)
  } catch (error) {
    res.status(500).json({message: error.message})
  }  

})

module.exports = router