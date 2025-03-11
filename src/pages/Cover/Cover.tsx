import "./CoverPage.css";

const Cover = () => {
  return (
    <div className="bg-s-p-1 dark:bg-stone-200 w-full min-h-screen p-4 md:p-8 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 flex-grow">
        <div className="md:col-span-1"></div>
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <section className="text-zinc-300 dark:text-stone-600 font-bold md:text-5xl text-3xl">
              <div className="pt-4 lg:pt-12 pb-12 text-line text-line-1">
                hi! welcome to my website.
              </div>
              <div className="pb-12 text-line text-line-2">
                my name is{" "}
                <span className="text-white dark:text-stone-800">david</span>.
              </div>
              <div className="text-line text-line-3">
                i'm...
              </div>
              <div className="indent text-line text-line-4">
                a{" "}
                <span className=" italic text-white dark:text-stone-800 dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] drop-shadow-[0_1.2px_1.2px_rgba(236,229,212,0.5)] ">
                  software engineer
                </span>
                ,
              </div>
              <div className="indent text-line text-line-5">
                a{" "}
                <span className=" italic text-white dark:text-stone-800 dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] drop-shadow-[0_1.2px_1.2px_rgba(236,229,212,0.5)]  ">
                  data advocate
                </span>
                ,
              </div>
              <div className="indent text-line text-line-6">
                a{" "}
                <span className=" italic text-white dark:text-stone-800 dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] drop-shadow-[0_1.2px_1.2px_rgba(236,229,212,0.5)]  ">
                  problem solver
                </span>
                ,
              </div>
              <div className="indent text-line text-line-7 pb-16">
                and a{" "}
                <span className=" italic text-white dark:text-stone-800 dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)] drop-shadow-[0_1.2px_1.2px_rgba(236,229,212,0.5)]  ">
                  lifelong student
                </span>
                .
              </div>
            </section>
            <div className="text-white dark:text-stone-600 md:text-md text-md font-light text-line text-line-8 mb-8">
              This is my personal website, a space I created
              where you can learn a little bit more about
              me.
            </div>
          </div>

          <svg
            className="w-[20vw] max-w-[60px] h-[12vh] mx-auto [&_path]:stroke-white [&_path]:fill-transparent [&_path]:stroke-2 dark:[&_path]:stroke-[#4a4a4a] text-line text-line-9 mb-24 lg:mb-4"
            viewBox="0 0 60 120"
          >
            <path
              className="lg:block"
              d="M0 80 L30 112 L60 80"
            ></path>
          </svg>
        </div>
        <div className="md:col-span-1"></div>
      </div>
    </div>
  );
};

export default Cover;
