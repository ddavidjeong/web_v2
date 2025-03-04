import Github from "../assets/icons/Github";
import Linkedin from "../assets/icons/Linkedin";
import Codepen from "../assets/icons/Codepen";
import Instagram from "../assets/icons/Instagram";

const Contact = () => {
  return (
    <div className="bg-s-p-1 dark:bg-stone-200">
      <div className="p-8 grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1"></div>

        {/* body */}
        <div className="col-span-2 dark:text-stone-600  font-light opacity-90 text-white">
          <div
            className="bg-s-p-1 dark:bg-stone-200 mb-3 text-center"
            style={{}}
          >
            <span className="bg-clip-text dark:text-stone-700 text-white text-[25px] font-bold opacity-100 hover:opacity-70 duration-300">
              let's connect!
            </span>
          </div>
          <div className="font-light text-center pb-4">
            feel free to contact me through any of my social
            links or simply send me an email.
          </div>
          <div className="flex items-center justify-center">
            <span className=" mr-4">
              <Github />
            </span>
            <span className=" mr-4">
              <Linkedin />
            </span>

            <span className=" mr-4">
              <Codepen />
            </span>
            <span className=" mr-4">
              <Instagram />
            </span>
            <div className="mr-4 ml-2"> | </div>
            <a
              href="mailto:davidsjeo@gmail.com"
              className="font-light hover:text-slate-200 hover:dark:text-stone-800"
            >
              davidsjeo@gmail.com
            </a>
          </div>
        </div>
        <div className="col-span-1">
          {/* <div className="text-[10px] "> filler</div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
