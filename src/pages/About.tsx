import React from "react";
import { ThemeProvider } from "../components/ThemeContext";
import { motion } from "framer-motion";
import car_bg from "../media/nature_plains.jpg";

const About = () => {
  return (
    <div className="bg-f-primary-1">
      <div className="p-8 grid grid-cols-12">
        <div
          style={{ backgroundImage: `url(${car_bg})` }}
          className="col-span-5  bg-cover h-52"
        >
          <div
            className="bg-f-primary-1"
            style={{ height: "62px" }}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text text-transparent text-7xl font-bold hover:text-amber-50 duration-300"
            >
              about me
            </span>
          </div>
        </div>

        <div className="col-span-1">
          {/* <div className="text-[10px] "> filler</div> */}
        </div>
        {/* body */}
        <div className="col-span-6 p-4 font-light text-white">
          <p className="mb-6">
            To summarize a little bit about me:
          </p>
          <p className="mb-6 ">
            I'm a developer passionate about creating
            user-centric experiences, packaged with
            performance, reliability, and an aesthetic touch.

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
            this evolving digital landscape by developing tools and
            platforms that not only serve our needs, but
            also enhance our interactions and experiences
            with technology.
          </p>

          <p className="mb-6">
            In my spare time, you can usually find me
            tuning my bike, trying out
            new recipes, or working on some kind of app to
            make my life a little easier.
          </p>
          <p className="mb-6">
            Currently, I am looking for opportunities in
            full-stack development and data analysis. If you
            know of any opportunities or simply want to have
            a quick chat, please feel free to contact me at
            davidsjeo@outlook.com or through any of my
            social links. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
