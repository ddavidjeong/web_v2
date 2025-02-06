import React from "react";
import ResumeCard from "./ResumeCard";
import { Resume } from "../../pages";

function Res() {
  return (
    <div>
        <ResumeCard
          company="Blue Mountain"
          title="Software Engineer Intern"
          date_month_start="June"
          date_month_end="August"
          date_year="2023"
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
        <ResumeCard
          company="Kay Family & Cosmetic Dentistry"
          title="Web Developer"
          date_month_start="June"
          date_month_end="December"
          date_year="2022"
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
        <div
            className="relative mt-2"
            style={{ width: "0", height:"0", borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop:"16px solid black", left:"136px" }}
          ></div>
        
    </div>
  );
}

export default Res;
