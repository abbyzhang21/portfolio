import React from "react";
import { Mail, Heart, Coffee, Linkedin, Instagram } from "react-feather";

const Contact = () => {
  return (
    <footer className="aztm_copyright" id="contact">
      <div className="container pt-5">
        <div className="d-flex flex-column align-items-center mb-5">
          <span>
            Interested in working together? We should chat over a <Coffee />{" "}
          </span>
          <a
            href="mailto:abbyzhang21@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="connect-btn"
          >
            <span>Let's do it</span>
          </a>
        </div>
        <div className="copyright_inner">
          <ul>
            <li className="about">
              <span>
                <strong>No © copyright issues.</strong>
              </span>
              <span>
                Let me know if you need any helps <Heart />
              </span>
            </li>
            <li className="contact">
              <span>You can find me here</span>
              <ul className="social">
                <li>
                  <a
                    href="mailto:abbyzhang21@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Mail />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/abbyzh/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/abbyq.zhang/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </li>
            {/* <li>
              <span>
                <MapPin />
                Fremont, CA 94538
              </span>
            </li> */}
            {/* <li> 
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <span className="first"></span>
                      <span className="second"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="first"></span>
                      <span className="second">
                        <img className="svg" src="img/svg/social/twitter.svg" alt="" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="first">
                        <img className="svg" src="img/svg/social/instagram.svg" alt="" />
                      </span>
                      <span className="second">
                        <img className="svg" src="img/svg/social/instagram.svg" alt="" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="first">
                        <img className="svg" src="img/svg/social/soundcloud.svg" alt="" />
                      </span>
                      <span className="second">
                        <img className="svg" src="img/svg/social/soundcloud.svg" alt="" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="first">
                        <img className="svg" src="img/svg/social/youtube.svg" alt="" />
                      </span>
                      <span className="second">
                        <img className="svg" src="img/svg/social/youtube.svg" alt="" />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="first">
                        <img className="svg" src="img/svg/social/vk.svg" alt="" />
                      </span>
                      <span className="second">
                        <img className="svg" src="img/svg/social/vk.svg" alt="" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            */}
          </ul>
        </div>
        {/* <div className="arrow_scroll">
            <Scrollchor to="#contact">
              <img src={arrowDown} alt="" />
            </Scrollchor>
          </div> */}
      </div>
    </footer>
  );
};

export default Contact;
