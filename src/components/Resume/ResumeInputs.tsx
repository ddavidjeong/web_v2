import React from "react";
import ResumeCard from "./ResumeCard";

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
            "Python",
            "Node.js",
            "MySQL",
            "D3.js",
            "Leaflet",
          ]}
          timeline_rect_height={20}
          last_card={false}
        />
        <ResumeCard
          company="Kay Family & Cosmetic Dentistry"
          title="Web Developer"
          date_month_start="June"
          date_month_end="December"
          date_year="2022"
          descriptions={[
            "Developed and deployed a dynamic website for a dental practice using React, Node.js and Postgres, focusing on real-time appointment scheduling integrated with OpenDental API",
            "Designed responsive landing pages for Google Ads campaigns and optimized ad spending, resulting in a 32% increase in conversion rates",
          ]}
          stack={[
            "React",
            "Node.js",
            "PostgreSQL",
            "Bootstrap",
          ]}
          timeline_rect_height={0}
          last_card={true}
        />
       
        
    </div>
  );
}

export default Res;
