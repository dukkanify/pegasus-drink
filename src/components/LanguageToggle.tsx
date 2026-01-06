import React from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);

    // Update document direction and language for RTL support
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/50 transition-colors text-sm font-medium"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span>
        {i18n.language === "en" ? t("language.arabic") : t("language.english")}
      </span>
    </button>
  );
}
