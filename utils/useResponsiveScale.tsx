import { useEffect, useState } from "react";

export default function useResponsiveScale() {
  const [scale, setScale] = useState(0.05);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScale(0.04);
      } else if (width < 780) {
        setScale(0.05);
      } else if (width < 900) {
        setScale(0.04);
      } else {
        setScale(0.05);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}
