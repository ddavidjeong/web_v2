import React, { useState, useEffect, FC } from "react";
import { motion } from "framer-motion";

interface FlipLinkProps {
  children: string;
  href: string;
}

export const Mask: FC = () => {
  const [theme, setTheme] = useState<string>("sunset"); // Default theme

  const toggleTheme = (): void => {
    const newTheme =
      theme === "sunset" ? "fantasy" : "sunset";
    setTheme(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    ); // Set the theme dynamically
  };

  useEffect(() => {
    // Apply the initial theme when the component mounts
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <motion.div
        className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Top-middle theme button */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.button
            onClick={toggleTheme}
            className="btn btn-secondary transition duration-500 ease-in-out transform hover:scale-105"
          >
            Switch Theme
          </motion.button>
        </motion.div>

        {/* Top-left name */}
        <div className="text-primary text-2xl font-bold dark:text-yellow-400">
          <FlipLink href="/">David Jeong</FlipLink>
        </div>

        {/* Top-right about link */}
        <FlipLink href="/about">About</FlipLink>
      </motion.div>

      {/* Bottom Section (Fixed to follow scroll) */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-6 z-10 container mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Navbar with Accent Color */}
        <motion.div
          className="text-accent text-lg space-y-2 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {["Projects", "Notes", "Resume", "Contact"].map(
            (item, index) => (
              <FlipLink
                key={index}
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </FlipLink>
            )
          )}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          className="text-right text-sm text-base-content dark:text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          Independent Developer <br />
          Cornell Graduate
        </motion.div>
      </motion.div>
    </div>
  );
};




const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink: FC<FlipLinkProps> = ({
  children,
  href,
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-lg font-bold uppercase sm:text-xl md:text-2xl lg:text-3xl"
      style={{
        lineHeight: 1,
      }}
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
                color: "#FFBF00",
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
