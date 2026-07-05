function About() {
  return (
    <>
      <div className="container h-100 pt-2" id="about">
        <div className="d-flex">
          <div className="title-line"></div>
          <h1 className="px-3">What I do?</h1>
        </div>
        <p className="about-text">
          I am a Full Stack Developer with over 1 year of experience in developing
          scalable web applications using React.js, Next.js, Node.js, Express.js,
          SQL, MongoDB, and REST APIs. I have contributed to Learning Management
          Systems (LMS), CRM applications, and Booking Management Systems, focusing
          on clean code, responsive design, and delivering efficient business
          solutions.
        </p>
        <a href="/project">
          <button
            className="btn btn-custom text-white project-btn"
            type="button"
          >
            View Projects
          </button>
        </a>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center">
            <div className="about-box">
              <h6>Building Dynamic Web Applications</h6>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center">
            <div className="about-box">
              <h6>Responsive Website Design</h6>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4 d-flex justify-content-center">
            <div className="about-box">
              <h6>API Development & Integration</h6>
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="about-card justify-content-center align-items-center d-flex">
            <div className="d-flex align-items-center">
              <h1 className="number">1+</h1>
              <div className="about-line mx-1"></div>
              <h6 className="justify-content-center">Year Of Experience</h6>
              <div className="d-flex align-items-center">
                <h1 className="number">4</h1>
                <div className="about-line mx-1"></div>
                <h6 className="justify-content-center">Projects Worked</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
