import { motion } from "framer-motion";
import React, { FC } from "react";

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
}

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink: FC<FlipLinkProps> = ({
  children,
  href,
  className = "",
}) => {
  return (
    <motion.a
      initial="initial"
      variants={{
        initial: {
          opacity: 0.45, // Ensuring all content starts with this opacity
        },
        hovered: {
          opacity: 1, // Full opacity on hover
        },
      }}
      whileHover="hovered"
      href={href}
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i * 1.4,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
