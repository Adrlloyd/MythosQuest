require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const { Schema } = mongoose

const quizSchema = new Schema({
  mythId: {type: mongoose.Schema.Types.ObjectId, ref: 'Myth'},
  questtions: [
    {
      questionText: {type: String, required: true },
      options: [String],
      correctOption: {type: Number, required: true },
    },
  ],
});

const Quiz = mongoose.model('Quiz', quizSchema)

module.exports = Quiz;