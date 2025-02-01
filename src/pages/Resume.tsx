import React from "react";
import ProfileCard from "../components/static/ProfileCard";
import { motion } from "framer-motion";
import Res from "../components/static/Res";

const Resume = () => {
  return (
    
      <div className="bg-slate-500 h-screen">
        <div className="p-8 grid grid-cols-12">
          <div className="col-span-4 p-4  ">
          <div className="text-stone-800 text-7xl font-bold hover:text-stone-400 duration-300">
              [ EXP ]
            </div>
          </div>
          <div className="col-span-5 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300 ">
            <Res></Res>
          </div>
          {/* body */}
          <div className="col-span-3 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300">
            <div className="text-[100px]"> EN</div>
          </div>
        </div>
      </div>
  );
};

Resume.propTypes = {};

export default Resume;
