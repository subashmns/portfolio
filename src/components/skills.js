function Skills() {
  return (
    <>
      <div className="container mt-5" id="skills">
        <div className="d-flex">
          <div className="title-line"></div>
          <h1 className="px-3">Skills</h1>
        </div>

        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/html.png" height="80" alt="HTML" />
              <img src="/images/skills/css.png" height="80" alt="CSS" />
              <h6 className="text-color px-3">HTML & CSS</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/bootstrap.png" height="80" alt="Bootstrap" />
              <h6 className="text-color px-3">Bootstrap</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/js.png" height="80" alt="JavaScript" />
              <h6 className="text-color px-3">JavaScript</h6>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/react.png" height="80" alt="React" />
              <h6 className="text-color px-3">React.js</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/nextjs.png" height="80" alt="Next.js" />
              <h6 className="text-color px-3">Next.js</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/react.png" height="80" alt="React Native" />
              <h6 className="text-color px-3">React Native</h6>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/node.png" height="80" alt="Node.js" />
              <img src="/images/skills/express.png" height="80" alt="Express.js" />
              <h6 className="text-color px-3">Node.js & Express.js</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/mongodb.png" height="80" alt="MongoDB" />
              <img src="/images/skills/mysql.png" height="80" alt="MySQL" />
              <h6 className="text-color px-3">MongoDB & MySQL</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/sequelize.png" height="80" alt="Sequelize" />
              <img src="/images/skills/postman.png" height="80" alt="Postman" />
              <h6 className="text-color px-3">Sequelize & Postman</h6>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/typescript.png" height="80" alt="TypeScript" />
              <h6 className="text-color px-3">TypeScript</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/firebase.png" height="80" alt="Firebase" />
              <h6 className="text-color px-3">Firebase</h6>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center">
            <div className="skill-box">
              <img src="/images/skills/git.png" height="80" alt="Git" />
              <img src="/images/skills/github.png" height="80" alt="GitHub" />
              <h6 className="text-color px-3">Git & GitHub</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;