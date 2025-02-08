import React from "react";
import Underline from "../components/animations/Underline/Underline";
import { motion } from "framer-motion";
import IntroCard from "../components/IntroCard";
import car_bg from "../media/nature_plains.jpg";

function Cover() {
  return (
    <div className="bg-s-p-1 h-screen p-8">
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          {/* <div
            style={{ backgroundImage: `url(${car_bg})` }}
            className="bg-cover h-screen"
          >
            <div
              className="bg-s-p-1"
              style={{ height: "63px" }}
            >
              <span
                style={{
                  backgroundImage: `url(${car_bg})`,
                }}
                className="bg-clip-text bg-cover text-transparent text-7xl font-bold hover:text-f-primary-3 duration-300"
              >
                hi there.
              </span>
              <br />
              <div className="text-s-a-1 text-7xl font-bold duration-200">
                <div className="hover:text-f-primary-1 duration-200">
                  welcome <br />
                </div>
                <div className="hover:text-f-primary-1 duration-200">
                  to my <br />
                </div>
                <div className="hover:text-f-primary-1 duration-200">
                  website.
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="col-span-1 "> FILLER MIDDLE
        </div> */}

        <div className="col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <section
              style={{
                backgroundImage: `url(${car_bg})`,
              }}
              className="grid grid-rows-5  bg-clip-text bg-cover text-7xl font-bold text-white"
            >
              <div className="row-span-1"></div>
              <div className="row-span-1 pl-2 hover:text-transparent duration-200">
                hi! i'm david.
              </div>
              <div className="row-span-1 text-right hover:text-transparent duration-200">
                a software developer
              </div>
              <div className="row-span-2 pl-64  text-lg font-light text-right">
                focused on refining user experiences through
                thoughtful and <br /> intuitive design,
                practical and efficient solutions, <br />
                and reliable development practices.
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      {/* bottom links */}
      <div className="m-10 absolute bottom-0 left-0">
        <div className=" text-6xl text-white opacity-90 font-bold">
          <div className=" hover:text-f-primary-1 duration-200">
            <a href="https://www.linkedin.com/in/davidsjeo/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">linkedin</a>
          </div>
          <div className=" hover:text-f-primary-1 duration-200">
          <a href="https://github.com/ddavidjeong/" target="_blank" rel="noopener noreferrer" className="cursor-pointer">github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
