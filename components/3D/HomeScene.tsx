"use client";

import { Canvas } from "@react-three/fiber";
import {
  Preload,
  Loader,
  PerspectiveCamera,
  OrbitControls,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Suspense } from "react";
import { useRef } from "react";
import TuxModel from "./TuxModel";
import useResponsivePos from "@/utils/useResponsivePos";

export default function HomeScene() {
  const modelRef = useRef(null);
  const position = useResponsivePos();

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 6, 12], fov: 30 }}
        style={{ touchAction: "pan-y" }}
      >
        <Suspense fallback={null}>
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
        </Suspense>
      </Canvas>

      <Loader
        containerStyles={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#282828",
          color: "white",
          zIndex: 9999,
        }}
        barStyles={{
          width: "100%",
          height: "15px",
          backgroundColor: "#b8bb26",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      />
    </>
  );
}
