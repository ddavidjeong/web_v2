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
    <div className="grid grid-cols-9 group p-4 mb-5 hover:bg-white hover:bg-opacity-20 hover:shadow-lg rounded-md duration-200">
      <div className="col-span-2">
        <div className="">
          project icon/link
        </div>
      </div>

      <div className="col-span-5">
        <div className="group-hover:text-teal-100 duration-200 text-[16px]">{title}</div>
        <ul className="font-light text-[14px] opacity-80 mt-2 ">
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        <div className="mt-4">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-s-a-1 text-black rounded-2xl mr-3 px-3 py-1 text-xs"
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
