import React from "react";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { motion } from "framer-motion";
import ProfileCard from "../components/static/ProfileCard";


const Projects = () => {
  return (
    
    <div className="bg-white">
    <div className="p-8 grid grid-cols-12">
      <div className="col-span-4 p-4  ">
      <div className="text-stone-800 text-7xl font-bold hover:text-stone-400 duration-300">
          [ PRO ]
        </div>
      </div>
      <div className="col-span-8 p-5 hover:shadow-lg  hover:bg-slate-300 duration-300 ">
        <HorizontalCarousel></HorizontalCarousel>
      </div>
      {/* body */}
      {/* <div className="col-span-3 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300">
        <div className="text-[100px]"> EN</div>
      </div> */}
    </div>
  </div>
  );
};

Projects.propTypes = {};

export default Projects;
