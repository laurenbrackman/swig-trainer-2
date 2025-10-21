import drinksData from "../drink.json";
import { Drink } from "./drinks";
import { availableSizes, reviverSizes } from "./ingredients";

function pickMenuItem(): Drink {
  const randomDrinkData =
    drinksData[Math.floor(Math.random() * drinksData.length)];
  return new Drink(
    randomDrinkData.name,
    randomDrinkData.type,
    randomDrinkData.ingredients
  );
}

function pickRandomSize(drink : Drink): number {
  let sizes = availableSizes;
  if (drink.type === "Reviver" || drink.type === "Blended Reviver") {
    sizes = reviverSizes;
  }

  let randomSize = sizes[Math.floor(Math.random() * sizes.length)];

  if (drink.type === "Hot Cocoa") randomSize = 12;
  if (drink.type === "Frozen Cocoa") randomSize = 24;

  return randomSize;
}

export function pickDrinkWithSize(): Drink {
  const drink = pickMenuItem();
  drink.size = pickRandomSize(drink)
  drink.ratios = drink.getRatios(drink.size);
  return drink;
}
