"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative h-[100vh] justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              // Gruvbox Theme
              "--aurora":
                "repeating-linear-gradient(100deg,#b8bb26_10%,#fabd2f_15%,#83a598_20%,#d3869b_25%,#8ec07c_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#282828_0%,#282828_7%,transparent_10%,transparent_12%,#282828_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#ebdbb2_0%,#ebdbb2_7%,transparent_10%,transparent_12%,#ebdbb2_16%)",

              // Gruvbox variables
              "--green": "#b8bb26",
              "--yellow": "#fabd2f",
              "--blue": "#83a598",
              "--purple": "#d3869b",
              "--aqua": "#8ec07c",
              "--dark0": "#282828",
              "--light0": "#ebdbb2",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--green)_10%,var(--yellow)_15%,var(--blue)_20%,var(--purple)_25%,var(--aqua)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--dark0)_0%,var(--dark0)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--dark0)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--light0)_0%,var(--light0)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--light0)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
