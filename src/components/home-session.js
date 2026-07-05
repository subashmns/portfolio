function Home() {
  return (
    <>
      <div className="container py-4 min-vh-90 d-flex justify-content-center align-items-center session-top">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="profile-img">
              <img src="/images/profile.png" className="profile" alt="Profile" />
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-sm-12">
            <h2 className="text-center-name pt-4">
              I'm &nbsp;
              <span className="text-color">S</span>ubash Ebanezer
            </h2>

            <h1 className="home-title text-color">
              Full Stack Developer
            </h1>

            <p>
              Full Stack Developer with 1+ year of experience building scalable web
              applications using React.js, Next.js, Node.js, Express.js, SQL, MongoDB,
              and REST APIs. Passionate about creating clean, responsive, and
              user-friendly digital experiences.
            </p>

            <a href="/images/Subash_Ebanezer_M_Resume.pdf" download="Subash_Ebanezer_Resume.pdf">
              <button
                className="btn btn-outline-dark button mt-2 mb-2"
                type="button"
              >
                <span>Resume</span>
                <span>
                  <i className="fa-solid fa-download ms-2"></i>
                </span>
              </button>
            </a>
          </div>

          <div className="col-md-6 d-md-none d-flex justify-content-center pt-3">
            <div className="profile-box">
              <div>
                <a
                  className="navbar-brand d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <img src="/images/profile.png" height="100" alt="Subash Ebanezer" />
                </a>

                <h3 className="d-flex align-items-center justify-content-center">
                  Subash Ebanezer
                </h3>

                <p className="d-flex align-items-center justify-content-center">
                  Full Stack Developer
                </p>

                <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center">
                  <li className="nav-item px-1">
                    <a
                      className="nav-link"
                      href="https://www.linkedin.com/in/subash-ebanezer/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin social-media"></i>
                    </a>
                  </li>

                  <li className="nav-item px-1">
                    <a
                      className="nav-link"
                      href="https://github.com/subashebanezer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github social-media"></i>
                    </a>
                  </li>

                  <li className="nav-item px-1">
                    <a
                      className="nav-link"
                      href="mailto:subashebanezer@gmail.com"
                    >
                      <i className="fa-solid fa-envelope social-media"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;