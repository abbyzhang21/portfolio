import React, { useState } from "react";
import gitImg from "../assets/img/svg/social/github.svg";
import linkImg from "../assets/img/svg/social/link.svg";
import positiveBg from "../assets/img/background/positive.png";

const ProjectCategory = ({ categories, projectCategories }) =>
  projectCategories.map((c) => {
    return (
      <a href={c.url} key={c} className="technology">
        {categories[c].c}
      </a>
    );
  });

const Portfolio = ({ categories, projects }) => {
  const [isNavActive, setIsActiveNav] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const handleActiveNav = () => {
    const status = isNavActive ? false : true;
    setIsActiveNav(status);
  };
  const filterCategory = (category) => {
    const filtered = projects.filter((p) => {
      return p.categories.includes(category);
    });
    setFilteredProjects(filtered);
  };
  return (
    <section className="aztm_portoflio" id="portfolio">
      <img src={positiveBg} alt="bg" />

      <div className="container" style={{ marginTop: "150px" }}>
        <div className="aztm_main_title">
          <div className="title">
            <h3>
              My Works<span className="bg">Portfolio</span>
            </h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              {categories &&
                categories.length &&
                categories.map((c) => (
                  <li className={isNavActive ? "opened" : ""} key={c.id}>
                    <span
                      onClick={() => filterCategory(c.id)}
                      className="current"
                      data-filter="*"
                    >
                      <span className="first">{c.title}</span>
                      <span className="second">{c.title}</span>
                    </span>
                  </li>
                ))}
            </ul>
            <div className="wrapper" onClick={() => handleActiveNav()}>
              <span>
                <span className="trigger"></span>
              </span>
            </div>
          </div>
        </div>
        <div className="portfolio_inner">
          <ul className="gallery_zoom">
            {filteredProjects &&
              filteredProjects.length &&
              filteredProjects.map((p, i) => (
                <li className="design" key={i}>
                  <div className="list_inner">
                    <div className="image">
                      <img src={p.img} className="project-img" alt="" />
                      <div className="overlay">
                        <div className="project-desc">
                          <p>{p.desc}</p>
                          <hr />
                          <div className="links-content">
                            {!!p.code && (
                              <a href={p.code} target="_blank" rel="noreferrer">
                                <img
                                  src={gitImg}
                                  alt="github"
                                  className="link-img"
                                />
                              </a>
                            )}
                            {!!p.url && (
                              <a href={p.url} target="_blank" rel="noreferrer">
                                <img
                                  src={linkImg}
                                  alt="link"
                                  className="link-img"
                                />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="title">
                      <h3>
                        <a href={p.url}>{p.title}</a>
                      </h3>
                      <span>
                        <ProjectCategory
                          categories={categories}
                          projectCategories={p.categories}
                        />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            <li className="list_inner mt-5">
              <h3>UPDATING ...</h3>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="aztm_button" data-position="center">
        <a href="#">
          <span>View All Works</span>
        </a>
      </div> */}
    </section>
  );
};

export default Portfolio;
