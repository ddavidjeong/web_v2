import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Mask } from "./Mask";

import ProfileCard from "../components/static/ProfileCard";
import FillerBody from "../components/static/FillerBody";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <ProfileCard />
        </div>
        <div className="md:col-span-2">
          <FillerBody />
        </div>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
