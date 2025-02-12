import React from "react";
import Res from "../components/Resume/ResumeInputs";
import car_bg from "../media/mountain.jpg";
import Arrow from "../components/animations/ArrowLink/Arrow";

const Resume = () => {
  return (
    <div className="bg-s-p-1 pb-8">
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-4">
        {/* left column */}
        <div className="md:col-span-1"></div>

        {/* desktop main column */}
        <div className="col-span-1 md:col-span-2 md:pr-4">
          <div
            className="bg-s-p-1 mb-8 md:grid md:grid-cols-2"
            style={{}}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text md:col-span-1 text-white md:text-6xl text-5xl font-bold hover:text-transparent duration-300"
            >
              experience
            </span>

            {/* arrow anchor link for desktop */}
            <div className="md:col-span-1 relative">
              <a href="/resume.pdf" target="_blank">
                <div className="md:absolute md:bottom-1 md:right-0 text-zinc-200 hover:text-white duration-200">
                  <Arrow text="full resume" />
                </div>
              </a>
            </div>
          </div>

          <Res></Res>
          
          
        </div>

        {/* right column */}
        <div className="md:col-span-1 "></div>
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
