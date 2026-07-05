function Contact() {
  return (
    <>
      <div className="container-fluid bg-black p-5 mt-3">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-white">
              Let's Build Something Amazing Together
            </h1>

            <h6 className="text-grey">
              I'm always open to discussing new opportunities, freelance
              projects, or full-time roles. Let's connect and build something
              great.
            </h6>
          </div>

          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <a href="/contact">
              <button
                className="btn btn-custom text-white mx-4 contact-btn"
                type="button"
              >
               &rarr; Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;