import React, { useRef, useState } from "react";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentOption, setCurrentOption] = useState();
  const [score, setScore] = useState(null); // State to hold the score
  const userAnswers = useRef([]);
  const Questions = [
    {
      id: 0,
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      id: 1,
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      answer: "Jupiter",
    },
    {
      id: 2,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      answer: "Au",
    },
    {
      id: 3,
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      id: 4,
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      answer: "Au",
    },
    {
      id: 5,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 6,
      question: "What gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      id: 7,
      question: "Which country is the largest producer of coffee in the world?",
      options: ["Brazil", "Vietnam", "Columbia", "Ethiopia"],
      answer: "Brazil",
    },
    {
      id: 8,
      question: "Which element has the highest melting point?",
      options: ["Gold", "Silver", "Platinum", "Tungsten"],
      answer: "Tungsten",
    },
    {
      id: 9,
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: "Yen",
    },
  ];
  const CalculateScore = () => {
    let UserScore = 0;
    userAnswers.current.forEach((ele, idx) => {
      if (ele === Questions[idx].answer) {
        UserScore += 1;
      }
    });
    setScore(UserScore); // Update the score state
  };

  const handleSubmit = () => {
    if (currentOption) {
      userAnswers.current.push(currentOption);
      if (currentQuestion === Questions.length - 1) {
        CalculateScore();
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentOption(null);
      }
    } else {
      alert("Please select an option");
    }
  };

  if (score !== null) {
    return (
      <div className="question-container">
        <h1>Quiz App</h1>
        <h2>
          Your Score: {score}/{Questions.length}
        </h2>
      </div>
    );
  }

  return (
    <div className="question-container">
      <h1>Quiz App</h1>
      <h2>
        Q{currentQuestion + 1}. {Questions[currentQuestion].question}
      </h2>
      <div className="options">
        {Questions[currentQuestion].options.map((option, idx) => (
          <button
            key={idx}
            className={currentOption === option ? "option bg-green" : "option"}
            onClick={() => {
              setCurrentOption(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="submit-handle">
        <button className="option" onClick={handleSubmit}>
          {currentQuestion === Questions.length - 1
            ? "Submit"
            : "Save & Next Question"}
        </button>
        <button
          className="option"
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
            setCurrentOption(null);
          }}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default QuizApp;
