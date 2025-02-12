
function Footer() {
  return (
    <div className="bg-s-p-2">
      <div className="p-8 grid grid-cols-4">
        <div className="col-span-1 p-4  "></div>
        <div className="col-span-2 ">
          <div className="text-white text-4xl font-bold hover:text-stone-400 duration-300"></div>

          <div className="text-white text-center text-[14px] font-light">
            <div className="pb-2">
              <span className="opacity-60">Built with</span>{" "}
              <span className="opacity-90 hover:text-fuchsia-300 hover:opacity-100 hover:font-extrabold duration-200">
                love
              </span>{" "}
              <span className="opacity-60">by me!</span>
            </div>
            <div className="opacity-60">
              © 2025 | David Jeong
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Footer;
