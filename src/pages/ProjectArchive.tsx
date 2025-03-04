import Arrow from "../components/animations/ArrowLink/Arrow";
import ProjectInputs from "../components/Projects/ProjectInputs";
import DataProjectInputs from "../components/Projects/DataProjectInputs";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/animations/ScrollToTop";

function ProjectArchive() {
  return (
    <div className="bg-s-p-1 p-4 dark:bg-stone-200 md:p-8 md:grid md:grid-cols-4">
      <ScrollToTop />
      <div className="md:col-span-1"></div>
      <div className="text-white col-span-1 md:col-span-2">
        <span className="bg-clip-text dark:text-stone-700 text-white text-4xl font-bold hover:text-transparent duration-300">
          project archive
        </span>

        <div className="relative text-zinc-200">
          <div className="md:absolute md:bottom-1 right-0 dark:text-stone-600 hover:dark:text-stone-800 hover:text-white duration-200">
            <Link to="/">
              <Arrow text="back to home"></Arrow>
            </Link>
          </div>
        </div>

        <div className="text-left dark:text-stone-600 text-[18px] font-bold pt-6 pb-1">
          full stack/swe
        </div>

        <ProjectInputs />
        <div className="text-left dark:text-stone-600 text-[18px] font-bold pt-12 pb-1">
          data analysis/ml{" "}
        </div>
        <DataProjectInputs />
      </div>
      {/* body */}
      <div className="md:col-span-1"></div>
    </div>
  );
}

export default ProjectArchive;
