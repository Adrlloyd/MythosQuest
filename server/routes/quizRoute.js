const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');
const { getQuizzes, getQuiz } = require('../controllers/quizController');


// returns all quizzes
router.get('/quizzes', getQuizzes);

// returns one quiz
router.get('/quizzes/:id', getQuiz);


module.exports = router;