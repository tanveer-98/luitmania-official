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
import AnimatedBG from "../components/AnimatedHome";
import HoverCard from "../components/HoverCard";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Maintainence from "../components/Maintainence";
// import Slider from "../components/Carousal/Slider";
import ButtonToTop from "../components/ButtonTop";
// import CardSlider from "../components/CardSlider";
import SlickCarousel from "../components/MultiCarousel";
import AdminAnimatedBG from "../components/AdminAnimatedHome";

import testimonialsImage from "/blog.png"
import { Route, Routes } from "react-router-dom";
import AdminHome from "../components/AdminHome";
import AdminNavbar from "../components/AdminNavbar";


function Admin() {
  //   let m = import.meta.env.VITE_CI ?? true;
  const [maintenance, setMaintenance] = useState(false);
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
        <div className="h-full">
          <AdminNavbar />
          <AdminAnimatedBG>
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/services" element={<AdminHome />} />
              <Route path="/blogs" element={<AdminHome />} />
              <Route path="/testimonials" element={<AdminHome />} />
              <Route path="/projects" element={<AdminHome />} />
            </Routes>
          </AdminAnimatedBG>

          <Footer />

        </div>
      ) : (
        <Maintainence />
      )}
    </>
  );
}

export default Admin;
