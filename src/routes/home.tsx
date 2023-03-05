import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Arrow from "./assets/icon-arrow.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "../components/Hero/hero";
import AboutUs from "../components/AboutUs";
import Team from "../components/OurTeam";
import NewsLetter from "../components/NewsLetter";
import Faq from "../components/FAQ";
import Projects from "../components/Projects";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AnimatedBG from "../components/AnimatedBG";
import HoverCard from "../components/HoverCard";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Maintainence from "../components/Maintainence";
// import Slider from "../components/Carousal/Slider";
import ButtonToTop from "../components/ButtonTop";
// import CardSlider from "../components/CardSlider";
// import SlickCarousel from "../components/MultiCarousel";
import Blogs from "../components/Blogs";
import OurLocation from "../components/OurLocation";
import Parallax from "../components/Parallax";
function Home() {
  const [count, setCount] = useState(0);
  //   let m = import.meta.env.VITE_CI ?? true;
  const [maintenance, setMaintenance] = useState(
    import.meta.env.VITE_MAINTENANCE === "true"
    // true
  );
  // console.log(import.meta.env.VITE_MAINTENANCE, maintenance)
  const [show, setShow] = useState(false);
  const options = {
    top: 0,
    left: 0,
    smooth: "smooth",
  };
  const onClickHandler = () => {
    window.scrollTo(options);
  };

  const ShowbuttonTop = () => {
    if (window.scrollY > 500) {
      setShow(true);
    } else setShow(false);
  };

  window.addEventListener("scroll", ShowbuttonTop);

  useEffect(() => {
    const tabs = document.querySelectorAll(".tab");
    const panels = document.querySelectorAll(".panel");

    // Tabs menu event listener
    const onTabClick = (Selectedtab: any) => {
      // console.log('tab clicked ')
      // console.log(Selectedtab)
      tabs.forEach((tab) => {
        tab.children[0].classList.remove("active");
      });
      Selectedtab.children[0].classList.add("active");
      // Selectedtab.classList.add('active')
      // console.log('tab clicked: '+ idx)
      const classString = Selectedtab.getAttribute("data-target");
      panels.forEach((panel) => {
        if (panel.classList.contains(classString)) {
          panel.classList.remove("hidden");
        } else panel.classList.add("hidden");
      });
    };
    tabs.forEach((tab, idx) => {
      tab.addEventListener("click", () => onTabClick(tab));
    });
  }, []);

  return (
    <>
      {!maintenance ? (
        <div>
          {/* <Parallax/> */}
          <Navbar />
         
          <AnimatedBG />
          <Services />
          <AboutUs />
          <Team />
          <Projects />
          <Testimonials />
          <Blogs />
          <Faq />
          <NewsLetter />
          <div className="w-full bg-mainMenu">
            <Contact />
          </div>
          <div
            className={` rocket ${show ? "fade-in-image" : "fade-out-image"} `}
          >
            <ButtonToTop
              onclick={onClickHandler}
              text="Back To Top"
              children={<img src="rocket.svg" alt="ToTop" />}
            />
          </div>
          <div
            className={` whatsapp ${
              show ? "fade-in-image" : "fade-out-image"
            } `}
          >
            <ButtonToTop
              text="<img width='200px' src='WhatsAppButtonGreenLarge.png' alt='Luitomania Whatsapp'/>
              
              "
              children={
                <a href="https://wa.me/7637063451">
                  <img
                    height="100px"
                    width="100px"
                    src="whatsapp.svg"
                    alt="web whatsapp luitomania"
                  />
                </a>
              }
            />
          </div>
          <OurLocation />
          <Footer />
        </div>
      ) : (
        <Maintainence />
      )}
    </>
  );
}

export default Home;
