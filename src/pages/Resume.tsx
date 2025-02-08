import React from "react";
import ProfileCard from "../components/static/ProfileCard";
import { motion } from "framer-motion";
import Res from "../components/Resume/Res";
import car_bg from "../media/mountain.jpg";
import Underline from "../components/animations/Underline/Underline";
import Arrow from "../components/animations/ArrowLink/Arrow";

const Resume = () => {
  return (
    <div className="bg-s-p-1 pb-8 ">
      <div className="p-8 grid grid-cols-4">
        <div className="col-span-1"></div>

        <div className="col-span-2 pr-4">
          <div
            className="bg-s-p-1 mb-8 grid grid-cols-2"
            style={{}}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text col-span-1 text-white text-6xl font-bold hover:text-transparent duration-300"
            >
              experience
            </span>
            <div className="col-span-1 relative">
              <a
                href="/resume.pdf"
                target="_blank"
                
              >
                <div className="absolute bottom-1 right-0 text-zinc-200 hover:text-white duration-200">
                  <Arrow text="full resume" />
                </div>
              </a>
            </div>
          </div>

          <Res></Res>
        </div>
        {/* body */}
        <div className="col-span-1 "></div>
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
