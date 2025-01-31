import { section } from "motion/react-client";
import React, { useState, useEffect } from "react";

interface StickyHeaderProps {
  aboutRef: React.MutableRefObject<HTMLOptionElement | null>;
  resumeRef: React.MutableRefObject<HTMLOptionElement | null>;
  projectsRef: React.MutableRefObject<HTMLOptionElement | null>;
  contactRef: React.MutableRefObject<HTMLOptionElement | null>;
}

function StickyHeader({
  aboutRef,
  resumeRef,
  projectsRef,
  contactRef,
}: StickyHeaderProps) {
  const [isSticky, setIsSticky] = useState(false);

  const handleScrollTo = (
    sectionRef: React.MutableRefObject<HTMLOptionElement | null>
  ) => {
    if (sectionRef && sectionRef.current) {
      const yOffset = -56;
      const elementPosition =
        sectionRef.current.getBoundingClientRect().top;
      const offset =
        elementPosition + window.scrollY + yOffset;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
      fixed w-full 
      transition-all duration-500 ease-in-out 
      bg-zinc-100
      z-50
      ${
        isSticky
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-20"
      }
    `}
    >
      <div className="grid grid-cols-3 text-center py-4">
        <div className="col-span-1">1</div>
        <div className="col-span-1">2</div>
        <div className="col-span-1">
          <nav>
            <a
              className="text-black hover:underline mx-2"
              onClick={() => handleScrollTo(aboutRef)}
            >
              About
            </a>
            <a
              className="text-black hover:underline mx-2"
              onClick={() => handleScrollTo(resumeRef)}
            >
              Experience
            </a>

            <a
              className="text-black hover:underline mx-2"
              onClick={() => handleScrollTo(projectsRef)}
            >
              Projects
            </a>
            <a
              className="text-black hover:underline mx-2"
              onClick={() => handleScrollTo(contactRef)}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default StickyHeader;
