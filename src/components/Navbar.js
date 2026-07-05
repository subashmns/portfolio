import React, { useEffect, useState } from "react";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const currentPath = window.location.pathname;
      const currentHash = window.location.hash;

      if (currentPath === "/") {
        setActiveLink(currentHash || "/");
      } else {
        setActiveLink(currentPath);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial active link
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {/* Side Navbar for Laptop and Desktop Views */}
          <div className="bg-light col-auto d-none d-md-flex justify-content-between flex-column navigation">
            <div>
              <a
                className="navbar-brand d-flex align-items-center justify-content-center"
                href="/"
              >
                <img src="./images/logo.png" height="125" alt="Logo" />
              </a>
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
                  >
                    <i className="fa-brands fa-linkedin social-media"></i>
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="https://github.com/subashebanezer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-github social-media"></i>
                  </a>
                </li>

                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="mailto:subashebanezer@gmail.com"
                    target="_blank"
                  >
                    <i className="fa-solid fa-envelope social-media"></i>
                  </a>
                </li>
              </ul>
              <hr className="text-secondary" />
              <ul className="nav nav-pills flex-column">
                <li className="nav-item py-1">
                  <a
                    className={`nav-link ${activeLink === "/" ? "active" : ""
                      } text-black`}
                    href="/"
                  >
                    <i className="fa-solid fa-house"></i>
                    <span className="d-none d-sm-inline ms-2">Home</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a
                    className={`nav-link ${activeLink === "/about" ? "active" : ""
                      } text-black`}
                    href="/about"
                  >
                    <i
                      className="fa-solid fa-user"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">About</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a
                    className={`nav-link ${activeLink === "/project" ? "active" : ""
                      } text-black`}
                    href="/project"
                  >
                    <i
                      className="fa-solid fa-diagram-project"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Projects</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a
                    className={`nav-link ${activeLink === "/skills" ? "active" : ""
                      } text-black`}
                    href="/skills"
                  >
                    <i
                      className="fa-solid fa-lightbulb"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Skills</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a
                    className={`nav-link ${activeLink === "/resume" ? "active" : ""
                      } text-black`}
                    href="/resume"
                  >
                    <i
                      className="fa-solid fa-file"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Resume</span>
                  </a>
                </li>
                <li className="nav-item py-1">
                  <a
                    className={`nav-link ${activeLink === "/contact" ? "active" : ""
                      } text-black`}
                    href="/contact"
                  >
                    <i
                      className="fa-solid fa-address-book"
                      style={{ color: "black" }}
                    ></i>
                    <span className="d-none d-sm-inline ms-2">Contact</span>
                  </a>
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
                <a
                  className={`nav-link ${activeLink === "/" ? "active" : ""
                    } text-black`}
                  href="/"
                >
                  <i className="fa-solid fa-house fs-5"></i>
                  <span className="d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "/about" ? "active" : ""
                    } text-black`}
                  href="/about"
                >
                  <i
                    className="fa-solid fa-user fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "/project" ? "active" : ""
                    } text-black`}
                  href="/project"
                >
                  <i
                    className="fa-solid fa-diagram-project fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "/skills" ? "active" : ""
                    } text-black`}
                  href="/skills"
                >
                  <i
                    className="fa-solid fa-lightbulb fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "/resume" ? "active" : ""
                    } text-black`}
                  href="/resume"
                >
                  <i
                    className="fa-solid fa-file fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeLink === "/contact" ? "active" : ""
                    } text-black`}
                  href="/contact"
                >
                  <i
                    className="fa-solid fa-address-book fs-5"
                    style={{ color: "black" }}
                  ></i>
                  <span className="d-none d-sm-inline">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
