import React from "react";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(1);
  const [currentOption, setCurrentOption] = React.useState(null);
  const [userAnswer, setUserAnswer] = React.useState([]);
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
  const handleSubmit = () => {
    if (currentOption) {
      setUserAnswer([
        ...userAnswer,
        Questions[currentOption].options[currentOption],
      ]);
      setCurrentQuestion(currentQuestion + 1);
      setCurrentOption(null);
    } else {
      alert("Please select an option");
    }
  };
  return (
    <div className="question-container">
      <h1>Quiz App</h1>
      <div>
        <h2>
          Q{currentQuestion}. {Questions[currentQuestion].question}
        </h2>
      </div>
      <div className="options">
        {Questions[currentQuestion].options.map((option, idx) => (
          <button
            key={idx}
            className={currentOption === idx ? "option bg-green" : "option"}
            onClick={() => setCurrentOption(idx)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="submit-handle">
        <button
          className="option"
          onClick={() => {
            handleSubmit();
          }}
        >
          {currentQuestion + 1 === 10 ? "Submit" : "Next Question"}
        </button>
        <button className="option">Skip</button>
      </div>
    </div>
  );
};

export default QuizApp;
