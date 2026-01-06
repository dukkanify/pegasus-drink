import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Performance() {
  const { t } = useTranslation();

  const stats = [
    { number: "320mg", label: "Premium Caffeine" },
    { number: "500ml", label: "Optimal Volume" },
    { number: "0g", label: "0 Fat" },
    { number: "100%", label: "Maximum Power" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent mb-2 italic">
                {stat.number}
              </div>
              <div className="text-zinc-400 uppercase text-sm tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Images */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1695918425801-41dd27ed8277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwcnVubmluZyUyMG1vdGlvbnxlbnwxfHx8fDE3Njc1OTQyODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Athlete running"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black italic mb-2">
                  {t("performance.speed.title")}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t("performance.speed.description")}
                </p>
              </div>
              {/* Red accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-purple-500 to-red-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative group overflow-hidden"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1666979290238-2d862b573345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjB3b3Jrb3V0JTIwZW5lcmd5fGVufDF8fHx8MTc2NzY0MjIzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Gym workout"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black italic mb-2">
                  {t("performance.strength.title")}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t("performance.strength.description")}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 via-red-500 to-purple-500"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative group overflow-hidden"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690220071566-1f70e0578337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3Njc2NDIyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Sports performance"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black italic mb-2">
                  {t("performance.endurance.title")}
                </h3>
                <p className="text-sm text-zinc-400">
                  {t("performance.endurance.description")}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 via-purple-500 to-red-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-3xl mx-auto"
        >
          <div className="text-red-500 text-6xl mb-6">"</div>
          <blockquote className="text-3xl md:text-4xl font-black italic mb-8">
            {t("performance.quote.designedFor")}
            <br />
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
              {t("performance.quote.refuseToSettle")}
            </span>
          </blockquote>
          <p className="text-zinc-400 text-lg">
            {t("performance.quoteDescription")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
