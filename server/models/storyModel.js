require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const { Schema } = mongoose

const storySchema = new Schema( {
  title: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String
  }
});

const Story = mongoose.model('Story', storySchema)

module.exports = Story;