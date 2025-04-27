"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import DrinkCard from "@/components/drinkCard";
import { useState } from "react";
import { generateRandomRecipe } from "../utils/drinkGenerator";
import { Drink } from "@/utils/drinks";

export default function Home() {
  const [drink, setDrink] = useState<Drink | null>(null);

  function handleGenerateDrink() {
    const generatedRecipe = generateRandomRecipe();
    setDrink(generatedRecipe);
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header handleGenerateDrink={handleGenerateDrink}/>
      <main className="flex flex-col items-center justify-center p-8">
      {drink && <DrinkCard drink={drink} />}
      </main>
      <Footer />
    </div>
  );
}
