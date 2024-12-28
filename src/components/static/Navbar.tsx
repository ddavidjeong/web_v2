import React from "react";
import FlipLink from "../animations/FlipLink";

function Navbar() {
  return (
    <div className="w-1/3">
      {["Resume", "Projects", "Blogs", "Work"].map(
        (item, index) => (
            <div className= "p-3 mb-2 border border-opacity-75 hover:border-stone-400 hover:shadow-lg transition-all duration-300 ease-in-out">
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
