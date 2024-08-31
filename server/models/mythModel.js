require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const { Schema } = mongoose

const mythSchema = new Schema({
  title: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String
  },
  options: [{ text: String, nextMythId: mongoose.Schema.Types.ObjectId }]
});

const Myth = mongoose.model('Myth', mythSchema)

module.exports = Myth;