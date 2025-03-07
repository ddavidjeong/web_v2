import React from "react";

interface ProjectCardProps {
  title: string;
  descriptions: string[];
  stack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  descriptions,
  stack,
}) => {
  return (
    <div className="block group p-4  hover:bg-white hover:dark:bg-stone-300 hover:dark:bg-opacity-80 hover:bg-opacity-10 hover:shadow-lg duration-200"
        style={{  borderBottom: "1px solid rgb(120, 120, 120, .2)" }}>
     
      <div
        className="dark:text-stone-700"
      >
        <div className="text-white dark:text-stone-700 opacity-85 group-hover:opacity-100 duration-200 text-[16px]">
          {title}
        </div>
        <ul className="font-light text-[14px] opacity-75 mt-2 ">
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-3">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-s-a-1 text-black dark:text-white dark:bg-stone-500 rounded-2xl px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
