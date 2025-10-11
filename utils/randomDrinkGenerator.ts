import drinksData from "../drink.json";
import { Drink } from "./drinks";

const availableSizes = [12, 16, 24, 32, 44];
const reviverSizes = [16,24,32];

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
  let sizes = availableSizes;
  if(drink.type=="Reviver" || drink.type=="Blended Reviver"){
    sizes = reviverSizes;
  }
  let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  
  if(drink.type == "Hot Cocoa"){
    randomSize = 12;
  }

  else if(drink.type == "Frozen Cocoa"){
    randomSize = 24;
  }

  (drink as any).size = randomSize;
  drink.getRatios(randomSize);
  return drink;
}
