import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/static/ProfileCard";
import Body from "../components/static/Body";
import Navbar from "../components/static/Navbar";
import IntroCard from "../components/IntroCard";

const Home = () => {
  return (
    <div className ="bg-ceramic h-screen pt-8">
      <div className="container px-8 ">
        <div className="grid grid-cols-8">
          <div className="col-span-3 pr-8">
            {/* profile card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              Logo
            </motion.div>
          </div>
          {/* body */}
          <div className="col-span-5 mt-1">
            <IntroCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
