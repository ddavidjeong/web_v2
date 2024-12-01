import React from "react";
import Polygons from "./Polygons";

const Header = () => {
  return (
    <header>
      <div className="relative isolate overflow-hidden bg-gray-900 py-10 ">
        {/* <Polygons/> */}
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-semibold text-white">
            Logo
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
