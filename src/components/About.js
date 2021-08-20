import React from "react";
import gitImg from "../assets/img/svg/social/git-square.png";
import linkedinImg from "../assets/img/svg/social/linkedin-square.png";
import aboutPic from "../assets/img/about/full-stack-developer.svg";
import reactImg from "../assets/img/technologies/react.png";
import vueImg from "../assets/img/technologies/vue.png";
import jsImg from "../assets/img/technologies/js.png";
import jqueryImg from "../assets/img/technologies/jquery.png";
import htmlImg from "../assets/img/technologies/html-5.png";
import cssImg from "../assets/img/technologies/css3.png";
import wpImg from "../assets/img/technologies/wordpress.png";
import laravelImg from "../assets/img/technologies/laravel.png";
import positiveBg from "../assets/img/background/positive.png";
import negativeBg from "../assets/img/background/negative.png";

const About = () => {
  return (
    <section className="aztm_about" id="about">
      <img src={negativeBg} />
      <div className="container">
        <div className="about_inner">
          <div className="left">
            <img className="thumbnail" src={aboutPic} alt="" />
          </div>
          <div className="right">
            <div className="name">
              <h3>
                Abby Zhang<span className="bg">About</span>
              </h3>
              <span>Creative Web &amp; App Developer</span>
            </div>
            <div className="text">
              <p>
                My name is Abby Zhang. I&apos;m a Web Developer, and I&apos;m
                very passionate and dedicated to my work.
              </p>
              {/* <p>
                With 9 years experience as a professional Web developer, I have
                acquired the different skills and knowledge necessary to make
                your project a success. I enjoy every step of the design
                process, from discussion and collaboration.
              </p> */}
              <p>I enjoyed working with the following technologies:</p>
              <div className="social-connect">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img src={reactImg} alt="React.js" />
                </a>

                <a
                  href="https://www.javascript.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={jsImg} alt="JavaScript" />
                </a>
                <a href="https://jquery.com/" target="_blank" rel="noreferrer">
                  <img src={jqueryImg} alt="jQuery" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={htmlImg} alt="HTML5" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={cssImg} alt="CSS3" />
                </a>
                <a
                  href="http://wordpress.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={wpImg} alt="WordPress" />
                </a>
                <a href="https://laravel.com/" target="_blank" rel="noreferrer">
                  <img src={laravelImg} alt="Laravel" />
                </a>
              </div>
              {/* <p>Let&apos;s connect with me on:</p> */}
            </div>
            {/* <div className="social-connect">
              <a
                href="https://www.linkedin.com/in/aiyaz-khorajia-b5a9a531/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinImg} alt="linkedin" />
              </a>
              <a
                href="https://github.com/aiyazkhorajia"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitImg} alt="github" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
