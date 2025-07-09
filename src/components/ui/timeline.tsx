"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  contents: string[];
  date: string;
  job: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 50%"],
  });

  const heightTransform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height + 30]
  );
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading text-center">Experiences</h2>

      <div ref={ref} className="relative pb-20">
        {/* Vertical Timeline Line */}
        <div
          style={{
            height: height + 30 + "px",
          }}
          className="absolute left-6 top-10 md:top-40 w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* Circle Dot */}
            <div className="absolute left-2 md:left-1.5 top-10 md:top-40 z-5">
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary flex items-center justify-center border-2 border-neutral-200 dark:border-neutral-700">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-neutral-200 dark:bg-neutral-300" />
              </div>
            </div>

            {/* Desktop: Sticky left content */}
            <div className="hidden md:flex top-40 self-start max-w-xs lg:max-w-sm w-full pl-16">
              <div className="flex flex-col gap-2 text-xl font-bold md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
              </div>
            </div>

            {/* Content area */}
            <div className="relative pl-16 md:pl-4 pr-4 w-full">
              {/* Mobile: Header content */}
              <div className="block mb-4 text-2xl font-bold text-neutral-300 md:hidden">
                <h3>{item.job}</h3>
                <h3>{item.date}</h3>
              </div>
              {item.contents.map((content, contentIndex) => (
                <p
                  key={contentIndex}
                  className="mb-3 font-normal text-neutral-400"
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
