import React from "react";
import car_bg from "../media/mountain.jpg";
import ProjectInputs from "../components/Projects/ProjectInputs";
import Arrow from "../components/animations/ArrowLink/Arrow";
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="bg-s-p-1 pb-8 ">
      <div className="p-8 grid grid-cols-4">
        <div className="col-span-1"></div>
        <div className="text-white col-span-2 ">
          <div
            className="bg-s-p-1 mb-8 grid grid-cols-2 "
            style={{}}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="col-span-1 bg-clip-text text-white text-6xl font-bold hover:text-transparent duration-300"
            >
              projects
            </span>
            <div className="col-span-1 relative text-zinc-200  ">
              <div className="absolute bottom-1 right-0 hover:text-white duration-200" >
                {/* <Underline text="project archive" /> */}
                <Link to="/project_archive">
                  <Arrow text="project archive"></Arrow>
                </Link>
              </div>
            </div>
          </div>
          

          <ProjectInputs />
        </div>
        {/* body */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
