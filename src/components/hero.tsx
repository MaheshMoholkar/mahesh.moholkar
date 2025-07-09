"use client";

import React, { Suspense, useRef } from "react";
import { FlipWords } from "./ui/flip-words";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "./ui/astronaut";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Float } from "@react-three/drei";

// Three.js fallback component
const LoadingFallback = () => {
  return (
    <mesh>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="white" transparent opacity={0.5} />
    </mesh>
  );
};

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Use window scroll for better parallax effect
  const { scrollY } = useScroll();

  const y = useSpring(scrollY, { damping: 50 });

  // Parallax transforms using window scroll
  const skyY = useTransform(y, [0, 1000], ["0%", "10%"]);
  const mountain3Y = useTransform(y, [0, 1000], ["0%", "20%"]);
  const planetsY = useTransform(y, [0, 1000], ["0%", "-10%"]);
  const mountain2Y = useTransform(y, [0, 1000], ["0%", "10%"]);
  const mountain1Y = useTransform(y, [0, 1000], ["0%", "5%"]);

  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section
      ref={ref}
      className="flex items-start md:items-center justify-center md:justify-start h-screen overflow-hidden c-space relative -mt-12 md:-mt-16"
    >
      {/* Hero Text */}
      <div className="text-center md:text-left rounded-3xl bg-clip-text z-10 relative">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
          <motion.h1
            variants={variants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="text-4xl font-medium"
          >
            Hi, I&apos;m Mahesh
          </motion.h1>
          <div className="flex flex-col items-start">
            <motion.p
              variants={variants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="text-5xl font-medium text-neutral-300"
            >
              A Developer <br /> Dedicated to Crafting
            </motion.p>
          </div>
          <div>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="relative flex w-full"
            >
              <FlipWords
                words={["Secure", "Modern", "Scalable"]}
                className="font-black text-white text-8xl z-0"
              />
            </motion.div>
          </div>
          <motion.p
            variants={variants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            transition={{ delay: 1.8 }}
            className="text-4xl font-medium text-neutral-400"
          >
            Web Application
          </motion.p>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col space-y-6 md:hidden mt-14">
          <p className="text-4xl font-medium">Hi, I&apos;m Mahesh</p>
          <div>
            <p className="text-5xl font-black text-neutral-300">Building</p>
            <div>
              <div className="relative flex items-center justify-center w-full overflow-hidden">
                <FlipWords
                  words={["Secure", "Modern", "Scalable"]}
                  className="font-black text-white text-8xl z-0"
                />
              </div>
            </div>
            <p className="text-4xl font-black text-neutral-300">
              Web Applications
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Background */}
      <div className="absolute inset-0 bg-black/40">
        <div className="relative h-screen overflow-hidden">
          {/* Background Sky - slowest movement */}
          <motion.div
            className="absolute inset-0 w-full h-screen -z-50"
            style={{
              backgroundImage: "url(/assets/sky.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              y: skyY,
            }}
          ></motion.div>

          {/* Planets - moves opposite direction for depth */}
          <motion.div
            className="absolute inset-0 -z-45"
            style={{
              backgroundImage: "url(/assets/planets.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              y: planetsY,
            }}
          ></motion.div>

          {/* Mountain Layer 3 - furthest back, moves fastest */}
          <motion.div
            className="absolute inset-0 -z-40"
            style={{
              backgroundImage: "url(/assets/mountain-3.png)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              y: mountain3Y,
            }}
          ></motion.div>

          {/* Mountain Layer 2 - middle layer */}
          <motion.div
            className="absolute inset-0 -z-35"
            style={{
              backgroundImage: "url(/assets/mountain-2.png)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              y: mountain2Y,
            }}
          ></motion.div>

          {/* Mountain Layer 1 - closest, moves slowest */}
          <motion.div
            className="absolute inset-0 -z-30"
            style={{
              backgroundImage: "url(/assets/mountain-1.png)",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              y: mountain1Y,
            }}
          ></motion.div>
        </div>
      </div>

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<LoadingFallback />}>
            <Float>
              <Astronaut
                scale={isMobile ? 0.2 : 0.25}
                position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
              />
            </Float>
          </Suspense>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
}

const Rig = () => {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 10, 1 + state.pointer.y / 10, 3],
      0.5,
      delta
    );
  });
};

export default Hero;
