"use client";

import { motion } from "motion/react";

const DragIndicator = () => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-10 md:bottom-auto md:left-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:translate-x-0 pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2 text-[#fbf1c7]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="animate-drag"
        >
          <path
            d="M4 12H20M4 12L8 8M4 12L8 16M20 12L16 8M20 12L16 16"
            stroke="#b8bb26"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm font-medium font-patua_one">
          Drag to rotate
        </span>
      </motion.div>
    </div>
  );
};

export default DragIndicator;
