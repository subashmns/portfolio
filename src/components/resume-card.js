import React from "react";

function Resume() {
  return (
    <>
      <div className="container mt-3">
        <div className="d-flex">
          <div className="title-line"></div>
          <h1 className="px-3">Resume</h1>
        </div>
        <a href="/images/Resume.pdf" download="Resume.pdf">
          <button className="btn btn-custom text-white mt-4" type="button">
            <span>Download as PDF</span>
            <span>
              <i className="fa-solid fa-download px-2"></i>
            </span>
          </button>
        </a>
      </div>
      <div className="d-flex justify-content-center py-5">
        <iframe
          src="/images/Subash_Ebanezer_M_Resume.pdf"
          width="100%"
          height="600px"
          style={{ border: "none" }}
          title="PDF Viewer"
        />{" "}
      </div>
    </>
  );
}

export default Resume;
