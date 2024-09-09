"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState({
    name: "Glace vanille",
    image: "vanilla-scoops.png",
    url: "https://holiscoops.com/",
    pronoun: "de la"
  });

  return (
    <div className="min-h-screen bg-brown text-white overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero selectedFlavor={selectedFlavor} />
        <ProductShowcase setSelectedFlavor={setSelectedFlavor} />
      </main>
      <Footer />
    </div>
  );
}