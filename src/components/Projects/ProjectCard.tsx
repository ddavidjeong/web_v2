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
    <div className="grid grid-cols-9">
      <div className="col-span-2 ">
        <div className="mt-4">
          project icon/link
        </div>
      </div>

      <div className="col-span-6 p-3 mb-16 hover:bg-white hover:bg-opacity-20 hover:shadow-lg rounded-md duration-200">
        <div className="hover:text-teal-100 duration-200">{title}</div>
        <ul className="font-light mt-4">
          {descriptions.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>

        <div className="mt-4">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-2xl mr-3 px-3 py-1 text-xs"
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
