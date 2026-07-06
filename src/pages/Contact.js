function ContactPage() {
  return (
    <>
      <div className="content pt-5" id="contact">
        <div className="row m-0">
          <div className="col-md-8">
            <div className="d-flex">
              <div className="title-line"></div>
              <h1 className="px-3">Contact Details</h1>
            </div>
            <p className="px-4">
              I'm always open to discussing new opportunities, full-time roles, or exciting
              projects. Feel free to connect with me through LinkedIn, GitHub, or email.
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="contact-card mb-3">
              <h6 className="text-color">Follow Me on</h6>
              <ul className="navbar-nav flex-row justify-content-center">
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

                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="https://wa.me/917708771245"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-whatsapp social-media"></i>
                  </a>
                </li>

                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="tel:+917708771245"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-phone social-media"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row m-0 ">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i className="fa-brands fa-linkedin pb-3"></i>
              <h6>Subash Ebanezer</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 padding-done d-flex justify-content-center">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-location-dot pb-3"></i>
              <h6>Tirunelveli, Tamil Nadu</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 padding d-flex justify-content-center">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-envelope pb-3"></i>
              <h6>subashebanezer@gmail.com</h6>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d492.9802296857757!2d77.7207515501951!3d8.706565554320733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1782761841106!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mt-5"
          title="address"
        ></iframe>
      </div>
    </>
  );
}
export default ContactPage;
