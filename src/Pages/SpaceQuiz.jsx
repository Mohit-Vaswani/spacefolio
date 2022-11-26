import Navbar from "../Components/Navbar";
import { useState } from "react";

const QUIZ_QUESTIONS = [
  {
    Question:
      "Which year is Halley''s Comet expected to return to the solar system?",
    Answers: [
      { Answer: "2061", isCorrect: true },
      { Answer: "2045", isCorrect: false },
      { Answer: "2110", isCorrect: false },
      { Answer: "2086", isCorrect: false },
    ],
  },
  {
    Question:
      "With which US spacecraft did Neil Armstrong and Edwin Aldrin, Jr. land on the moon?",
    Answers: [
      { Answer: "Appolo 11", isCorrect: true },
      { Answer: "Appolo 13", isCorrect: false },
      { Answer: "Appolo 9", isCorrect: false },
      { Answer: "Appolo 5", isCorrect: false },
    ],
  },
  {
    Question: "The atmosphere in Mars is mostly composed of:",
    Answers: [
      { Answer: "Helium", isCorrect: false },
      { Answer: "Nitrozen", isCorrect: false },
      { Answer: "Carbon dioxide", isCorrect: true },
      { Answer: "Oxygen", isCorrect: false },
    ],
  },
  {
    Question: "What is the outermost region of the Sun’s atmosphere called?",
    Answers: [
      { Answer: "Penumbra", isCorrect: false },
      { Answer: "Core", isCorrect: false },
      { Answer: "Chromosphere", isCorrect: false },
      { Answer: "Corona", isCorrect: true },
    ],
  },
  {
    Question: "The number of terrestrial planets in the solar system is:",
    Answers: [
      { Answer: "8", isCorrect: false },
      { Answer: "4", isCorrect: true },
      { Answer: "5", isCorrect: false },
      { Answer: "2", isCorrect: false },
    ],
  },
];

const SpaceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <main className="">
      <section className="">
        <div className="">
          <h3 className="">Quiz Time</h3>
          {showScore ? (
            <div className="">
              <p className="">
                You have scored {score} out of {QUIZ_QUESTIONS.length}
              </p>
              <button className="" type="submit" onClick={resetQuiz}>
                Play Again!!
              </button>
            </div>
          ) : (
            <>
              <h2 className="">{QUIZ_QUESTIONS[currentQuestion].Question}</h2>
              <div className="">
                {QUIZ_QUESTIONS[currentQuestion].Answers.map((answer) => (
                  <button
                    className=""
                    onClick={() => handleAnswerResponse(answer.isCorrect)}
                  >
                    {answer.Answer}
                  </button>
                ))}
              </div>
              <div className="">
                <p>
                  {currentQuestion + 1}
                  <span>/{QUIZ_QUESTIONS.length}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default SpaceQuiz;
