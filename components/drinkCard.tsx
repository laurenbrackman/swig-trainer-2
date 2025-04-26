"use client";
import { useState } from "react";
import { generateRandomRecipe } from "../utils/drinkGenerator";
import { Drink } from "@/utils/drinks";

export default function DrinkGenerator() {
  const [drink, setDrink] = useState<Drink | undefined>(undefined);

  function handleGenerateDrink() {
    const generatedRecipe = generateRandomRecipe();
    setDrink(generatedRecipe);
  }

  return (
    <div className="flex flex-col items-center">
      {drink && drink.name && (
        <div className="mt-4 p-4">
          <h2 className="text-xl font-bold">{drink.name}</h2>
        </div>
      )}
      <button
        onClick={handleGenerateDrink}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Generate Drink
      </button>
    </div>
  );
}
