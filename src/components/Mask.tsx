import React, { useContext, FC } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import Switch from "./switch";
import FlipLink from "./animations/FlipLink";

interface FlipLinkProps {
  children: string;
  href: string;
  className?: string;
}

export const Mask: FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  // Function to handle theme toggle
  const handleThemeToggle = (checked: boolean) => {
    const newTheme = checked ? "nord" : "fantasy";
    toggleTheme();
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <motion.div
        className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 z-10 bg-base-100 dark:bg-gray-900"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Top-middle theme toggle */}
        <motion.div
          className="absolute top-4 left-1/2 transform -translate-x-1/2"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Switch
            checked={theme === "fantasy"}
            onCheckedChange={handleThemeToggle}
          />
        </motion.div>

        {/* Top-left name */}
        <div className="text-primary text-2xl font-bold dark:text-yellow-300">
          <FlipLink href="/">David Jeong</FlipLink>
        </div>

        {/* Top-right about link */}
        <FlipLink href="/about" className="text-secondary dark:text-yellow-300">About</FlipLink>
      </motion.div>

      {/* Bottom Section (Fixed to follow scroll) */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-6 z-10 w-full bg-base-100 dark:bg-gray-900"
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
          {[
            "Projects",
            "Notes",
            "Resume",
            "Contact"
          ].map((item, index) => (
            <FlipLink
              key={index}
              href={`/${item.toLowerCase()}`}
              className="dark:text-yellow-300"
            >
              {item}
            </FlipLink>
          ))}
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

