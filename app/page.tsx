"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import DrinkCard from "@/components/drinkCard";
import PollCard from "@/components/pollCard";
import { useState } from "react";
import { pickDrinkWithSize } from "../utils/randomDrinkGenerator";
import { Drink } from "@/utils/drinks";

export default function Home() {
  const [drink, setDrink] = useState<Drink | null>(null);

  function handleGenerateDrink() {
    const generatedRecipe = pickDrinkWithSize();
    setDrink(generatedRecipe);
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header handleGenerateDrink={handleGenerateDrink}/>
      <main className="flex flex-col items-center p-8">
      {drink && <DrinkCard drink={drink} />}
      {drink && <PollCard drink={drink} />}
      </main>
      <Footer />
    </div>
  );
}
