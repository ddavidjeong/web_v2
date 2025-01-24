import React from "react";
import FlipLink from "../animations/FlipLink";

function Navbar() {
  return (
    <div className="grid grid-cols-4 text-1xl text-[12px] uppercase">
      {["Resume", "Projects", "About", "Contact"].map(
        (item, index) => (
            <div className= "p-1 border border-opacity-75 font-sans hover:border-stone-400 hover:shadow-lg transition-all duration-300 ease-in-out">
          <FlipLink
            key={index}
            href={`/${item.toLowerCase()}`}
          >
            {item}
          </FlipLink>
          </div>
        )
      )}
    </div>
  );
}

export default Navbar;
