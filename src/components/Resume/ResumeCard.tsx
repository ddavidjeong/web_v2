import { desc } from "motion/react-client";
import React from "react";

interface ResumeCardProps {
  company: string;
  title: string;
  date: string;
  descriptions: string[];
  stack: string[];
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  title,
  date,
  descriptions,
  stack,
}) => {
  return (
    <div className="grid grid-cols-2 ">
      <div className="col-span-1 font-bold">
        {company}
      </div>
      <div className="col-span-1 flex justify-end">{date}</div>

      <div className="col-span-1 italic font-light">
        {title}
      </div>
      

      <ul className="col-span-full font-light list-disc list-inside">
        {descriptions.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>
      <div className="col-span-full flex flex-wrap gap-2 mt-4">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 rounded px-2 py-1 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ResumeCard;
