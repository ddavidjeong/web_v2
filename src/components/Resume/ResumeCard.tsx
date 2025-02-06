import React from "react";

interface ResumeCardProps {
  company: string;
  title: string;
  descriptions: string[];
  date_month_start: string;
  date_month_end: string;
  date_year: string;
  stack: string[];
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  title,
  descriptions,
  date_month_start,
  date_month_end,
  date_year,
  stack,
}) => {
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-2 grid grid-cols-8">
        <div className="col-span-7 relative mt-4">
          <div className="font-bold italic text-center">
            {date_year}
          </div>
          <div className="font-light text-sm text-center text-md">
            <div>
              {date_month_start} - {date_month_end}
            </div>
          </div>
        </div>

        <div className="col-span-1 mt-4 relative h-full border-l-2 border-black z-29">
          <div
            className="absolute w-4 h-4  bg-black rounded-full z-30 hover:border-f-primary-4 hover:border-2 duration-75"
            style={{ right: "12px" }}
          ></div>
        </div>
      </div>

      <div className="col-span-8 opacity-80 p-3 mb-16 hover:bg-white hover:bg-opacity-50 hover:shadow-md rounded-md duration-200">
        <div className=" font-bold">{company}</div>

        <div className="italic font-light">{title}</div>

        <ul className="font-light list-disc list-inside">
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

export default ResumeCard;
