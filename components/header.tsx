"use client";

type HeaderProps = {
  handleGenerateDrink: () => void;
};

export default function Header({ handleGenerateDrink }: HeaderProps) {
  return (
    <header className="sticky top-0 w-full dark:bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dirty Soda Trainer</h1>
      <button
        onClick={handleGenerateDrink}
        className="w-50 px-4 py-2 bg-primaryRed text-white rounded-lg hover:bg-blue-600 transition">
        Generate Drink
      </button>
    </header>
  );
}
