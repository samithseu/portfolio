"use client";

import { Canvas } from "@react-three/fiber";
import {
  Preload,
  PerspectiveCamera,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import TuxModel from "./TuxModel";
import useResponsivePos from "@/utils/useResponsivePos";

export default function AboutScene() {
  const modelRef = useRef(null);
  const position = useResponsivePos();

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 6, 12], fov: 30 }}
        style={{ touchAction: "pan-y" }}
      >
        <Preload all />

        <ambientLight intensity={0.3} />

        <group ref={modelRef} position={position}>
          <TuxModel />
          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.8}
            blur={2.5}
            resolution={128}
            color="#000000"
            frames={5}
          />
        </group>

        <Environment preset="city" />
        <PerspectiveCamera />
        <OrbitControls
          target={[0, 0, 0]}
          // minPolarAngle={Math.PI / 2}
          // maxPolarAngle={Math.PI / 2}
          minPolarAngle={1.1}
          maxPolarAngle={1.1}
          enableZoom={false}
          enablePan={false}
        />

        {/* <gridHelper args={[30, 30, 30]} position-y=".01" />
            <axesHelper args={[5]} /> */}
      </Canvas>
    </>
  );
}
