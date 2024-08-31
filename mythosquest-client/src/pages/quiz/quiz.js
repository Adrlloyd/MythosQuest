import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quiz = ({ match }) => {
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`/quizzes/${match.params.id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };
    fetchQuiz();
  }, [match.params.id]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div>
      {showScore ? (
        <div>Your score: {score} out of {quiz.questions.length}</div>
      ) : (
        <>
          <div>
            <div>{quiz.questions[currentQuestion].questionText}</div>
          </div>
          <div>
            {quiz.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(index === quiz.questions[currentQuestion].correctOption)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
