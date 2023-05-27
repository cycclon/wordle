const mongoose = require('mongoose')

const letterSchema = new mongoose.Schema({
  key: {
    type: String,
    required: true
  }
}, {versionKey: false})

module.exports = mongoose.model('Letter', letterSchema)