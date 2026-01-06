import React from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductShowcase } from "./components/ProductShowcase";
import { Performance } from "./components/Performance";
import { CTA } from "./components/CTA";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Features />
      <ProductShowcase />
      <Performance />
      <CTA />
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>&copy; 2026 Pegasus Energy Drink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
