import ProjectCard from "./ProjectCard";

function ProjectInputs() {
  return (
    <div style={{  borderTop: "1px solid rgb(120, 120, 120, .2)" }}>
        <a href="https://github.com/ddavidjeong/web_v2" target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
          <ProjectCard
            title="Personal Website"
            descriptions={[
            "Personal Portfolio Website "]}
            stack={["Vite", "React", "Typescript", "Tailwind"]}
          />
      </a>
      <a href="https://github.com/ddavidjeong/kanban_board" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Kanban Board"
            descriptions={[
              "Real-time, drag-and-drop Kanban board with task editing, prioritization, and status tracking",
            ]}
            stack={["React", "Node.js", "Javascript", "PostgreSQL"]}
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
      <a href="https://nbviewer.org/github/ddavidjeong/film_revenue_analysis/blob/main/box_office.ipynb" target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
          <ProjectCard
            title="Film Revenue Analysis"
            descriptions={[
            "An analytical study to determine how to maximize profit when pitching a new film project"]}
            stack={["Python", "NumPy", "pandas", "seaborn", "Matplotlib", "seaborn"]}
          />
      </a>
      
      <a href="https://github.com/ddavidjeong/lease_rdbms" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            title="Habitu"
            descriptions={[
              "Subleasing platform for local college students using Apache for frontend and MySQL for backend",
            ]}
            stack={["Java","Apache", "MySQL"]}
          />
      </a>
      
    </div>
  );
}

export default ProjectInputs;
