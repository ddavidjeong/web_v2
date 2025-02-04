import React from "react";
import ProfileCard from "../components/static/ProfileCard";
import { motion } from "framer-motion";
import Res from "../components/Resume/Res";
import car_bg from "../media/car_light.jpg";

const Resume = () => {
  return (
    <div className="bg-f-alt-3 h-screen">
      <div className="p-8 grid grid-cols-12">
        <div className="col-span-7 p-4 pr-16 ">
          <Res></Res>
        </div>
        {/* body */}
        <div
          style={{ backgroundImage: `url(${car_bg})` }}
          className="col-span-5  bg-cover h-52"
        >
          <div
            className="bg-f-alt-3"
            style={{ height: "62px" }}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text text-transparent text-7xl font-bold hover:text-amber-50 duration-300"
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
