const express = require('express')
const router = express.Router()
const Solution = require('../models/solution')

// GET SOLUTIONS
router.get('/', async (req, res) => {
  try {
    const solutions = await Solution.find()
    res.json(solutions)
  } catch (error) {
    res.status(500).json({message: error.message})
  }  

})

module.exports = router