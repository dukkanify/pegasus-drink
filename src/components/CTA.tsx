import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CircularWaves } from "./WavyLines";

export function CTA() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-purple-600/10 to-black"></div>
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent 0px, transparent 20px, #ef4444 20px, #ef4444 22px)`,
            backgroundSize: "200% 200%",
          }}
        ></motion.div>
      </div>

      {/* Circular waves background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <CircularWaves className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="inline-block mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center">
                <ArrowRight className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black italic mb-8">
            {t("cta.title.readyTo")}
            <br />
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
              {t("cta.title.unleash")}
            </span>{" "}
            {t("cta.title.yourPower")}
          </h2>

          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 via-purple-600 to-red-600 hover:from-red-700 hover:via-purple-700 hover:to-red-700 text-white px-12 py-5 text-xl font-black italic relative overflow-hidden group min-w-[250px]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {t("cta.orderNow")}
                <ArrowRight className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-12 py-5 text-xl font-black italic transition-colors min-w-[250px]"
            >
              {t("cta.findStores")}
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-purple-500"></div>
    </section>
  );
}
