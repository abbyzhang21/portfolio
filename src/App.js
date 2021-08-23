/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import sudoImg from "./assets/img/portfolio/sudo.png";
// import blogImg from "./assets/img/portfolio/easy-blog-396x196.png";
// import fossilImg from "./assets/img/portfolio/fossil396x196.png";
// import billingImg from "./assets/img/portfolio/billing-396x196.png";
// import mobexhiImg from "./assets/img/portfolio/mobexhi-396x196.png";
import myTrioImg from "./assets/img/portfolio/my.calatrio.png";
// import quizImg from "./assets/img/portfolio/quiz.png";
// import vueBoilerplateImg from "./assets/img/portfolio/vue-boilerplate.png";
import resume from "./assets/pdf/abby-fullstack-developer.pdf";
// import positiveBg from "./assets/img/background/positive.png";
import loading from "./assets/img/icons/loading.gif";
import "./App.css";
const Header = React.lazy(() => import("./components/Header"));
const HereSection = React.lazy(() => import("./components/HereSection"));
const About = React.lazy(() => import("./components/About"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Footer = React.lazy(() => import("./components/Footer"));
const Collaboration = React.lazy(() => import("./page/collaboration"));
const App = () => {
  return (
    <div className="aztm_all_wrap">
      <Router>
        <Suspense
          fallback={
            <div
              style={{
                backgroundColor: "#393950",
                backgroundImage: `url(${loading})`,
                backgroundSize: "250px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
              }}
            ></div>
          }
        >
          {/* <Suspense fallback={<div>.</div>}> */}
          <Route path="/collaboration" component={Collaboration} type="guest" />
          {/* </Suspense> */}

          <Route exact path="/" component={Header} resume={resume} />
          {/* <div
          style={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>COMING SOON...</h1>
        </div> */}
          <Route exact path="/" component={HereSection} />
          <Route exact path="/" component={About} resume={resume} />
          <Route
            exact
            path="/"
            component={Portfolio}
            // categories={categories}
            // projects={projects}
          />
          <Route exact path="/" component={Footer} />
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
