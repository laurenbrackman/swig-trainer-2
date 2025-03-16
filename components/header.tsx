"use client"; // Header needs to be a client component for button interactions

export default function Header({ onGenerate }: { onGenerate: () => void }) {
  return (
    <header className="sticky top-0 w-full bg-white dark:bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dirty Soda Trainer</h1>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={onGenerate} // Call the function from Home.tsx
      >
        Generate Drink
      </button>
    </header>
  );
}
