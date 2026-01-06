import React from "react";
import logo from "../assets/pegasus_logo_transparent.png";
import { User } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              {/* subtle white glow behind the logo to ensure visibility on dark background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-28 h-9 bg-white/40 rounded-full blur-[12px]" />
              </div>

              <img
                src={logo}
                alt="Pegasus Energy Drink"
                className="relative z-10 h-12 w-auto"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors group">
            <User className="w-5 h-5 group-hover:text-purple-400 transition-colors" />
          </button>
        </div>
      </div>
    </nav>
  );
}
