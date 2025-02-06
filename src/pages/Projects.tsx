import React from "react";
import car_bg from "../media/mountain.jpg";
import ProjectInputs from "../components/Projects/ProjectInputs";
import UnderlineRight from "../components/animations/Underline/UnderlineRight";

const Projects = () => {
  return (
    <div className="bg-navy ">
      <div className="p-8 grid grid-cols-12">
        <div className="text-white col-span-7 p-4 pr-4">
          <ProjectInputs />
          <div className="text-white hover:text-teal-100 font-bold">
            <UnderlineRight text="Full Project Archive ->"/>
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
              projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
