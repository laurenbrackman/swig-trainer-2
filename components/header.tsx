"use client"; // Header needs to be a client component for button interactions

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white dark:bg-black shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dirty Soda Trainer</h1>
    </header>
  );
}
