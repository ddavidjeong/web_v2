import React from "react";
import "./CoverPage.css";

const Cover = () => {
  return (
    <div className="bg-s-p-1 h-screen p-8">
      <div className="grid grid-cols-4">
        <div className="col-span-1"></div>
        <div className="col-span-2">
          <section className="text-white">
            <div className="font-bold text-5xl pt-12 pb-12 text-line text-line-1">
              hi! welcome to my website.{" "}
            </div>
            <div className="font-bold text-5xl pb-12 text-line text-line-2">
              my name is david.
            </div>
            <div className="font-bold text-5xl text-line text-line-3">
              i'm...
            </div>
            <div className="font-bold text-5xl indent italic text-line text-line-4">
              <span className="not-italic">a </span >software
              engineer
            </div>
            <div className="font-bold text-5xl indent italic text-line text-line-5">
              <span className="not-italic">a </span>designer
            </div>
            <div className="font-bold text-5xl indent italic text-line text-line-6">
              <span className="not-italic">a </span>thinker
            </div>
            <div className="font-bold text-5xl indent italic text-line text-line-7 pb-16">
              <span className="not-italic">and a </span>
              lifelong student.
            </div>
            <div className="text-md font-light text-line text-line-8">
              This is my personal website, a space I created
              where you can learn a little bit more about
              me. 
            </div>

            <svg className="arrows text-line text-line-9">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
          </section>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default Cover;
