"use client";
import { Drink } from "@/utils/drinks";
type DrinkCardProps = {
  drink: Drink;
};

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
  <div className="text-center mt-4 py-4">
    <h2 className="text-xl font-bold">{drink.name}</h2>
    <p>{drink.size}oz</p>
  </div>
  );
}
