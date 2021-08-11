import React from "react";

const HereSection = ({ slides }) => {
  return (
    <section className="aztm_hero" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 title">
            <div className="name">
              <h2 className="stroke">Full-Stack</h2>
              <h2 className="designation">Developer</h2>
              <span>
                Hi I&apos;m Abby, Full-Stack developer who writes clean, elegant and efficient code
              </span>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 slider">
            <img src={slides} alt="front-end developer" className="slider-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HereSection;
