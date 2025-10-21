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
  size?: number;
  ratios?: {
    syrupRatio: number;
    creamRatio: number;
    pureeRatio: number;
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

  private getSyrupRatio(size: number): number {
    const ratios = sizeRatios[size];

    if (this.ingredients.syrups.length === 0) {
      return 0;
    }
    else if (this.type === "Blended Reviver") {
      const blendedReviverRatios: Record<number, number> = {
        16: 5,
        24: 7.5,
        32: 10,
      };
      return blendedReviverRatios[size];
    }
    else if (this.type === "Soda") {
      return ratios.syrup;
    }
    else if (this.type === "Reviver" || this.type === "Refresher") {
      return (ratios.syrup * 2);
    }
    else if (this.type === "Hot Cocoa") {
      return 1.5;
    }
    else if (this.type === "Frozen Cocoa") {
      return 3;
    }
    else {
      return 0;
    }
  }

  getCreamRatio(size: number): number {
    const firstDigit = Number(size.toString()[0]); // get first digit of size
    if (this.ingredients.cream.length === 0) {
      return 0;
    }
    else if (this.type === "Hot Cocoa") {
      return 2;
    } 
    else if (this.type === "Frozen Cocoa") {
      return 5;
    } 
    else if (this.type === "Reviver" || this.type === "Blended Reviver") {
      return firstDigit + 1;
    } 
    else {
      return firstDigit;
    }
  }

  private getPureeRatio(size: number): number {
    if (this.ingredients.purees.length == 0) {
      return 0;
    }
  
    const firstDigit = Number(size.toString()[0]);
  
    if (this.type === "Reviver") {
      const reviverPureeRatios: Record<number, number> = {
        16: 0.5,
        24: 0.75,
        32: 1,
      };
      return reviverPureeRatios[size];
    } 
    else if (this.type === "Blended Reviver") {
      const blendedReviverPureeRatios: Record<number, number> = {
        16: 1,
        24: 1.5,
        32: 2,
      };
      return blendedReviverPureeRatios[size];
    } 
    else if (this.type === "Refresher") {
      return (firstDigit / 4) * 2;
    } 
    else {
      return firstDigit / 4;
    }
  }

  getCupType(): string {
    if (this.type === "Hot Cocoa") {
      return "Paper";
    } 
    else if (this.size === 44) {
      return "Foam";
    } 
    else if (this.size === 12 || this.size === 16) {
      return "Plastic";
    } 
    else if (this.type === "Soda") {
      return "Foam";
    } 
    else {
      return "Plastic";
    }
  }
  

  getRatios(size: number) {
    this.size = size;
    const syrupRatio = this.getSyrupRatio(size);
    const creamRatio = this.getCreamRatio(size);
    const pureeRatio = this.getPureeRatio(size);
    return {syrupRatio, creamRatio, pureeRatio};
  }
}
