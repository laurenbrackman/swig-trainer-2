import { Drink } from "@/utils/drinks";

// Constant options
export const availableCreamTypes = ["Coconut Cream", "Vanilla Cream", "Half and Half", "None"];
export const availablePureeTypes = ["Mango Puree", "Strawberry Puree", "Peach Puree", "Raspberry Puree", "None"];
export const availableSyrupTypes = ["Coconut", "Vanilla", "Peach", "Strawberry", "None"];
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
  ];
// Helper: generate cream question
export function generateCreamQuestion(drink: Drink) {
  const correctCream = drink.ingredients.cream && drink.ingredients.cream.trim() !== "" 
    ? drink.ingredients.cream 
    : "None";

  return {
    id: 1,
    questionText: "Which cream is used?",
    options: availableCreamTypes,
    correctAnswer: correctCream,
    field: "cream",
  };
}

// Helper: generate base question
export function generateBaseQuestion(drink: Drink) {
  const correctBase = drink.ingredients.base || "None";

  return {
    id: 2,
    questionText: "What is the base of the drink?",
    options: availableBases,
    correctAnswer: correctBase,
    field: "base",
  };
}

// Helper: generate syrup questions
export function generateSyrupQuestions(drink: Drink) {
  if (!drink.ingredients.syrups || drink.ingredients.syrups.length === 0) return [];

  return drink.ingredients.syrups.map((syrup, index) => ({
    id: 3 + index, // keep ids unique
    questionText: `Which syrup #${index + 1} is used?`,
    options: availableSyrupTypes,
    correctAnswer: syrup,
    field: `syrup${index + 1}`,
  }));
}

// Helper: generate puree questions
export function generatePureeQuestions(drink: Drink) {
  if (!drink.ingredients.purees || drink.ingredients.purees.length === 0) return [];

  return drink.ingredients.purees.map((puree, index) => ({
    id: 6 + index, // shift IDs accordingly
    questionText: `Which puree #${index + 1} is used?`,
    options: availablePureeTypes,
    correctAnswer: puree,
    field: `puree${index + 1}`,
  }));
}
