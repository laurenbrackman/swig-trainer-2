const CreamTypes = ["Coconut Cream", "Vanilla Cream", "Half and Half"];
const PureeTypes = ["Peach Puree", "Mango Puree", "Raspberry Puree","Strawberry Puree"];
const SyrupTypes = [
    "Grape",
    "Mango",
    "SF Mango",
    "Watermelon",
    "SF Watermelon",
    "English Toffee",
    "Passion Fruit",
    "Guava",
    "Strawberry",
    "SF Strawberry",
    "Cupcake",
    "Cherry",
    "Cranberry",
    "Raspberry",
    "SF Raspberry",
    "Toasted Marshmallow",
    "Blackberry",
    "Grapefruit",
    "Peach",
    "SF Peach",
    "Butterscotch",
    "SF Pineapple",
    "Pomegranate",
    "Vanilla",
    "SF Vanilla",
    "Mojito Mint",
    "Pineapple",
    "Blue Raspberry",
    "Coconut",
    "SF Coconut",
    "Hazelnut",
    "Peppermint",
  ];
  
const Bases = [
    "Dr. Pepper",
    "Diet Dr. Pepper",
    "Coke",
    "Diet Coke",
    "Coke Zero",
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
    "Reviver",
    "SF Reviver",
    "Cocoa",
    "Ice"
  ];

const TopOffs = Bases.slice(0, -1);
const Extras = [
    "Passion Fruit Pearls",
    "Strawberry Pearls",
    "Gummy Shark",
    "Frozen Mangos",
    "Frozen Strawberries",
    "Reviver Concentrate",
    "SF Reviver Concentrate"
  ];

const Fruits = [
    "Fresh Lime",
    "Fresh Lemon",
    "Fresh Orange",
];

const CupTypes = ["Foam", "Plastic","Kids", "Paper"]

export const ingredients = {CupTypes,Fruits,Extras,Bases,CreamTypes,PureeTypes,SyrupTypes,TopOffs};