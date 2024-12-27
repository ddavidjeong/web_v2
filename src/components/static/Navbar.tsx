import React from "react";
import FlipLink from "../animations/FlipLink";

function Navbar() {
  return (
    <div className="w-1/2">
      {["Resume", "Projects", "Blogs"].map(
        (item, index) => (
            <div className= "my-4 p-3 border border-opacity-75 hover:border-stone-400 hover:shadow-lg transition-all duration-300 ease-in-out">
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
