import React from "react";
import ProfileCard from "../components/static/ProfileCard";
import { motion } from "framer-motion";
import Res from "../components/static/Res";

const Resume = () => {
  return (
    <div className="container mx-32">
      <div className="grid grid-cols-8 mt-20">
        <div className="col-span-3 mr-8">
          <ProfileCard />
        </div>
        <div className="col-span-5 mt-1">
          {/* resume component */}
          <motion.p
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <Res />
          </motion.p>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
