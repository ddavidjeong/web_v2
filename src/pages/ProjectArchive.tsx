import React from 'react'
import car_bg from '../media/nature_plains.jpg'
import Arrow from '../components/animations/ArrowLink/Arrow'
import ProjectInputs from '../components/Projects/ProjectInputs'

function ProjectArchive() {
  return (
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
          <div className="absolute bottom-1 right-0  hover:text-white duration-200">
            {/* <Underline text="project archive" /> */}
            <Arrow text="project archive"></Arrow>
          </div>
        </div>
      </div>
      

      <ProjectInputs />
    </div>
    {/* body */}
    <div className="col-span-1"></div>
  </div>
  )
}

export default ProjectArchive