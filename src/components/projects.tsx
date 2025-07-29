"use client";

import { projects } from "@/lib/project";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0.2, duration: 0.8 },
  },
};

const tagIconMap: Record<string, string> = {
  "Next.js": "/assets/logos/Next.js.svg",
  TailwindCSS: "/assets/logos/tailwindcss.svg",
  TypeScript: "/assets/logos/TypeScript.svg",
  React: "/assets/logos/react.svg",
  Vite: "/assets/logos/vitejs.svg",
  "Astro.js": "/assets/logos/Astro.svg",
  PostgreSQL: "/assets/logos/PostgresSQL.svg",
  Redis: "/assets/logos/Redis.svg",
  ".NET": "/assets/logos/dotnet.svg",
  Golang: "/assets/logos/Go.svg",
  GitHub: "/assets/logos/git.svg",
};
const fallbackIcon = "/assets/logos/react.svg";

function Projects() {
  return (
    <section id="projects" className="relative c-space section-spacing">
      <h2 className="text-heading text-center">Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"></div>
      <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.03] transition-transform border border-neutral-800"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={340}
                className="w-full h-56 object-cover"
              />
            </a>
            <div className="flex-1 flex flex-col p-6 gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-bold text-white transition-colors hover:text-neutral-300">
                  {project.title}
                </h3>
              </a>
              <p className="text-neutral-300 text-sm leading-relaxed mb-2">
                {project.description}
              </p>
              <div className="flex justify-between">
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-neutral-800 p-1 rounded-full border border-neutral-700 flex items-center justify-center"
                    >
                      <Image
                        src={tagIconMap[tag] || fallbackIcon}
                        alt={tag + " icon"}
                        width={20}
                        height={20}
                        className="inline-block"
                      />
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white px-4 py-2 rounded-lg border border-neutral-700 transition-colors mt-4 w-fit"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
