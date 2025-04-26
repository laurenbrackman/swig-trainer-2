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
          <h3>Base: {drink.ingredients.base}</h3>
          {drink.ingredients.topOff ? <h3>Top-Off: {drink.ingredients.topOff}</h3>:null}
          {drink.ingredients.syrups.length>0 ? <h3>Flavors: {drink.ingredients.syrups.join(', ')}</h3>:null}
          {drink.ingredients.purees.length>0 ? <h3>Purees: {drink.ingredients.purees.join(', ')}</h3>:null}
          {drink.ingredients.fruits.length>0 ? <h3>Fruit: {drink.ingredients.fruits}</h3>:null}
          {drink.ingredients.cream ? <h3>Cream: {drink.ingredients.cream}</h3>:null}
          {drink.ingredients.extras.length>0 ? <h3>Extras: {drink.ingredients.extras.join(', ')}</h3>:null}
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
