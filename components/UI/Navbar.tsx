"use client";

import { useState } from "react";
import Link from "next/link";
import Typewriter from "./TypeWriter";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };
  return (
    <header className="sticky top-4 left-0 z-[1000]">
      <nav className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-6 rounded-2xl border border-[#d79921] bg-[#3c3836] p-4 backdrop-blur-lg md:flex-row">
        <div className="flex w-full items-center justify-between md:w-auto">
          <Link href="/" className="z-20 text-2xl font-bold text-[#fbf1c7]">
            <Typewriter words={["LILAY", "LINUX"]} speed={0.1} wait={6000} />
          </Link>
          <button
            className="rounded p-2 text-[#fbf1c7] md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <ul
          className={`z-20 ${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center gap-4 py-4 text-[#fbf1c7] md:py-0 md:flex md:flex-row`}
        >
          <li>
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="relative text-[#fbf1c7] hover:text-[#d79921] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#d79921] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-offset-2 focus:ring-offset-[#3c3836]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="relative text-[#fbf1c7] hover:text-[#d79921] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#d79921] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-offset-2 focus:ring-offset-[#3c3836]"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="relative text-[#fbf1c7] hover:text-[#d79921] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#d79921] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-offset-2 focus:ring-offset-[#3c3836]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="relative text-[#fbf1c7] hover:text-[#d79921] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#d79921] hover:after:w-full after:transition-all after:duration-300 focus:outline-none focus:ring-2 focus:ring-[#d79921] focus:ring-offset-2 focus:ring-offset-[#3c3836]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
