import React from 'react'
import Arrow from '../components/animations/ArrowLink/Arrow'
import ProjectInputs from '../components/Projects/ProjectInputs'
import DataProjectInputs from '../components/Projects/DataProjectInputs'
import { Link } from 'react-router-dom'
import ScrollToTop from '../components/animations/ScrollToTop'

function ProjectArchive() {
  return (
    <div className="bg-s-p-1 p-8 grid grid-cols-4">
        <ScrollToTop/>
    <div className="col-span-1"></div>
    <div className="text-white col-span-2">
        <span
          className="bg-clip-text text-white text-4xl font-bold hover:text-transparent duration-300"
        >
          project archive
        </span>

        <div className="relative text-zinc-200">
          <div className="absolute bottom-1 right-0  hover:text-white duration-200">
            {/* <Underline text="project archive" /> */}
            <Link to="/">
                  
                <Arrow text="back to home"></Arrow>
            </Link>
          </div>
        </div>
      
      <div className="text-left text-[18px] font-bold pt-6 pb-1">full stack/swe </div>


      <ProjectInputs />
      <div className="text-left text-[18px] font-bold pt-12 pb-1">data analysis/ml </div>
      <DataProjectInputs />
    </div>
    {/* body */}
    <div className="col-span-1"></div>
  </div>
  )
}

export default ProjectArchive