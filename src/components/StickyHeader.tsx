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
      bg-f-primary-4
      z-50
      ${
        isSticky
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-20"
      }
    `}
    >
      <div className="grid grid-cols-1 text-center py-4">
        <div
          className="col-span-1 font-bold text-white
"
        >
          <nav>
            <a className="mx-2 hover:underline " onClick={() => handleScrollTo(aboutRef)}>
              about
            </a>
            <a className="mx-2 hover:underline " onClick={() => handleScrollTo(resumeRef)}>
              experience
            </a>

            <a className="mx-2 hover:underline " onClick={() => handleScrollTo(projectsRef)}>
              projects
            </a>
            <a className="mx-2 hover:underline " onClick={() => handleScrollTo(contactRef)}>
              contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default StickyHeader;
