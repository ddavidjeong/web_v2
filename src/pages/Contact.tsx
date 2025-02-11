import React from "react";
import Github from "../assets/icons/Github";
import Linkedin from "../assets/icons/Linkedin";
import Codepen from "../assets/icons/Codepen";
import Instagram from "../assets/icons/Instagram";

const Contact = () => {
  return (
    <div className="bg-s-p-1">
      <div className="p-8 grid grid-cols-4">
        <div className="col-span-1"></div>

        {/* body */}
        <div className="col-span-2  font-light opacity-90 text-white">
          <div className="bg-s-p-1 mb-6" style={{}}>
            <span className="bg-clip-text text-white text-3xl font-bold hover:text-transparent duration-300">
              let's connect!
            </span>
          </div>
          <div className="font-light pb-4">
            feel free to contact me through any of my social
            links or send me an email. 
          </div>
          <div className="flex">
            <span className=" mr-4">
              <Github />
            </span>
            <span className=" mr-4">
              <Linkedin />
            </span>

            <span className=" mr-4">
              <Codepen />
            </span>
            <span className=" mr-4">
              <Instagram />
            </span>
          </div>
          <div className="font-light pt-2 pb-2">
            davidsjeo@gmail.com
          </div>
        </div>
        <div className="col-span-1">
          {/* <div className="text-[10px] "> filler</div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
