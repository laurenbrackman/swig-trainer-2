import drinksData from "../drink.json";
import { Drink } from "./drinks";

const availableSizes = [12, 16, 24, 32, 44];

export function pickMenuItem(): Drink {
  const randomDrinkData =
    drinksData[Math.floor(Math.random() * drinksData.length)];
  return new Drink(
    randomDrinkData.name,
    randomDrinkData.type,
    randomDrinkData.ingredients
  );
}

export function pickExactDrink(): Drink {
  const drink = pickMenuItem();
  const randomSize = availableSizes[Math.floor(Math.random() * availableSizes.length)];
  (drink as any).size = randomSize;
  drink.generateRecipe(randomSize);
  return drink;
}
