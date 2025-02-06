import React from "react";
import ProfileCard from "../components/static/ProfileCard";
import { motion } from "framer-motion";
import Res from "../components/Resume/Res";
import car_bg from "../media/mountain.jpg";
import Underline from "../components/animations/Underline/Underline";

const Resume = () => {
  return (
    <div className="bg-white h-screen">
      <div className="p-8 grid grid-cols-12">
        <div className="col-span-7 p-4 pr-4">
          <Res></Res>
          <div className="mt-16 hover:text-slate-500 font-bold">
            <Underline text="Full Resume ->"/>
          </div>
        </div>
        {/* body */}
        <div className="col-span-1"></div>

        <div
          style={{ backgroundImage: `url(${car_bg})` }}
          className="col-span-4  bg-cover h-full"
        >
          <div
            className="bg-white"
            style={{ height: "62px" }}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text text-black text-7xl font-bold hover:text-transparent duration-300"
            >
              experience
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
