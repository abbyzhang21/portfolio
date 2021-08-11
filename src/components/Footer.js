import React from "react";
import { MapPin, Mail, Phone } from "react-feather";

const Contact = () => {
  return (
    <footer className="aztm_copyright" id="contact">
      <div className="container">
        <div className="copyright_inner">
          <ul>
            <li className="about">
              <span>
                <strong>© 2021 Abby Zhang. All Rights Reserved.</strong>
              </span>
              {/* <span>
                Designed and developed with <Heart /> and couple of <Coffee /> by Aiyaz.
              </span> */}
            </li>
            <li className="contact">
              <span>
                <Mail /> abbyzhang21@gmail.com
              </span>
              <span>
                <Phone />
                626-863-9267
              </span>
            </li>
            <li>
              <span>
                <MapPin />
                Fremont, CA 94538
              </span>
            </li>
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
