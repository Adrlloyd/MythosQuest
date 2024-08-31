const Quiz = require('../models/quizModel');

const getQuizzes = async (req, res) => {
  const result = await Quiz.find()
  res.send({'quizzes': result})
};

const getQuiz = async (req, res) => {
  const {id} = req.params
  const result = await Quiz.findById(id)
  res.send(result)
};

module.exports = {getQuizzes, getQuiz};