import About from "../components/about-session";
import Contact from "../components/contact";
import Home from "../components/home-session";
import Skills from "../components/skills";

function HomePage() {
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
export default HomePage;
