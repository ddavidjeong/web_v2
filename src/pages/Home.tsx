import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Mask } from "./Mask";

import ProfileCard from "../components/static/ProfileCard";
import FillerBody from "../components/static/FillerBody";
import Body from "../components/Body";

const Home = () => {
  return (
    <div className="container mx-32">
      <div className="grid grid-cols-8 mt-20">
        <div className="col-span-3 mr-8">
          <ProfileCard />
        </div>
        <div className="col-span-5 mt-1">
          <Body />
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
