import React from "react";

const HereSection = ({ slides }) => {
  return (
    <section className="aztm_hero" id="home">
      <div className="container">
        {/* <div className="row"> */}
        <div className="col-lg-12 col-md-12 title d-flex justify-content-center align-items-center ">
          <div className="name" style={{ textAlign: "center" }}>
            {/* <h2 className="stroke">Full-Stack</h2> */}
            <h3>Full-Stack Developer & Veteran</h3>
            {/* <h2 className="designation">Developer</h2> */}
            <span>
              I'm passionate about crafting elegant user experiences and solving
              hard problems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HereSection;
