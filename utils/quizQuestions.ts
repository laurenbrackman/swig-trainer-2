import { Drink } from "@/utils/drinks";
import { ingredients } from "./ingredients";

type DisplayMode = 'image' | 'text' | 'both';

export type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswers: string[];
  field: string;
  display?: DisplayMode;
};


function generateCupQuestion(cup: string) {
    return {
      id: 0,
      questionText: "What type of cup is needed?",
      options: ingredients.CupTypes,
      correctAnswers: [cup],
      field: "cup",
      display: "both" as const,
    };
}

function generateBaseQuestion(drink: Drink) {
  const correctBase = drink.ingredients.base || "None";

  return {
    id: 1,
    questionText: "What is the base of the drink?",
    options: ingredients.Bases,
    correctAnswers: [correctBase],
    field: "base",
    display: 'image' as const,
  };
}

function generateTopOffQuestion(drink: Drink) {
  const correctTopOff = drink.ingredients.topOff || "None";

  return {
    id: 2,
    questionText: "What is the top-off of the drink?",
    options: ingredients.TopOffs,
    correctAnswers: [correctTopOff],
    field: "topOff",
    display: 'image' as const,
  };
}

function generatePureeQuestions(drink: Drink) {
    const correctPurees = drink.ingredients.purees.length > 0
    ? drink.ingredients.purees
    : ["None"];

  return {
    id: 3,
    questionText: "Which purees are included?",
    options: ingredients.PureeTypes,
    correctAnswers: correctPurees,
    field: "purees",
    display: 'image' as const,
  };
}

function generateFruitsQuestion(drink: Drink) {
  const correctFruits = drink.ingredients.fruits.length > 0
    ? drink.ingredients.fruits
    : ["None"];

  return {
    id: 4,
    questionText: "Which fruits are included?",
    options: ingredients.Fruits,
    correctAnswers: correctFruits,
    field: "fruits",
    display: 'image' as const,
  };
}

function generateSyrupQuestion(drink: Drink) {
    const correctSyrups = drink.ingredients.syrups.length > 0
      ? drink.ingredients.syrups
      : ["None"];
  
    return {
      id: 5,
      questionText: "Which flavors are included?",
      options: ingredients.SyrupTypes,
      correctAnswers: correctSyrups,
      field: "syrups",
      display: 'both' as const,
    };
}

function generateCreamQuestion(drink: Drink) {
  const correctCream = drink.ingredients.cream && drink.ingredients.cream.trim() !== "" 
    ? drink.ingredients.cream 
    : "None";

  return {
    id: 6,
    questionText: "Which creams are included?",
    options: ingredients.CreamTypes,
    correctAnswers: [correctCream],
    field: "cream",
    display: 'both' as const,
  };
}

function generateExtrasQuestion(drink: Drink) {
  const correctExtras = drink.ingredients.extras.length > 0
    ? drink.ingredients.extras
    : ["None"];

  return {
    id: 7,
    questionText: "Which extras are included?",
    options: ingredients.Extras,
    correctAnswers: correctExtras,
    field: "extras",
    display: 'image' as const,
  };
}

export function generateQuestions(drink: Drink): Question[] {
  return [
    generateCupQuestion(drink.getCupType()),
    generateBaseQuestion(drink),
    generateTopOffQuestion(drink),
    generatePureeQuestions(drink),
    generateFruitsQuestion(drink),
    generateSyrupQuestion(drink),
    generateCreamQuestion(drink),
    generateExtrasQuestion(drink)
  ];
}
