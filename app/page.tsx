"use client"; // Now Home.tsx is interactive

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";

export default function Home() {
  const handleGenerateDrink = () => {
    console.log("Generating drink...");
    // Add logic to generate a drink
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Header onGenerate={handleGenerateDrink} />
      <main className="flex flex-col items-center justify-center p-8">
        Swig Ratio Trainer
      </main>
      <Footer />
    </div>
  );
}
