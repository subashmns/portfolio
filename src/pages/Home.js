import About from "../components/about-session";
import Project_Card from "../components/card";
import Contact from "../components/contact";
import Home from "../components/home-session";
import Skills from "../components/skills";
import Projects_Page from "./Project";

function Home_Page() {
  return (
    <>
      <div className="content">
        <Home />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
export default Home_Page;
