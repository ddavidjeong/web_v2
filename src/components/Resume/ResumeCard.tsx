import React from "react";

interface ResumeCardProps {
  company: string;
  title: string;
  descriptions: string[];
  date_month_start: string;
  date_month_end: string;
  date_year: string;
  stack: string[];
  timeline_rect_height: number;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  company,
  title,
  descriptions,
  date_month_start,
  date_month_end,
  date_year,
  stack,
  timeline_rect_height,
}) => {
  return (
    <div className="md:grid md:grid-cols-10  dark:text-stone-600 text-white">
      <div className="hidden md:col-span-2 md:grid md:grid-cols-8">
        <div className="md:col-span-7 relative mt-4">
          <div className="font-bold italic text-center">
            {date_year}
          </div>
          <div className="font-light text-sm text-center text-md">
            <div>
              {date_month_start} - {date_month_end}
            </div>
          </div>
        </div>


        <div className="md:col-span-1  ">
          <svg
            width="20" 
            height="100" 
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-full md:my-auto relative z-40" 
          >
            <rect
              width="2"
              height="1000" 
              x="9" 
              y={timeline_rect_height}
              className="fill-white dark:fill-stone-600"
            />
            <circle cx="10" cy="25" r="10" className="fill-white dark:fill-stone-700" />
           
           
          </svg>
        </div>
        

       
      </div>

      {/* mobile dates */}
      <div className=" md:hidden font-light opacity-70 dark:text-stone-600 text-white">
        {date_month_start} - {date_month_end} {date_year}{" "}
      </div>

      <div className="relative z-10 md:col-span-8 dark:text-stone-600 text-gray-200 md:p-3 mb-16 group md:hover:bg-white md:hover:bg-opacity-10 md:hover:shadow-lg rounded-md duration-200">
        <div className="font-bold  group-hover:text-white group-hover:dark:text-stone-900 duration-200">
          {company}
        </div>
        <div className="font-light">{title}</div>
        <ul className="font-light pt-2 opacity-80 ">
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

export default ResumeCard;
