"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import DrinkGenerator from "@/components/drinkCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header />
      <main className="flex flex-col items-center justify-center p-8">
        <DrinkGenerator />
      </main>
      <Footer />
    </div>
  );
}
