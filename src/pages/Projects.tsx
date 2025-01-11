import React from "react";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { motion } from "framer-motion";
import ProfileCard from "../components/static/ProfileCard";


const Projects = () => {
  return (
    <div className="container mx-32">
      <div className="grid grid-cols-8 mt-20">
        <div className="col-span-3 mr-8">
          <ProfileCard />
        </div>
        <div className="col-span-5 mt-1">
          <motion.div
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <HorizontalCarousel />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
