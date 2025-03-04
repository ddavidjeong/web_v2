import React, { useState, useEffect } from "react";
import Underline from "./animations/Underline/Underline";
import { useDarkMode } from "../DarkModeContext";

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
  const { darkMode, toggleDarkMode } = useDarkMode();

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
      fixed w-full md 
      transition-all duration-500 ease-in-out 
      bg-zinc-900/90
      dark:bg-stone-300/70 
      backdrop-blur-sm
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
          <nav className="flex items-center justify-center dark:text-stone-600 text-white">
            <a
              className="mx-3 hover:dark:text-stone-500 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(aboutRef)}
            >
              <Underline text="about" />
            </a>
            <a
              className="mx-3 hover:dark:text-stone-500 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(resumeRef)}
            >
              <Underline text="experience" />
            </a>
            <div className={darkMode ? "dark flex items-center" : "flex items-center"}>
              <button
                className=" rounded hover:dark:text-sky-900 hover:text-amber-500 text-gray-200  dark:text-gray-800 duration-200"
                onClick={toggleDarkMode}
              >
                {darkMode ? (
                  // MOON ICON
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 22 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Curvier moon shape */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 12.5 A8.5 6.5 10 0 1 11.5 4 c0-.17 .01-.34 .03-.5 A9 9 0 1 0 20 12.5z"
                  />
                </svg>
                  
                ) : (
                  // SUN ICON
                 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 "
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Center circle (sun core) */}
                  <circle cx="12" cy="12" r="5" />
                  {/* Rays */}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 1v2M12 21v2
         M4.22 4.22l1.42 1.42 
         M18.36 18.36l1.42 1.42
         M1 12h2
         M21 12h2
         M4.22 19.78l1.42-1.42
         M18.36 5.64l1.42-1.42"
                  />
                </svg>
                )}
              </button>
            </div>
            <a
              className=" mx-3 hover:dark:text-stone-500 hover:text-stone-300 duration-200"
              onClick={() => handleScrollTo(projectsRef)}
            >
              <Underline text="projects" />
            </a>
            <a
              className=" mx-3 hover:dark:text-stone-500 hover:text-stone-300 duration-200"
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
