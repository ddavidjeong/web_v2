import React from "react";
import { ThemeProvider } from "../components/ThemeContext";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-zinc-500 h-screen ">
      <div className="p-8 grid grid-cols-12">
        <div className="col-span-4 p-4">
          <div className="text-white text-7xl font-bold hover:text-amber-50 duration-300">
            [ ABT ]
          </div>
        </div>
        <div className="col-span-4 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300 ">
          {" "}
          <div className="text-[100px] "> MC</div>
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
              <div className="font-light">
                <p className="mb-6 ">
                  Hi! My name is David and I am a
                  recent-graduate from Cornell University
                  that enjoys building reliable, efficient,
                  and user-friendly applications.
                </p>
                <p className="mb-6"></p>
                <p className="mb-6">
                  To summarize a little bit about me and my
                  background, my academic journey is
                  characterized by a diverse trajectory,
                  where it actually began in Architecture,
                  where I spent all day and night at my
                  studio aiming to master the instersection
                  of form and function. Throughout this
                  period, I progressively became convinced
                  of technology's intricate role in our
                  world and its continued prominence in the
                  future, and with having a minor background
                  in CS before, I transitioned into pursuing
                  it as my main form of study.
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
                  I built this website to showcase any
                  recent projects I'm working on, any
                  thoughts or ideas I've had recently, and
                  also to show some of the creative work
                  I've worked on in the past. In my spare
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
