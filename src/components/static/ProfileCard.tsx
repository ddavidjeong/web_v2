import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div style={{ width: "340px", height: "auto" }}>
        <a href="/" className="text-5xl font-bold text-primary p-1 opacity-90">
          David Jeong
        </a>
        <p className="text-lg text-[20px] p-1 opacity-80 mb-1">
          Software Engineer
        </p>
        <p className="leading-normal text-lg font-light text-[15px] p-1 mb-12 opacity-70">
          I build full-stack web applications and optimized
          database systems, with a creative touch.
        </p>
        <div className="text-1xl text-[15px] px-1 py-2 uppercase">
          <Navbar />
        </div>
      </div>
    </motion.div>
  );
}
