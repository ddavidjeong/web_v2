import car_bg from "../media/mountain.jpg";

const About = () => {
  return (
    <div className="bg-s-p-1 dark:bg-stone-200">
      <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-4">
        <div className="md: col-span-1"></div>

        {/* body */}
        <div className="col-span-1 dark:text-stone-600 md:col-span-2  font-light opacity-90 text-white">
          <div
            className="bg-s-p-1 dark:bg-stone-200 mb-2"
            style={{}}
          >
            <span
              style={{ backgroundImage: `url(${car_bg})` }}
              className="bg-clip-text  text-white dark:text-stone-700 text-[40px] font-bold hover:text-transparent duration-300"
            >
              about me
            </span>
          </div>

          <section className="text-white dark:text-stone-700">
            <p className="mb-6 opacity-75 ">
              I'm a developer passionate about creating
              user-centric experiences, packaged with
              performance, reliability, and an aesthetic
              touch.
            </p>
            <p className="mb-6 opacity-75">
              Over the years, I've had the opportunity to
              develop software across a variety of fields -
              from working for healthcare practices and
              marketing teams to building applications with
              project teams. These experiences have deepened
              my understanding of software's pivotal role
              that is and will continue to shape every facet
              of our daily lives. My passion lies in
              contributing to this evolving digital
              landscape by developing tools and platforms
              that not only serve our needs, but also
              enhance our interactions and experiences with
              technology.
            </p>
            <p className="mb-6 opacity-75">
              In my spare time, you can usually find me
              tuning my bike, trying out new recipes, or
              working on some kind of app to make my life a
              little easier.
            </p>
            <span className="mb-6 opacity-75">
              Currently, I am looking for opportunities in
              full-stack development and data analysis. If
              you know of any opportunities or simply want
              to have a quick chat, please feel free to
              contact me at
            </span>
            <span>
              <a
                href="mailto:davidsjeo@gmail.com"
                className="font-medium opacity-100 hover:text-f-alt-3 hover:dark:text-stone-900 duration-300"
              >
                {" "}
                davidsjeo@gmail.com
              </a>
            </span>{" "}
            <span className="opacity-75">
              or through any of my social links
            </span>
          </section>
        </div>
        <div className="col-span-1">
          {/* <div className="text-[10px] "> filler</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
