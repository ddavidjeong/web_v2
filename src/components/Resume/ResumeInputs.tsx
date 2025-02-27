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
          "ETL pipelines, Data scrapping, Automation scripts, Visualization UI"
        ]}
        stack={[
          "Python",
          "Node.js",
          "MySQL",
          "D3.js",
          "Leaflet",
        ]}
        timeline_rect_height={20}
      />
      <ResumeCard
        company="Kay Family & Cosmetic Dentistry"
        title="Web Developer"
        date_month_start="June"
        date_month_end="December"
        date_year="2022"
        descriptions={[
          "Web, API development, Google Ads, etc"
        ]}
        stack={[
          "React",
          "Node.js",
          "PostgreSQL",
          "Bootstrap",
        ]}
        timeline_rect_height={0}
      />

      {/* <svg
        width="300"
        height="50"
        xmlns="http://www.w3.org/2000/svg"
        className="md:h-full md:my-auto relative z-40"
      >
        (
        <polygon
          points="101,0 12,0 112,25"
          fill="white"
        />
        )
      </svg> */}
    </div>
  );
}

export default Res;
