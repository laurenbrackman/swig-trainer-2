"use client";

import { useState, useEffect } from "react";
import { Drink } from "@/utils/drinks";

type PollCardProps = {
  drink: Drink;
};

type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  field: string; // ex: "cup", "cream", "syrup1", "syrup2", etc.
};
  
function generateQuestions(drink: Drink): Question[] {
    const correctCream = drink.ingredients.cream && drink.ingredients.cream.trim() !== ""
    ? drink.ingredients.cream
    : "None";
    const availableCreamTypes = ["Coconut Cream", "Vanilla Cream", "Half and Half", "None"];

    return [
      {
        id: 0,
        questionText: "What type of cup is needed?",
        options: ["Foam", "Paper", "Plastic"],
        correctAnswer: drink.getCupType(),
        field: "cup",
      },
      {
        id: 1,
        questionText: "Which cream is used?",
        options: availableCreamTypes,
        correctAnswer: correctCream,
        field: "cream",
      },
      // More questions: syrup1 amount, syrup2 amount, puree amount, etc.
    ];
  }
  

export default function PollCard({ drink }: PollCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions: Question[] = generateQuestions(drink);

  function handleAnswer(option: string) {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: option,
    }));
  }

  function handleNext() {
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSubmitted(false);
  }, [drink]);

  const currentQuestion = questions[currentQuestionIndex];
  const score = questions.reduce((acc, q, index) => {
    return userAnswers[index] === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  return (
    <div className="border rounded-lg p-6 shadow-md mt-4 text-center">
      {!submitted ? (
        <>
          <h3 className="mt-6 text-lg font-semibold">{currentQuestion.questionText}</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-full border ${
                  userAnswers[currentQuestionIndex] === option ? "bg-primaryRed text-white" : "bg-gray-200"
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          {currentQuestionIndex < questions.length - 1 ? (
            <button
              className="mt-6 px-6 py-2 bg-primaryRed text-white rounded-lg hover:brightness-90 transition disabled:opacity-50"
              onClick={handleNext}
              disabled={!userAnswers[currentQuestionIndex]}
            >
              Next
            </button>
          ) : (
            <button
              className="mt-6 px-6 py-2 bg-primaryRed text-white rounded-lg hover:brightness-90 transition disabled:opacity-50"
              onClick={handleSubmit}
              disabled={!userAnswers[currentQuestionIndex]}
            >
              Submit
            </button>
          )}
        </>
      ) : (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-4">Results</h3>
          <p className="text-lg mb-6">
            You got {score} out of {questions.length} correct!
        </p>
          {questions.map((q, index) => (
            <div key={q.id} className="mb-4">
              <p className="font-semibold">{q.questionText}</p>
              <p>
                Your answer:{" "}
                <span
                  className={
                    userAnswers[index] === q.correctAnswer ? "text-green-600" : "text-red-600"
                  }
                >
                  {userAnswers[index]}
                </span>
              </p>
              {userAnswers[index] !== q.correctAnswer && (
                <p className="text-sm text-gray-600">Correct answer: {q.correctAnswer}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}