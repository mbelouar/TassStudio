"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades + lifts its children into view once, when scrolled into the viewport.
 * Respects the user's reduced-motion setting.
 */
export default function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
