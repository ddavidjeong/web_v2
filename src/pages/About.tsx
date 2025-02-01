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



        <div className="col-span-3 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300 ">
          <div className="text-[10px] "> filler</div>
        </div>
        {/* body */}
        <div className="col-span-4 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <div className="font-light text-white">
                
                <p className="mb-6"></p>
                <p className="mb-6">
                  To summarize a little bit about me:
                </p>
                <p className="mb-6">
                  {" "}
                  In the past, I've had the opportunity to
                  develop software across a variety of
                  backgrounds - from working for healthcare
                  practices and marketing teams to building
                  applications with project teams. These
                  experiences have progressively fueled my
                  desire to drive innovation within the
                  software industry, aiming to contribute
                  meaningfully to the tools and platforms
                  that shape our daily lives.
                </p>
                <p className="mb-6">
                  In my spare
                  time, you can usually find me watching old
                  football film, cycling, or working on some
                  kind of app to make my life a little
                  easier.
                </p>
                <p>
                  {" "}
                  Currently, I am looking for opportunities
                  in full-stack development and data
                  analysis. If you know of any opportunities
                  or simply want to have a quick chat,
                  please feel free to contact me at
                  dsj47@cornell.edu.{" "}
                </p>
              </div>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
