import React from "react";

function Whiteboard() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-1 grid grid-cols-5">
        <div className="col-span-4 relative top-1/3">
            <div className="font-bold italic text-center">
              2020
            </div>
            <div className="font-light text-center text-md">
              <div>June - August</div>
            </div>
        </div>

        <div className="col-span-1 relative h-full border-l-4 border-black z-29">
          <div className="absolute w-5 h-5  bg-black rounded-full z-30 hover:border-f-primary-4 hover:border-2 duration-75" style={{right: "80%", top:"40%"}}></div>
        </div>
      </div>



      <div className="col-span-5">
        <div className=" font-bold">Blue Mountain</div>

        <div className="italic font-light">
          Software Engineer Intern
        </div>

        <ul className="font-light list-disc list-inside">
          <li>
            Developed a data integration solution for
            private healthcare practices, centralizing
            patient data from disparate sources using MySQL
            and Node.js
          </li>
          <li>
            Streamlined marketing efforts by creating
            automation scripts (triggered and drip
            sequences) with Nodemailer
          </li>
          <li>
            Designed and implemented a geovisualization tool
            to map patients using Leaflet.js and D3.js to
            enhance targeted advertising campaigns
          </li>
        </ul>

        <div className="mt-4">
          <span className="bg-gray-200 rounded px-2 py-1 text-xs">
            React
          </span>
          <span className="bg-gray-200 rounded px-2 py-1 text-xs">
            PostgreSQL
          </span>
          <span className="bg-gray-200 rounded px-2 py-1 text-xs">
            Node.js
          </span>
          <span className="bg-gray-200 rounded px-2 py-1 text-xs">
            Tailwind
          </span>
        </div>
      </div>
    </div>

  );
}

export default Whiteboard;
