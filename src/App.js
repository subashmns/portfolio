import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Project";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
