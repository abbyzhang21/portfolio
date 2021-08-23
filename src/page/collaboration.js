import React from "react";
import { Link } from "react-router-dom";

export default function Collaboration() {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <h3 className="page-heading text-center">Coffee with me</h3>
        </div>
        <div className="col-2">
          <Link to="/" className="">
            SKIP
          </Link>
        </div>
      </div>
      <div className="form-section">
        <div lg={5}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h6 className="section-heading">
              I am always excited to work on awesome project, message me and
              let's dicuss over coffee.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
