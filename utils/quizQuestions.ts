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
    "Sprite Zero",
    "Mountain Dew",
    "Diet Mountain Dew",
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
      questionText: "Select all the syrups used in this drink:",
      options: availableSyrupTypes,
      correctAnswers: correctSyrups,
      field: "syrups",
    };
}

export function generatePureeQuestions(drink: Drink) {
    const correctPurees = drink.ingredients.purees.length > 0
    ? drink.ingredients.purees
    : ["None"];

  return {
    id: 4,
    questionText: "Select all the purees used in this drink:",
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
    questionText: "Which cream is used?",
    options: availableCreamTypes,
    correctAnswers: [correctCream],
    field: "cream",
  };
}
