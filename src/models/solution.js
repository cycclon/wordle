const mongoose = require('mongoose')

const solutionSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  }
}, {versionKey: false})

module.exports = mongoose.model('Solution', solutionSchema)