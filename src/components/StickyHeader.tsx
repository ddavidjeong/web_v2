import React, { useState, useEffect } from "react";
import Underline from "./animations/Underline/Underline";

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
      const yOffset = -55;
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
      bg-zinc-900/90 backdrop-blur-sm
      z-50
      ${
        isSticky
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-20"
      }
    `}
    >
      <div className="grid grid-cols-3 text-center py-4">
        <div className="col-span-1" />

        <div className="col-span-1 font-light">
          <nav className="flex justify-center text-white">
            <a
              className="mx-3 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(aboutRef)}
            >
              <Underline text="about" />
            </a>
            <a
              className="mx-3 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(resumeRef)}
            >
              <Underline text="experience" />
            </a>

            <a
              className=" mx-3 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(projectsRef)}
            >
              <Underline text="projects" />
            </a>
            <a
              className=" mx-3 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(contactRef)}
            >
              <Underline text="contact" />
            </a>
          </nav>
        </div>

        <div className="col-span-1" />
      </div>
    </header>
  );
}

export default StickyHeader;
