const sizeRatios: Record<number, { syrup: number; cream: number; puree: number }> = {
  12: { syrup: 1, cream: 1, puree: .25},
  16: { syrup: 1, cream: 1, puree: .25},
  24: { syrup: 1.5, cream: 2, puree: .5 },
  32: { syrup: 2, cream: 3, puree: .75 },
  44: { syrup: 3, cream: 4, puree: 1 }
};

export class Drink {
  name: string;
  type: string;
  ingredients: {
    base: string;
    topOff: string;
    syrups: string[];
    cream: string;
    fruits: string[];
    purees: string[];
    extras: string[];
  };

  constructor(
    name: string,
    type: string,
    ingredients: {
      base: string;
      topOff: string;
      syrups: string[];
      cream: string;
      fruits: string[];
      purees: string[];
      extras: string[];
    }
  ) {
    this.name = name;
    this.type = type;
    this.ingredients = ingredients;
  }

  generateRecipe(size: number) {
    const ratios = sizeRatios[size];
    if (!ratios) throw new Error("Invalid size");

    return {
      name: this.name,
      type: this.type,
      size
    }
  }
}
