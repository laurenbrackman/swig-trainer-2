"use client";

import { useState, useEffect } from "react";
import { Drink } from "@/utils/drinks";
import {
  generateCreamQuestion,
  generateBaseQuestion,
  generateSyrupQuestion,
  generatePureeQuestions,
  generateFruitsQuestion,
  generateExtrasQuestion,
} from "@/utils/quizQuestions";

type PollCardProps = {
  drink: Drink;
};

type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswers: string[];
  field: string;
};

function arraysMatch(arr1: string[], arr2: string[]) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  if (set1.size !== set2.size) return false;
  for (const item of set1) {
    if (!set2.has(item)) return false;
  }
  return true;
}

function generateQuestions(drink: Drink): Question[] {
  return [
    {
      id: 0,
      questionText: "What type of cup is needed?",
      options: ["Foam", "Plastic","Kids", "Paper"],
      correctAnswers: [drink.getCupType()],
      field: "cup",
    },
    generateBaseQuestion(drink),
    generateSyrupQuestion(drink),
    generateFruitsQuestion(drink),
    generatePureeQuestions(drink),
    generateCreamQuestion(drink),
    generateExtrasQuestion(drink)
  ];
}

export default function PollCard({ drink }: PollCardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({});
  const [submitted, setSubmitted] = useState(false);

  const questions: Question[] = generateQuestions(drink);
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setSubmitted(false);
  }, [drink]);

  function toggleOption(option: string) {
    setUserAnswers((prev) => {
      const currentSelections = prev[currentQuestionIndex] || [];
  
      let newSelections: string[];
  
      if (currentSelections.includes(option)) {
        newSelections = currentSelections.filter((o) => o !== option);
      } else {
        newSelections = [...currentSelections.filter((o) => o !== "None"), option];
      }
  
      return {
        ...prev,
        [currentQuestionIndex]: newSelections,
      };
    });
  }

  function handleNext() {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: (prev[currentQuestionIndex] || []).length > 0
        ? prev[currentQuestionIndex]
        : ["None"],
    }));
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  function handleBack() {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
  }  

  function handleSubmit() {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: (prev[currentQuestionIndex] || []).length > 0
        ? prev[currentQuestionIndex]
        : ["None"],
    }));
    setSubmitted(true);
  }

  const score = questions.reduce((acc, q, index) => {
    const userAnswer = userAnswers[index] || [];
    return arraysMatch(userAnswer, q.correctAnswers) ? acc + 1 : acc;
  }, 0);

  return (
    <div className="bg-mint rounded-lg p-6 shadow-md mt-4 text-center">
      {!submitted ? (
        <>
          <h3 className="mt-6 text-lg font-semibold">{currentQuestion.questionText}</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-full ${
                  (userAnswers[currentQuestionIndex] || []).includes(option)
                    ? "bg-primaryRed text-white"
                    : "bg-background text-foreground dark:bg-gray-700 dark:text-white"
                } shadow-sm transition`}
                onClick={() => toggleOption(option)}
              >
                {[2].includes(currentQuestionIndex) ? <img src={`/images/${option.toLowerCase()}.png`} alt={option} className="inline w-20"/>:""}        
                {[0,1,3,5,6].includes(currentQuestionIndex) ? <img src={`/images/${option.toLowerCase()}.png`} alt={option} className="inline-block w-20"/> : option}             
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
    {currentQuestionIndex > 0 ? (
    <button
      className="px-6 py-3 bg-background text-foreground rounded-full shadow-md hover:brightness-95 transition"
      onClick={handleBack}
    >
      Back
    </button>
  ) : (
    <div className="w-[96px]" />
  )}

  {currentQuestionIndex < questions.length - 1 ? (
    <button
      className="px-6 py-3 bg-primaryRed text-white rounded-full shadow-md hover:brightness-110 transition"
      onClick={handleNext}
    >
      Next
    </button>
  ) : (
    <button
      className="px-6 py-3 bg-primaryRed text-white rounded-full shadow-md hover:brightness-110 transition"
      onClick={handleSubmit}
    >
      Submit
    </button>
  )}
</div>
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
                    arraysMatch(userAnswers[index] || [], q.correctAnswers)
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {(userAnswers[index] || []).join(", ") || "No answer"}
                </span>
              </p>
              {!arraysMatch(userAnswers[index] || [], q.correctAnswers) && (
                <p className="text-sm text-gray-600">
                  Correct answer: {q.correctAnswers.join(", ")}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
