import React from "react";
import { FlipWords } from "./flip-words";

function Hero() {
  return (
    <section className="flex items-start justify-center md:justify-start min-h-screen overflow-hidden c-space">
      <div className="mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
          <h1 className="text-4xl font-medium">Hi I&apos;m Mahesh</h1>
          <div className="flex flex-col items-start">
            <p className="text-5xl font-medium text-neutral-300">
              A Developer Dedicated to Crafting
            </p>
          </div>
          <div>
            <div className="relative flex w-full overflow-hidden">
              <FlipWords
                words={["Secure", "Modern", "Scalable"]}
                className="font-black text-white text-8xl z-0"
              />
            </div>
          </div>
          <p className="text-4xl font-medium text-neutral-400">Web Solutions</p>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col space-y-6 md:hidden">
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
              Web Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
