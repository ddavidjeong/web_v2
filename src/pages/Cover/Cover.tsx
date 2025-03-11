import "./CoverPage.css";

const Cover = () => {
  return (
    <div className="bg-s-p-1 dark:bg-stone-200 w-full min-h-screen p-4 md:p-8 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 flex-grow">
        <div className="md:col-span-1"></div>
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <div>
            <section className="text-white dark:text-stone-600 font-bold md:text-5xl text-3xl">
              <div className="pt-12 pb-12 text-line text-line-1">
                hi! welcome to my website.
              </div>
              <div className="pb-12 text-line text-line-2">
                my name is david.
              </div>
              <div className="text-line text-line-3">
                i'm...
              </div>
              <div className="indent italic text-line text-line-4">
                <span className="not-italic">a </span>software engineer
              </div>
              <div className="indent italic text-line text-line-5">
                <span className="not-italic">a </span>designer
              </div>
              <div className="indent italic text-line text-line-6">
                <span className="not-italic">a </span>thinker
              </div>
              <div className="indent italic text-line text-line-7 pb-16">
                <span className="not-italic">and a </span>lifelong student.
              </div>
            </section>
            <div className="text-white dark:text-stone-600 md:text-md text-md font-light text-line text-line-8 mb-8">
              This is my personal website, a space I created where you can learn a little bit more about me.
            </div>
          </div>
          
          <svg
            className="w-[20vw] max-w-[60px] h-[12vh] mx-auto [&_path]:stroke-white [&_path]:fill-transparent [&_path]:stroke-2 dark:[&_path]:stroke-[#4a4a4a] text-line text-line-9 mb-4"
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