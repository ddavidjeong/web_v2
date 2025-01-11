import React from "react";
import ResumeCard from "./ResumeCard";
import { Resume } from "../../pages";

function Res() {
  return (
    <div>
      <div className="mb-4">
        <ResumeCard
          company="Blue Mountain"
          city="Fremont, CA"
          title="Software Engineer Intern"
          date="June 2023 – August 2023"
          descriptions={[
            "Developed a data integration solution for private healthcare practices, centralizing patient data from disparate sources using MySQL and Node.js",
            "Streamlined marketing efforts by creating automation scripts (triggered and drip sequences) with Nodemailer",
            "Designed and implemented a geovisualization tool to map patients using Leaflet.js and D3.js to enhance targeted advertising campaigns",
          ]}
          stack={[
            "React",
            "Node.js",
            "PostgreSQL",
            "TailwindCSS",
          ]}
        />
      </div>
      <div className="mb-4">
        <ResumeCard
          company="Kay Family & Cosmetic Dentistry"
          city="Fremont, CA"
          title="Web Developer"
          date="June 2022 – December 2022"
          descriptions={[
            "Developed and deployed a dynamic website for a dental practice using React, Node.js and MySQL, focusing on real-time appointment scheduling integrated with OpenDental API",
            "Designed responsive landing pages for Google Ads campaigns and optimized ad spending, resulting in a 32% increase in conversion rates",
          ]}
          stack={[
            "React",
            "Node.js",
            "PostgreSQL",
            "TailwindCSS",
          ]}
        />
      </div>
    </div>
  );
}

export default Res;
