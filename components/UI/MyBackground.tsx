"use client";

import { motion } from "motion/react";
import React from "react";
import { ReactNode } from "react";
import { AuroraBackground } from "./AuroraBackground";
import { cn } from "@/lib/utils";

interface MyBackgroundProps {
  children: ReactNode;
  className?: string;
}

export function MyBackground({ children, className }: MyBackgroundProps) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "relative justify-center px-4 md:px-0 w-full h-full",
          className,
        )}
      >
        {children}
      </motion.div>
    </AuroraBackground>
  );
}
