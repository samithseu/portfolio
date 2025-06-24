"use client";

import { TypeAnimation } from "react-type-animation";

interface TypewriterProps {
  words: string[];
  speed?: any;
  wait?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 20,
  wait = 1000,
}) => {
  const sequence = words.flatMap((word) => [word, wait]);

  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={sequence}
      speed={speed}
      repeat={Infinity}
      cursor={false}
    />
  );
};

export default Typewriter;
