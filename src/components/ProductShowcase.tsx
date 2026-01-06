import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import logo from "../assets/can.png";
import { FlowingWaves } from "./WavyLines";

export function ProductShowcase() {
  const { t } = useTranslation();

  const ingredients = [
    {
      name: t("product.ingredients.caffeine.name"),
      amount: "320mg",
      benefit: t("product.ingredients.caffeine.benefit"),
    },
    {
      name: t("product.ingredients.taurine.name"),
      amount: "1000mg",
      benefit: t("product.ingredients.taurine.benefit"),
    },
    {
      name: t("product.ingredients.bVitamins.name"),
      amount: t("product.ingredients.bVitamins.amount"),
      benefit: t("product.ingredients.bVitamins.benefit"),
    },
    {
      name: t("product.ingredients.lCarnitine.name"),
      amount: "500mg",
      benefit: t("product.ingredients.lCarnitine.benefit"),
    },
  ];

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #ef4444 0px, #ef4444 2px, transparent 2px, transparent 10px)`,
          }}
        ></div>
      </div>

      {/* Flowing waves decoration */}
      <div className="absolute top-0 left-0 right-0 h-64 opacity-20">
        <FlowingWaves className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Product Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-purple-400 uppercase tracking-wider text-sm">
                {t("product.premiumFormula")}
              </span>
              <h2 className="text-5xl md:text-6xl font-black italic mt-4 mb-6">
                {t("product.powerInEverySip.powerIn")}
                <br />
                {t("product.powerInEverySip.every")}{" "}
                <span className="bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                  {t("product.powerInEverySip.sip")}
                </span>
              </h2>
              <p className="text-xl text-zinc-400">
                {t("product.description")}
              </p>
            </div>

            <div className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 p-4 flex items-center justify-between hover:border-purple-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-purple-500 rounded-full group-hover:animate-pulse"></div>
                    <div>
                      <div className="font-black">{ingredient.name}</div>
                      <div className="text-sm text-zinc-500">
                        {ingredient.benefit}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-black bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                    {ingredient.amount}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm uppercase">
                  {t("product.labTested")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm uppercase">
                  {t("product.zeroFat")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right - Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-[400px] h-[400px] rounded-full border-2 border-red-500/20 border-dashed"></div>
              </motion.div>

              {/* Red glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-red-600/20 via-purple-600/20 to-red-600/20 rounded-full blur-[100px]"></div>
              </div>

              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center py-20">
                <motion.img
                  src={logo}
                  alt="Pegasus Logo"
                  className="w-full max-w-sm drop-shadow-2xl"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Decorative text around */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-[450px] h-[450px] relative">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-600">
                    {t("product.decorative.energy")}
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-600">
                    {t("product.decorative.performance")}
                  </span>
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-zinc-600">
                    {t("product.decorative.power")}
                  </span>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-zinc-600">
                    {t("product.decorative.focus")}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
