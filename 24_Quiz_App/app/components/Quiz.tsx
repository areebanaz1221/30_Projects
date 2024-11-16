"use client";

import React, { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const quizQuestions: Question[] = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote 'To be, or not to be'?",
    options: ["Shakespeare", "Hemingway", "Frost", "Dickens"],
    answer: "Shakespeare",
  },
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold mb-6">Quiz App</h2>
      {showScore ? (
        <div>
          <p className="text-xl font-semibold mb-4">Your Score: {score} / {quizQuestions.length}</p>
          <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-4">
            {quizQuestions[currentQuestion].question}
          </h3>
          <div className="grid gap-2 mb-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="border border-gray-300 p-2 rounded hover:bg-blue-500 hover:text-white"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="text-gray-500">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
