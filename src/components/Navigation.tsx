import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/pegasus_logo_transparent.png";
import { LanguageToggle } from "./LanguageToggle";

export function Navigation() {
  const { t } = useTranslation();

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
              {t("nav.home")}
            </a>
            <a
              href="#products"
              className="text-white hover:text-purple-400 transition-colors"
            >
              {t("nav.products")}
            </a>
            <a
              href="#about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#contact"
              className="text-white hover:text-purple-400 transition-colors"
            >
              {t("nav.contact")}
            </a>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
