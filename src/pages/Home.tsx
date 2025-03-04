import  { useRef } from "react";
import About from "./About";
import Resume from "./Resume";
import Cover from "./Cover/Cover";
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from "./Footer";
import StickyHeader from "../components/StickyHeader";

const Home = () => {
  const coverRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Pass these refs to StickyHeader so it can trigger scroll */}
      <StickyHeader
        aboutRef={aboutRef}
        resumeRef={resumeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />

        <section ref={coverRef}>
          <Cover />
        </section>
      


      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={resumeRef}>
        <Resume />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
      <section><Footer/></section>
    </>
  );
};

Home.propTypes = {};

export default Home;
