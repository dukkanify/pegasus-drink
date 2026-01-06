import React from "react";
import { motion } from "motion/react";

interface WavyLinesProps {
  className?: string;
  variant?: "red" | "purple" | "mixed";
}

export function WavyLines({
  className = "",
  variant = "mixed",
}: WavyLinesProps) {
  const getColor = (index: number) => {
    if (variant === "red") return "#ef4444";
    if (variant === "purple") return "#a855f7";
    return index % 2 === 0 ? "#ef4444" : "#a855f7";
  };

  return (
    <svg
      className={className}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {[...Array(12)].map((_, i) => (
        <motion.path
          key={i}
          d={`M ${-100 + i * 30} 0 Q ${200 + i * 50} ${200 + i * 20}, ${
            400 + i * 30
          } ${400 + i * 15} T ${800 + i * 40} ${600 + i * 25} T ${
            1200 + i * 30
          } 800`}
          stroke={getColor(i)}
          strokeWidth="2"
          opacity={0.6 - i * 0.04}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 0.6 - i * 0.04,
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

export function CircularWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(20)].map((_, i) => {
        const radius = 50 + i * 35;
        const circumference = 2 * Math.PI * radius;
        const offset = i % 2 === 0 ? 0 : circumference / 2;

        return (
          <motion.circle
            key={i}
            cx="400"
            cy="400"
            r={radius}
            stroke={i % 2 === 0 ? "#ef4444" : "#a855f7"}
            strokeWidth="1.5"
            opacity={0.4 - i * 0.015}
            fill="none"
            strokeDasharray={`${circumference * 0.7} ${circumference * 0.3}`}
            strokeDashoffset={offset}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 0.4 - i * 0.015,
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 20 + i,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </svg>
  );
}

export function FlowingWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {[...Array(8)].map((_, i) => (
        <motion.path
          key={`red-${i}`}
          d={`M 0 ${100 + i * 30} Q 300 ${50 + i * 25}, 600 ${
            100 + i * 30
          } T 1200 ${100 + i * 30}`}
          stroke="url(#redGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            x: [0, 50, 0],
          }}
          transition={{
            pathLength: { duration: 2, delay: i * 0.1 },
            x: { duration: 5 + i, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.path
          key={`purple-${i}`}
          d={`M 0 ${150 + i * 30} Q 300 ${200 + i * 25}, 600 ${
            150 + i * 30
          } T 1200 ${150 + i * 30}`}
          stroke="url(#purpleGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            x: [0, -50, 0],
          }}
          transition={{
            pathLength: { duration: 2, delay: i * 0.1 },
            x: { duration: 6 + i, repeat: Infinity, ease: "linear" },
          }}
        />
      ))}
    </svg>
  );
}
