import React from "react";
import { ThemeProvider } from "../components/ThemeContext";

const Contact = () => {
  return (
    <div className="bg-slate-400">
      <div className="p-8 grid grid-cols-12">
        <div className="col-span-4 p-4  ">
          <div className="text-stone-800 text-7xl font-bold hover:text-stone-400 duration-300">
            [ C/O ]
          </div>
        </div>
        <div className="col-span-5 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300 ">
          650-335-5835
          <div className="text-indent">
            davidsjeo@outlook.com
          </div>
          <div className="text-indent">Palo Alto, CA</div>
        </div>
        {/* body */}
        <div className="col-span-3 p-4 hover:shadow-lg  hover:bg-stone-200 duration-300">
          <div className="text-[100px]"> </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
