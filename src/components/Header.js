import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Download } from "react-feather";
import menuImg from "../assets/img/icons/menu.svg";
import closeImg from "../assets/img/icons/close.svg";
import myIcon from "../assets/img/icons/my-icon.png";

const Header = ({ resume }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`aztm_topbar opened ${scrollPosition > 50 ? "animate" : ""}`}
      >
        <div className="container">
          <div className="topbar_inner">
            <div className="menu">
              <div className="links">
                <ul className="anchor_nav">
                  <li>
                    <Link
                      // activeClass="active"
                      className="home"
                      to="home"
                      // spy={true}
                      // smooth={true}
                      // duration={500}
                    >
                      {/* <span className="first"></span> */}
                      <span>
                        <img
                          src={myIcon}
                          style={{ width: "35px" }}
                          alt="logo"
                        />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="about"
                      to="about"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <span className="first">About</span>
                      <span className="second">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="portfolio"
                      to="portfolio"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <span className="first">Portfolio</span>
                      <span className="second">Portfolio</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      className="contact"
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <span className="first">Contact</span>
                      <span className="second">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="aztm_resume" data-position="center">
              <a href={resume} download>
                <span>Resume</span>
                <Download />
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="aztm_mobile_menu">
        <div className="topbar_inner">
          <div onClick={() => setOpenMenu(!openMenu)} className="menu-icons">
            {openMenu ? (
              <>
                <img src={closeImg} alt="" />
                <span className="menu-txt">CLOSE</span>
              </>
            ) : (
              <>
                <img
                  src={menuImg}
                  alt=""
                  onClick={() => setOpenMenu(!openMenu)}
                />
                <span className="menu-txt">MENU</span>
              </>
            )}
          </div>
          <div className="aztm_resume" data-position="center">
            <a href={resume} download>
              <span>Resume</span>
              <Download />
            </a>
          </div>
          {/* <div
              className={`hamburger hamburger--collapse-r ${openMenu} ? 'is-active' : ''`}
              onClick={() => setOpenMenu(!openMenu)}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div> */}
        </div>
        <div
          className="dropdown"
          style={{ display: openMenu ? "block" : "none" }}
        >
          <div className="container">
            <div className="dropdown_inner">
              <ul className="anchor_nav">
                <li>
                  <Link
                    activeClass="active"
                    className="home"
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="about"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="portfolio"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="contact"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
