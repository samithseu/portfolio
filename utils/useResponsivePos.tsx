import { useEffect, useState } from "react";
import { Vector3 } from "three";

export default function useResponsivePos() {
  const [position, setPosition] = useState([0, -2.5, 0]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setPosition([0, -0.5, 0]);
      } else if (width < 900) {
        setPosition([0, -2.0, 0]);
      } else {
        setPosition([0, -2.5, 0]);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let myVector3 = new Vector3(position[0], position[1], position[2]);

  return myVector3;
}
