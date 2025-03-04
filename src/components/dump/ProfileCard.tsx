
import Navbar from "./Navbar";

export default function ProfileCard() {
  return (
      <div className="grid grid-cols-6 ">
        <a
          href="/"
          className="col-span-full  text-5xl font-bold text-primary p-1 opacity-90"
        >
          David Jeong
        </a>
        <div className="col-span-full mb-4 text-lg text-[21px] p-1 opacity-80">
          Software Engineer
        </div>
        <div className="col-span-full mb-16 font-light text-[15px] p-1 opacity-70">
          I build full-stack web applications and optimized
          database systems with an aesthetic touch.
        </div>
        <div className="col-span-full">
          <Navbar />
        </div>
      </div>
  );
}
