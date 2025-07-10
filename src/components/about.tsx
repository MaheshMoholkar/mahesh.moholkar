"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Globe } from "./ui/globe";
import { skills } from "@/lib/logo";
import { certificates, getCertificateTheme } from "@/lib/cert";

function About() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="about" className="c-space section">
      <h2 className="text-heading mt-12 text-center">About Me</h2>
      <div className="grid grid-cols-1 gap-3 md:gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <Image
            src={"/assets/profile.svg"}
            className="absolute inset-0 scale-[5]"
            width={400}
            height={400}
            priority
            alt="Coding POV"
          />
          <div className="z-5">
            <p className="text-3xl md:text-4xl lg:text-5xl text-neutral-300">
              Hi, I&apos;m Mahesh Moholkar
            </p>
            <p className="text-lg md:text-xl lg:text-2 xl text-neutral-300">
              Over the last {new Date().getFullYear() - 2023} years, I have
              developed my development skills to deliver dynamic and scalable
              web applications.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="text-center mb-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl text-neutral-300 mb-3">
                Tech Stack
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed">
                I specialize in full-stack development with expertise in modern
                web technologies.
              </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3 w-full max-w-2xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group"
                  title={skill.text}
                >
                  <Image
                    src={skill.image}
                    alt={skill.text}
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-neutral-400 text-xs text-center leading-tight group-hover:text-white transition-colors">
                    {skill.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-5 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I&apos;m based in Pune (India) and open to remote work.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-default-color grid-4">
          <div className="flex flex-col items-center justify-center gap-1 size-full">
            <div className="text-center">
              <h3 className="text-md md:text-xl lg:text-2xl xl:text-3xl flex justify-center items-center">
                Connect
              </h3>
              <p className="hidden lg:block subtext md:headtext text-white">
                Let&apos;s build something great together
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3 w-full max-w-xs">
              <div className="flex items-center gap-2 md:gap-3 w-full p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group">
                <a
                  href="mailto:mahesh.moholkar.dev@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 flex-1"
                >
                  <Image
                    src="/assets/socials/email.svg"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-neutral-300 group-hover:text-white transition-colors text-sm flex-1">
                    Gmail
                  </span>
                </a>
                <button
                  onClick={() =>
                    copyToClipboard("mahesh.moholkar.dev@gmail.com", "email")
                  }
                  className="hover:text-white transition-colors"
                >
                  <Image
                    src={
                      copied === "email"
                        ? "/assets/copy-done.svg"
                        : "/assets/copy.svg"
                    }
                    alt="Copy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 md:gap-3 w-full p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group">
                <a
                  href="https://github.com/maheshmoholkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 flex-1"
                >
                  <Image
                    src="/assets/socials/github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-neutral-300 group-hover:text-white transition-colors text-sm">
                    GitHub
                  </span>
                </a>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "https://github.com/maheshmoholkar",
                      "github"
                    )
                  }
                  className="hover:text-white transition-colors"
                >
                  <Image
                    src={
                      copied === "github"
                        ? "/assets/copy-done.svg"
                        : "/assets/copy.svg"
                    }
                    alt="Copy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 md:gap-3 w-full p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group">
                <a
                  href="https://x.com/MaheshMoholkar_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 flex-1"
                >
                  <Image
                    src="/assets/socials/x.svg"
                    alt="X"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-neutral-300 group-hover:text-white transition-colors text-sm">
                    X
                  </span>
                </a>
                <button
                  onClick={() =>
                    copyToClipboard("https://x.com/MaheshMoholkar_", "twitter")
                  }
                  className="hover:text-white transition-colors"
                >
                  <Image
                    src={
                      copied === "twitter"
                        ? "/assets/copy-done.svg"
                        : "/assets/copy.svg"
                    }
                    alt="Copy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </div>

              <div className="flex items-center gap-2 md:gap-3 w-full p-2 md:p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 group">
                <a
                  href="https://linkedin.com/in/mahesh1822"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 md:gap-3 flex-1"
                >
                  <Image
                    src="/assets/socials/linkedIn.svg"
                    alt="LinkedIn"
                    width={20}
                    height={20}
                    className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-neutral-300 group-hover:text-white transition-colors text-sm">
                    LinkedIn
                  </span>
                </a>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "https://linkedin.com/in/mahesh1822",
                      "linkedin"
                    )
                  }
                  className="hover:text-white transition-colors"
                >
                  <Image
                    src={
                      copied === "linkedin"
                        ? "/assets/copy-done.svg"
                        : "/assets/copy.svg"
                    }
                    alt="Copy"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-6 size-full p-2 md:p-4">
            <div className="text-center">
              <h3 className="text-md md:text-xl lg:text-2xl xl:text-3xl text-neutral-300 mb-1 md:mb-2">
                Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  justify-center gap-2 w-full max-w-4xl">
              {certificates.slice(0, 4).map((cert, index) => {
                const theme = getCertificateTheme(cert.from);
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 md:py-2 rounded-lg bg-white/5 border ${theme.borderColor} hover:bg-white/10 ${theme.hoverBorderColor} transition-all duration-200 group cursor-pointer`}
                    onClick={() => window.open(cert.link, "_blank")}
                    title={`View ${cert.title} certificate`}
                  >
                    <div
                      className={`w-4 h-4 md:w-5 md:h-5 ${theme.bgColor} ${theme.hoverBgColor} rounded flex items-center justify-center transition-colors flex-shrink-0`}
                    >
                      <svg
                        className="w-2 h-2 md:w-3 md:h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-neutral-300 font-medium text-sm leading-tight truncate">
                        {cert.title}
                      </span>
                      <span className="text-neutral-400 text-xs leading-tight">
                        {cert.from}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
