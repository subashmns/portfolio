import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink(location.hash || "/");
    } else {
      setActiveLink(location.pathname);
    }
  }, [location]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Side Navbar for Laptop and Desktop Views */}
          <div className="bg-light col-auto d-none d-md-flex justify-content-between flex-column navigation">
            <div>
              <Link
                className="navbar-brand d-flex align-items-center justify-content-center"
                to="/"
              >
                <img src="./images/logo.png" height="125" alt="Logo" />
              </Link>

              <h3 className="d-flex align-items-center justify-content-center responsive">
                Subash Ebanezer
              </h3>

              <p className="d-flex align-items-center justify-content-center responsive">
                Full Stack Developer
              </p>

              <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center responsive">
                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/subash-ebanezer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin social-media"></i>
                  </a>
                </li>

                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="https://github.com/subashebanezer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github social-media"></i>
                  </a>
                </li>

                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="mailto:subashebanezer@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-envelope social-media"></i>
                  </a>
                </li>
              </ul>

              <hr className="text-secondary" />

              <ul className="nav nav-pills flex-column">
                <li className="nav-item py-1">
                  <Link
                    className={`nav-link ${
                      activeLink === "/" ? "active" : ""
                    } text-black`}
                    to="/"
                  >
                    <i className="fa-solid fa-house"></i>
                    <span className="d-none d-sm-inline ms-2">Home</span>
                  </Link>
                </li>

                <li className="nav-item py-1">
                  <Link
                    className={`nav-link ${
                      activeLink === "/about" ? "active" : ""
                    } text-black`}
                    to="/about"
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">About</span>
                  </Link>
                </li>

                <li className="nav-item py-1">
                  <Link
                    className={`nav-link ${
                      activeLink === "/project" ? "active" : ""
                    } text-black`}
                    to="/project"
                  >
                    <i
                      className="fa-solid fa-diagram-project"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Projects</span>
                  </Link>
                </li>

                <li className="nav-item py-1">
                  <Link
                    className={`nav-link ${
                      activeLink === "/skills" ? "active" : ""
                    } text-black`}
                    to="/skills"
                  >
                    <i
                      className="fa-solid fa-lightbulb"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Skills</span>
                  </Link>
                </li>

                <li className="nav-item py-1">
                  <Link
                    className={`nav-link ${
                      activeLink === "/resume" ? "active" : ""
                    } text-black`}
                    to="/resume"
                  >
                    <i
                      className="fa-solid fa-file"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Resume</span>
                  </Link>
                </li>

                <li className="nav-item py-1">
                  <Link
                    className={`nav-link ${
                      activeLink === "/contact" ? "active" : ""
                    } text-black`}
                    to="/contact"
                  >
                    <i
                      className="fa-solid fa-address-book"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-2 d-flex align-items-center justify-content-center responsive">
              <small>© 2026 All Rights Reserved.</small>
            </div>
          </div>

          {/* Bottom Navigation for Mobile and Tablet Views */}
          <div className="bottom-nav d-md-none">
            <ul className="nav nav-pills justify-content-around">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/" ? "active" : ""
                  } text-black`}
                  to="/"
                >
                  <i className="fa-solid fa-house fs-5"></i>
                  <span className="d-none d-sm-inline">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/about" ? "active" : ""
                  } text-black`}
                  to="/about"
                >
                  <i
                    className="fa-solid fa-user fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">About</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/project" ? "active" : ""
                  } text-black`}
                  to="/project"
                >
                  <i
                    className="fa-solid fa-diagram-project fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Projects</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/skills" ? "active" : ""
                  } text-black`}
                  to="/skills"
                >
                  <i
                    className="fa-solid fa-lightbulb fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Skills</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/resume" ? "active" : ""
                  } text-black`}
                  to="/resume"
                >
                  <i
                    className="fa-solid fa-file fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Resume</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "/contact" ? "active" : ""
                  } text-black`}
                  to="/contact"
                >
                  <i
                    className="fa-solid fa-address-book fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;