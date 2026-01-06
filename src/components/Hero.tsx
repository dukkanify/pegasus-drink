import React from "react";
import { motion } from "motion/react";
import productLabel from "../assets/can.png";
import { ChevronDown } from "lucide-react";
import { WavyLines } from "./WavyLines";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[100px] animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDelay: "500ms" }}
        ></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      {/* Wavy lines background */}
      <div className="absolute inset-0 opacity-30">
        <WavyLines className="w-full h-full" variant="mixed" />
      </div>

      {/* Graffiti-style text background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-[20vw] font-black italic text-zinc-700"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.1)" }}
        >
          PEGASUS
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              ></motion.div>

              <h1 className="text-6xl md:text-8xl font-black italic">
                CAN'T
                <br />
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                  IGNORE
                </span>
                <br />
                IT
              </h1>
            </div>

            <p className="text-xl text-zinc-400 max-w-lg">
              Pegasus Energy bursts onto the scene with a street-inspired
              attitude and sleek design. Captures the essence of underground
              energy—minimal, powerful, and made to stand out.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 via-purple-600 to-red-600 hover:from-red-700 hover:via-purple-700 hover:to-red-700 text-white px-12 py-4 text-xl font-black italic relative overflow-hidden group"
            >
              <span className="relative z-10">FUEL UP</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </motion.button>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                  320mg
                </div>
                <div className="text-sm text-zinc-500 uppercase">Caffeine</div>
              </div>
              <div className="border-l border-zinc-700"></div>
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent">
                  500ml
                </div>
                <div className="text-sm text-zinc-500 uppercase">Volume</div>
              </div>
              <div className="border-l border-zinc-700"></div>
              <div>
                <div className="text-4xl font-black bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
                  0
                </div>
                <div className="text-sm text-zinc-500 uppercase">Fat</div>
              </div>
            </div>
          </motion.div>

          {/* Right content - Product */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: -10 }}
            animate={{ opacity: 1, x: 0, rotate: -15 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-purple-600/30 to-red-600/20 blur-[80px] animate-pulse"></div>

              {/* Product image */}
              <motion.img
                src={productLabel}
                alt="Pegasus Energy Drink"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-15, -12, -15],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span
            className="text-xs uppercase tracking-wider rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll Down
          </span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  );
}
