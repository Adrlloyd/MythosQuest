require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const { Schema } = mongoose

const mythSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  options: [{ text: String, nextMythId: mongoose.Schema.Types.ObjectId }]
});

const Myth = mongoose.model('Myth', mythSchema)

module.exports = Myth;