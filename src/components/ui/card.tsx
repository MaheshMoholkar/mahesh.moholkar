"use client";

import { motion } from "framer-motion";
import React from "react";

function Card({
  style,
  text,
  image,
  ref,
}: {
  style: React.CSSProperties;
  text: string;
  image?: string;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <motion.img
        src={image}
        alt={text}
        className="absolute w-15 h-15"
        style={style}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={ref}
        dragElastic={1}
      />
    </>
  );
}

export default Card;
