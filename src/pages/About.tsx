import React from "react";
import { ThemeProvider } from "../components/ThemeContext";
import { motion } from "framer-motion";
import car_bg from "../media/mountain.jpg";

const About = () => {
  return (
    <div className="bg-s-p-1">
      <div className="p-8 grid grid-cols-4">
        <div className="col-span-1"></div>

        {/* body */}
        <div className="col-span-2  font-light opacity-90 text-white">
          <div className="bg-s-p-1 mb-6" style={{}}>
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text text-white text-6xl font-bold hover:text-transparent duration-300"
            >
              about me
            </span>
          </div>


          <p className="mb-6">
          </p>
          <p className="mb-6 ">
            I'm a developer passionate about creating
            user-centric experiences, packaged with
            performance, reliability, and an aesthetic
            touch.
          </p>

          <p className="mb-6">
            Over the years, I've had the opportunity to
            develop software across a variety of fields -
            from working for healthcare practices and
            marketing teams to building applications with
            project teams. These experiences have deepened
            my understanding of software's pivotal role that
            is and will continue to shape every facet of our
            daily lives. My passion lies in contributing to
            this evolving digital landscape by developing
            tools and platforms that not only serve our
            needs, but also enhance our interactions and
            experiences with technology.
          </p>

          <p className="mb-6">
            In my spare time, you can usually find me tuning
            my bike, trying out new recipes, or working on
            some kind of app to make my life a little
            easier.
          </p>
          <p className="mb-6">
            Currently, I am looking for opportunities in
            full-stack development and data analysis. If you
            know of any opportunities or simply want to have
            a quick chat, please feel free to contact me at
            davidsjeo@outlook.com or through any of my 
            <a href=""> social links.</a>
          </p>
        </div>
        <div className="col-span-1">
          {/* <div className="text-[10px] "> filler</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
