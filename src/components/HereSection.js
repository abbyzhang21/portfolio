import React from "react";

const HereSection = ({ slides }) => {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 1000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML =
      ".txt-rotate > .wrap { border-right: 0.08em solid #7e89fd }";
    document.body.appendChild(css);
  };
  return (
    <section className="aztm_hero" id="home">
      <div className="container">
        {/* <div className="row"> */}
        <div className="col-lg-12 col-md-12 title d-flex justify-content-center align-items-center ">
          <div className="name" style={{ textAlign: "center" }}>
            {/* <h2 className="stroke">Full-Stack</h2> */}
            {/* <h3>Full-Stack Developer & Veteran</h3> */}
            {/* <h2 className="designation">Developer</h2> */}
            <div className="hero">
              {/* <p>
                I'm passionate about crafting elegant user experiences and
                solving hard problems
              </p> */}
              <h3>
                I
                <span
                  className="txt-rotate"
                  data-period="1000"
                  data-rotate='[ "am Abby.","write code.", "am a veteran.", "am curious.","love what I do."]'
                  style={{ paddingLeft: "5px" }}
                ></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HereSection;
