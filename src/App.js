/* eslint-disable no-unused-vars */
import React, { Suspense } from "react";
import kadivarImg from "./assets/img/portfolio/kadivar-396x196.png";
import blogImg from "./assets/img/portfolio/easy-blog-396x196.png";
import fossilImg from "./assets/img/portfolio/fossil396x196.png";
import billingImg from "./assets/img/portfolio/billing-396x196.png";
import mobexhiImg from "./assets/img/portfolio/mobexhi-396x196.png";
import myTrioImg from "./assets/img/portfolio/my.calatrio.png";
import quizImg from "./assets/img/portfolio/quiz.png";
import vueBoilerplateImg from "./assets/img/portfolio/vue-boilerplate.png";
import resume from "./assets/pdf/abby-fullstack-developer.pdf";
import positiveBg from "./assets/img/background/positive.png";
import loading from "./assets/img/icons/loading.gif";
import "./App.css";
const Header = React.lazy(() => import("./components/Header"));
const HereSection = React.lazy(() => import("./components/HereSection"));
const About = React.lazy(() => import("./components/About"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => {
  const categories = [
    { id: 0, title: "All" },
    { id: 1, title: "React" },
    { id: 2, title: "WordPress" },
    // { id: 3, title: "Vue.js" },
    { id: 4, title: "HTML/CSS" },
  ];
  const projects = [
    {
      title: "My Cala Trio",
      desc: "Portal for patient to get information about device, configuration, therapy progress, ratings, improvement visual chart",
      img: myTrioImg,
      url: "https://my.calatrio.com/",
      code: "",
      categories: [0, 1, 3],
    },
    // {
    //   title: "Kadivar & Associates",
    //   desc: "A finance firm based website with clean, responsive UI.",
    //   img: kadivarImg,
    //   url: "http://www.kadivarasso.com/",
    //   code: "",
    //   categories: [0, 2, 4],
    // },
    // {
    //   title: "Photo Quiz",
    //   desc: "A simple photo quiz web application with progress and result in basic chart - side project",
    //   img: quizImg,
    //   url: "https://aiyazkhorajia.github.io/quiz-app/",
    //   code: "https://github.com/aiyazkhorajia/quiz-app",
    //   categories: [0, 1, 3],
    // },
    // {
    //   title: "Mobexhi",
    //   desc: "Mobexhi is online mobile reparing, selling and buying plateform - side project",
    //   img: mobexhiImg,
    //   url: "",
    //   code: "",
    //   categories: [0, 3, 4],
    // },
    // {
    //   title: "Fossil Care",
    //   desc: "Fossil care is plateform where customer can register product warranty, track a repair status, pay bill, view media and guideline.",
    //   img: fossilImg,
    //   url: "https://fossilcare.com",
    //   code: "",
    //   categories: [0, 2, 4],
    // },
    // {
    //   title: "Easy Blog",
    //   desc: "Built a blog post web apps using clean UI - side project",
    //   img: blogImg,
    //   url: "https://aiyazkhorajia.github.io/react-dashboard/",
    //   code: "https://github.com/aiyazkhorajia/react-dashboard",
    //   categories: [0, 1, 3],
    // },
    // {
    //   title: "Vue Minimal Boilerplate",
    //   desc: "Pre built directory structure for large scale Vue application with naming convention. - side project",
    //   img: vueBoilerplateImg,
    //   url: "http://vueapp.techdroom.com/",
    //   code: "https://github.com/aiyazkhorajia/vue-boilerplate",
    //   categories: [0, 1, 3],
    // },
    // {
    //   title: "Billing Form",
    //   desc: "Simple billing form with dynamic items, tax calculation, discount and final amount - side project",
    //   img: billingImg,
    //   url: "",
    //   code: "",
    //   categories: [0, 1, 3],
    // },
  ];

  return (
    <div className="aztm_all_wrap">
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
        <Header resume={resume} />
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
        <HereSection />
        <About resume={resume} />
        <Portfolio categories={categories} projects={projects} />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
