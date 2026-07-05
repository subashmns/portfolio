import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/Navbar";
import Home_Page from "./pages/Home";
import Contact_Page from "./pages/Contact";
import Projects_Page from "./pages/Project";
import Resume_Page from "./pages/Resume";
import About_Page from "./pages/About";
import Skills_Page from "./pages/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/about" element={<About_Page />} />
        <Route path="/project" element={<Projects_Page />} />
        <Route path="/skills" element={<Skills_Page />} />
        <Route path="/resume" element={<Resume_Page />} />
        <Route path="/contact" element={<Contact_Page />} />
      </Routes>
    </>
  );
}

export default App;
