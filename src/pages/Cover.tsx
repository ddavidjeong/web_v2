import React from "react";
import Underline from "../components/animations/Underline/Underline";
import { motion } from "framer-motion";
import IntroCard from "../components/IntroCard";

function Cover() {
  return (
    <div className="bg-neutral-900 h-screen p-8">
      <div className="grid grid-cols-12">
        <div className="col-span-3 p-4  hover:shadow-lg  hover:bg-slate-200 duration-300 ">
          {/* profile card */}
          <div className="text-[100px]">
            <Underline text="LOGO" />
          </div>

          {/* <img src={logo} alt="logo" /> */}
        </div>
        <div className="col-span-5 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300 ">
          {" "}
          <div className="text-[100px]">CENTER</div>
        </div>
        {/* body */}

        <div className="col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <IntroCard />
          </motion.div>
        </div>
      </div>

      {/*         bottom links */}
      <div className="m-10 absolute bottom-0 right-0">
        <div className="text-right text-6xl text-stone-400 font-proxima-regular">
          <div className=" hover:text-stone-600 duration-200">
            linkedin
          </div>
          <div className=" hover:text-stone-600 duration-200">
            github
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
