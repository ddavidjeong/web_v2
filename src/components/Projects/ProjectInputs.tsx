import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectInputs() {
  return (
    <div>
        <a href="https://github.com/ddavidjeong/web_v2" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Personal Website"
            descriptions={[
            "Personal Portfolio Website "]}
            stack={["Vite", "React", "Typescript", "Tailwind"]}
          />
      </a>
      <a href="https://github.com/Unazhang/College-Music-Trending" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Dropshipping Verfication App"
            descriptions={[
              "Vertification tool that collects data using SERP APIs to tag products on Amazon to verify is product is dropshipped. ",
            ]}
            stack={["React", "Node.js", "PostgreSQL"]}
          />
      </a>

      <a href="https://github.com/Unazhang/College-Music-Trending" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Pulse Music"
            descriptions={[
              "Full-stack iOS Spotify App. Displays user's location-based analytics on popular songs in the local area. Backend developed with SQLAlchemy. ",
            ]}
            stack={["Python", "SQL", "Postman"]}
          />
      </a>


      <a href="https://github.com/Unazhang/College-Music-Trending" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Automated File Organizer"
            descriptions={[
              "Automated user file organization using file metadata analysis. Toying with S3 buckets, DynamoDB, and Lambda functions.",
            ]}
            stack={["AWS","S3", "DynamoDB", "Lambdas"]}
          />
      </a>
      <a href="https://github.com/ddavidjeong/lease_rdbms" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Habitu"
            descriptions={[
              "Subleasing platform for local college students using Apache and MySQL for backend",
            ]}
            stack={["Java","Apache", "MySQL"]}
          />
      </a>
      
    </div>
  );
}

export default ProjectInputs;
