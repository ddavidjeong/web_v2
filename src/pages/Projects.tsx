import car_bg from "../media/mountain.jpg";
import ProjectInputs from "../components/Projects/ProjectInputs";
import Arrow from "../components/animations/ArrowLink/Arrow";
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className="bg-s-p-1 pb-8 ">
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-4">
        <div className="md:col-span-1"></div>
        <div className="text-white md:col-span-2 ">
          <div
            className="bg-s-p-1 mb-8 md:grid md:grid-cols-2 "
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="md:col-span-1 bg-clip-text text-white text-5xl md:text-5xl font-bold hover:text-transparent duration-300"
            >
              projects
            </span>
            <div className="md:col-span-1 relative text-zinc-200  ">
              <div className="md:absolute md:bottom-1 md:right-0 hover:text-white duration-200" >
                <Link to="/project_archive">
                  <Arrow text="project archive"></Arrow>
                </Link>
              </div>
            </div>
          </div>
          

          <ProjectInputs />
        </div>
        {/* body */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
