import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mask } from "./Mask";

const Body: React.FC = () => {
  const [theme, setTheme] = useState("sunset"); // Default theme

  const toggleTheme = () => {
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
    <div className="h-full w-full bg-base-100 text-base-content dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <Mask></Mask>

        {/* scroll */}

        <div className="flex items-center justify-center min-h-screen px-28">
          <motion.div
            className="flex flex-col items-center justify-center text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-lg font-light dark:text-gray-300">
              Hello! My name is
            </p>
            <p className="text-4xl font-bold text-primary dark:text-white">
              David Jeong
            </p>
            <p className="text-lg font-light dark:text-gray-400">
              Welcome to my academic portfolio!
            </p>
          </motion.div>
        </div>

        <div className="px-14 space-y-8 dark:bg-gray-900">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.p
              key={index}
              className="text-lg font-serif text-base-content dark:text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed
              nisi. Nulla quis sem at nibh elementum
              imperdiet. Duis sagittis ipsum. Praesent
              mauris. Fusce nec tellus sed augue semper
              porta. Mauris massa. Vestibulum lacinia arcu
              eget nulla.
            </motion.p>
          ))}
        </div>
        
        <div className="py-28"></div>
      </div>
    </div>
  );
};

export default Body;
