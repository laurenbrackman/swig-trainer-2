import drinksData from "../drink.json"
import { Drink } from "./drinks";

export function getRandomDrink(): Drink {
  const randomDrinkData =
    drinksData[Math.floor(Math.random() * drinksData.length)];
  return new Drink(
    randomDrinkData.name,
    randomDrinkData.type,
    randomDrinkData.ingredients
  );
}

export function generateRandomRecipe(): Drink {
  const drink = getRandomDrink();
  return drink;
}
