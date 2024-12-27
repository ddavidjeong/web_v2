import React from "react";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { motion } from "framer-motion";
import { Mask } from "../components/Mask";
import { ThemeProvider } from "../components/ThemeContext";

const Projects = () => {
  return (
    <ThemeProvider>
      <div className="h-full w-full bg-base-100 text-base-content dark:bg-gray-900 dark:text-gray-100">
        <Mask></Mask>
        <div className="flex items-center justify-center min-h-screen px-28">
          <motion.div
            className="flex flex-col items-center justify-center text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <HorizontalCarousel />
          </motion.div>
        </div>
      </div>
    </ThemeProvider>
  );
};

Projects.propTypes = {};

export default Projects;
