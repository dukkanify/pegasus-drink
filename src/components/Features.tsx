import React from "react";
import { motion } from "motion/react";
import { Zap, Target, Trophy, Flame } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "INSTANT ENERGY",
    description: "Rapid caffeine absorption for immediate performance boost",
  },
  {
    icon: Target,
    title: "LASER FOCUS",
    description:
      "Enhanced mental clarity and concentration for peak performance",
  },
  {
    icon: Trophy,
    title: "ENDURANCE",
    description: "Extended energy release for sustained athletic output",
  },
  {
    icon: Flame,
    title: "ZERO CRASH",
    description: "Smooth energy curve without the typical energy drink crash",
  },
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black italic mb-4">
            BUILT FOR{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
              ATHLETES
            </span>
          </h2>
          <p className="text-xl text-zinc-400">
            Engineered for maximum performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="bg-zinc-900 border border-zinc-800 p-8 h-full relative overflow-hidden hover:border-purple-500/50 transition-colors">
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-purple-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:via-purple-500/5 group-hover:to-red-500/5 transition-colors"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-block">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-full flex items-center justify-center group-hover:from-red-600/30 group-hover:to-purple-600/30 transition-colors">
                      <feature.icon className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black mb-3 italic">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
