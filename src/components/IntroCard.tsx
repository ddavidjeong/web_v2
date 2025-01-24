import React from "react";
import Navbar from "./static/Navbar";
import TextSlideIn from "./animations/TextSlideIn";

// border
// className="border border-opacity-75  hover:border-stone-400">
//  border-stone-800 border-0 hover:border-2

function IntroCard() {
  return (
    <div className="p-4  hover:shadow-lg  hover:bg-stone-200 duration-300 ease-in-out">
      <div className="font-sans text-[32px] text-stone-90000 transition-opacity opacity-70 hover:opacity-100 duration-300 ease-in-out">
        DAVID JEONG
      </div>
      <div className="font-sans text-stone-600 text-[17px]">
        Software Engineer{" "}
      </div>

      <div className="text-stone-600 mb-24 mt-4 font-sans text-[14px]">
        {" "}
        I build full-stack web applications and optimized
        database systems with an aesthetic touch.
      </div>

      <Navbar />
      
    </div>
  );
}

export default IntroCard;
