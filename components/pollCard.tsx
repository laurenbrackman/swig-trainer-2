"use client";

import { useState, useEffect } from "react";
import { Drink } from "@/utils/drinks";

type PollCardProps = {
  drink: Drink;
};

export default function PollCard({ drink }: PollCardProps) {
  const [selectedType, setSelectedType] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const drinkTypes = ["Soda", "Reviver", "Refresher", "Blended Reviver", "Hot Cocoa", "Frozen Cocoa"];

  useEffect(() => {
    setSelectedType("");
    setSubmitted(false);
    setIsCorrect(null);
  }, [drink]);

  function handleSubmit() {
    setSubmitted(true);
    setIsCorrect(selectedType === drink.type);
  }

  return (
    <div className="border rounded-lg p-6 shadow-md mt-4 text-center">
      {!submitted ? (
        <>
          <h3 className="mt-6 text-lg font-semibold">What type of drink is this?</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {drinkTypes.map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full border ${
                  selectedType === type ? "bg-primaryRed text-white" : "bg-gray-200"
                }`}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <button
            className="mt-6 px-6 py-2 bg-primaryRed text-white rounded-lg hover:brightness-90 transition disabled:opacity-50"
            onClick={handleSubmit}
            disabled={!selectedType}
          >
            Submit Answer
          </button>
        </>
      ) : (
        <div className="mt-6">
          {isCorrect ? (
            <p className="text-green-600 font-semibold text-xl">Correct! 🎉</p>
          ) : (
            <p className="text-red-600 font-semibold text-xl">
              Incorrect. The correct answer was <strong>{drink.type}</strong>.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
