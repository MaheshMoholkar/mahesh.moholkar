"use client";

import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  return (
    <>
      <header className="sticky top-0 bg-neutral-900/50 backdrop-blur-lg z-40">
        <div className="container px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-12 md:h-16">
            <Link
              href="/"
              className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            >
              Mahesh
            </Link>
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Hamburger for Mobile */}
            <button
              type="button"
              aria-label="Open menu"
              className="size-10 flex items-center justify-center relative md:hidden p-0 m-0"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div
                className={twMerge(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1.5 transition-all duration-300",
                  isOpen && "rotate-45 translate-y-0"
                )}
              >
                <div className="w-5 h-0.5 bg-zinc-300"></div>
              </div>
              <div
                className={twMerge(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-0 transition-all duration-1",
                  isOpen && "hidden"
                )}
              >
                <div className="w-5 h-0.5 bg-zinc-300"></div>
              </div>
              <div
                className={twMerge(
                  "absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1.5 transition-all duration-300",
                  isOpen && "translate-y-0 -rotate-45"
                )}
              >
                <div className="w-5 h-0.5 bg-zinc-300"></div>
              </div>
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 size-full z-10 bg-neutral-900"
          >
            <div className="h-full flex justify-center items-center">
              <nav className="flex flex-col items-center gap-12 md:gap-16">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.25 * index,
                      ease: "linear",
                    }}
                  >
                    <span className="text-4xl md:text-5xl font-bold text-neutral-500  hover:text-neutral-300 transition-colors">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
