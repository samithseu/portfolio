"use client";

import { useState, useEffect } from "react";
import Typewriter from "@/components/UI/TypeWriter";

export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/li-lay",
      color: "#98971a",
      emoji: "🐙",
    },
    {
      name: "Telegram",
      url: "https://t.me/ImLiLay",
      color: "#83a598",
      emoji: "💬",
    },
    {
      name: "Email",
      url: "mailto:contact@lilay.dev",
      color: "#d79921",
      emoji: "✉️",
    },
    // {
    //   name: "Source Code",
    //   url: "https://github.com/li-lay/portfolio",
    //   color: "#d79921",
    //   emoji: "💿",
    // },
  ];

  const quotes = [
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Code is poetry." - Unknown',
    '"Knowledge cut efforts." - Lilay',
    '"Innovation distinguishes between a leader and a follower." - Steve Jobs',
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler',
    "\"Programming isn't about what you know; it's about what you can figure out.\" - Chris Pine",
    '"First, solve the problem. Then, write the code." - John Johnson',
    '"The most disastrous thing that you can ever learn is your first programming language." - Alan Kay',
    '"Simplicity is the ultimate sophistication." - Leonardo da Vinci',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"Creativity is intelligence having fun." - Albert Einstein',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      <div className="relative z-10 max-w-2xl w-full">
        <h1 className="text-[#fabd2f] text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10 md:mb-12 font-patua_one text-center">
          Get In Touch
        </h1>
        <p className="text-[#ebdbb2] text-base sm:text-lg md:text-xl text-center mb-6 sm:mb-8 font-patua_one">
          Let's connect! Reach out through{" "}
          <span className="text-[#8ec87e]">
            <Typewriter
              words={["GitHub", "Telegram", "Email"]}
              speed={0.1}
              wait={2000}
            />
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#3c3836] border border-[#504945] rounded-lg p-4 sm:p-6 text-center hover:bg-[#504945] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#fabd2f]/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="text-3xl sm:text-4xl mb-3 sm:mb-4 animate-pulse"
                style={{ color: social.color }}
              >
                {social.emoji}
              </div>
              <h3 className="text-[#ebdbb2] text-lg sm:text-xl font-semibold mb-2 group-hover:text-[#fabd2f] transition-colors">
                {social.name}
              </h3>
              <p className="text-[#a89984] text-xs sm:text-sm">
                Click to connect
              </p>
            </a>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="text-[#a89984] italic text-sm sm:text-base md:text-lg font-patua_one">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}
