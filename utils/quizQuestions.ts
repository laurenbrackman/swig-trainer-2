import { Drink } from "@/utils/drinks";

// Constant options
export const availableCreamTypes = ["Coconut Cream", "Vanilla Cream", "Half and Half"];
export const availablePureeTypes = ["Mango Puree", "Strawberry Puree", "Peach Puree", "Raspberry Puree"];
export const availableSyrupTypes = [
    "Watermelon",
    "Vanilla",
    "Toasted Marshmallow",
    "Strawberry",
    "Raspberry",
    "Pomegranate",
    "Pineapple",
    "Peach",
    "Passion Fruit",
    "Mojito Mint",
    "Peppermint",
    "Mango",
    "Hazelnut",
    "Guava",
    "Apple",
    "Grapefruit",
    "Grape",
    "English Toffee",
    "Cupcake",
    "Coconut",
    "Cherry",
    "Cranberry",
    "Butterscotch",
    "Blue Raspberry",
    "Blackberry",
    "SF Watermelon",
    "SF Strawberry",
    "SF Raspberry",
    "SF Peach",
    "SF Pineapple",
    "SF Mango",
    "SF Vanilla",
    "SF Coconut",
  ];
  
  export const availableBases = [
    "Dr. Pepper",
    "Diet Dr. Pepper",
    "Coke",
    "Diet Coke",
    "Sprite",
    "Mountain Dew",
    "Root Beer",
    "Pepsi",
    "Fresca",
    "Lemonade",
    "Water",
    "Sparkling Water",
    "Cocoa",
    "Ice",
    "Reviver",
    "SF Reviver"
  ];

export function generateBaseQuestion(drink: Drink) {
  const correctBase = drink.ingredients.base || "None";

  return {
    id: 2,
    questionText: "What is the base of the drink?",
    options: availableBases,
    correctAnswers: [correctBase],
    field: "base",
  };
}

// Helper: generate syrup questions
export function generateSyrupQuestion(drink: Drink) {
    const correctSyrups = drink.ingredients.syrups.length > 0
      ? drink.ingredients.syrups
      : ["None"];
  
    return {
      id: 3,
      questionText: "Which flavors are included?",
      options: availableSyrupTypes,
      correctAnswers: correctSyrups,
      field: "syrups",
    };
}

export function generateFruitsQuestion(drink: Drink) {
  const correctFruits = drink.ingredients.fruits.length > 0
    ? drink.ingredients.fruits
    : ["None"];

  const availableFruits = [
    "Fresh Lime",
    "Fresh Lemon",
    "Fresh Orange",
  ];

  return {
    id: 6,
    questionText: "Which fruits are included?",
    options: availableFruits,
    correctAnswers: correctFruits,
    field: "fruits",
  };
}

export function generateExtrasQuestion(drink: Drink) {
  const correctExtras = drink.ingredients.extras.length > 0
    ? drink.ingredients.extras
    : ["None"];

  const availableExtras = [
    "Passion Fruit Pearls",
    "Strawberry Pearls",
    "Gummy Sharks",
    "Frozen Mangos",
    "Frozen Strawberries",
    "Reviver Concentrate",
    "SF Reviver Concentrate"
  ];

  return {
    id: 7,
    questionText: "Which extras are included?",
    options: availableExtras,
    correctAnswers: correctExtras,
    field: "extras",
  };
}


export function generatePureeQuestions(drink: Drink) {
    const correctPurees = drink.ingredients.purees.length > 0
    ? drink.ingredients.purees
    : ["None"];

  return {
    id: 4,
    questionText: "Which purees are included?",
    options: availablePureeTypes,
    correctAnswers: correctPurees,
    field: "purees",
  };
}

export function generateCreamQuestion(drink: Drink) {
  const correctCream = drink.ingredients.cream && drink.ingredients.cream.trim() !== "" 
    ? drink.ingredients.cream 
    : "None";

  return {
    id: 5,
    questionText: "Which creams are included?",
    options: availableCreamTypes,
    correctAnswers: [correctCream],
    field: "cream",
  };
}
