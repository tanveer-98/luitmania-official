import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrollReached, setScrollReached] = useState(false);
  const toggleHam = () => {
    setOpen(!open);

    if (open == false) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
    }
  };
  const styles = {
    navlink: `${
      !open ? "bar-icon-close-navlink" : "bar-icon-open-navlink"
    } nav-link`,
  };
  function check() {
    if (window.scrollY >= 600) {
      setScrollReached(true);
    } else setScrollReached(false);
  }

  window.addEventListener("scroll", check);

  // Progress Bar Scroll Animation

  function progressBar() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("pbar")!.style.width = scrolled + "%";
  }

  // window.onscroll = function () {

  // };

  // Nav bar active on scroll

  const sections = document.querySelectorAll("section");
  const navLinks = document.getElementsByClassName("nav-link");
  // console.log("NavLinks");
  // console.log(navLinks);

  window.onscroll = () => {
    progressBar();
    var current: string | null = "";
    let prev = "Ahero"

    sections.forEach((section) => {
      //get section top Pixel
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

   
    // console.log("CURRENT" + current);
    // console.log(navLinks)

    // const values  = document.getElementsByClassName("nav-link");

    // Array.from(values).forEach((element)=>{
    //   console.log('NAVLINK')
    //   console.log(element);

    // })

    // navLinks.forEach((element) => {
    //   console.log(element)
    //   if(current)
    //   console.log(element.classList.contains(current));

    //   element.classList.remove("nav-link-active");
    //   if (current && element.classList.contains(current)) {
    //     // console.log("YES FOUND ")
    //     element.classList.add("nav-link-active");
    //   }
    // });


    // remove active from other elemnet s

    // console.log(navLinks)
    Array.from(navLinks).forEach(navlink=>{
      navlink.classList.remove("nav-link-active");
    })
    

    const currentNavLink = document.getElementsByClassName(current);
    // console.log(currentNavLink)
    if(Array.from(currentNavLink)[0])
    Array.from(currentNavLink)[0].classList.add('nav-link-active');
  };

  const handleSetActive = (to: any) => {
    console.log(to);
  };

  const onClickHandler = (event: any) => {
    // const values = document.getElementsByClassName("page-nav-link");
    // // values.forEach((element)=>{
    // // this wont work as values is a collection and not an array
    // // })
    // // console.log( typeof values)
    // // console.log(values)
    // Array.from(values).forEach((element) => {
    //   console.log(element);
    //   // if (element.classList.contains("nav-link-active")) {
    //   element.classList.remove("nav-link-active");
    //   // }
    // });
    // event.target.classList.add("nav-link-active");
  };

  const onClickLinkHandler = (event: any) => {
    // const values = document.getElementsByClassName("page-nav-link");
    // // values.forEach((element)=>{
    // // this wont work as values is a collection and not an array

    // // })
    // // console.log( typeof values)
    // // console.log(values)


    
    // Array.from(values).forEach((element) => {
    //   console.log(element);
    //   // if (element.classList.contains("nav-link-active")) {
        
    //   element.classList.remove("nav-link-active");
    //   // }
    // });

    // event.target.classList.add("nav-link-active");
  };

  const AllLinks = document.getElementsByClassName("nav-link");
  console.log("ALL LINKS :");
  // console.log(AllLinks);

  Array.from(AllLinks).forEach((link) => {
    link.addEventListener("click", () => {
       // remove active status from all links
      Array.from(AllLinks).forEach((links) => {
        links.classList.remove('nav-link-active');
       });
          // add active status to one link 
      link.classList.add("nav-link-active");
    });
  });

  return (
    <nav
      className={`fixed py-2 left-0 top-0 backdrop-blur-lg  transition-all duration-300 ease-linear z-20 ${
        scrollReached ? "bg-bodyColorMain" : "bg-transparent"
      } w-full mx-auto px-1`}
    >
      {/* <!-- Flex container for nav items --> */}

      <div className="hidden md:flex items-center justify-around space-x-20 py-2">
        {/* <!-- logo --> */}
        <div className="z-30">
          {/* <img
            src={L}
            alt=""
            id="logo"
            className="w-[200px]"
          /> */}
          <h2 className=" logo text-white ml-6 tracking-widest text-3xl text-center">
            LuitoMania
          </h2>
        </div>
        {/* <!-- Menu Items --> */}
        <div
          className={`items-center space-x-4 uppercase ${
            scrollReached ? "text-white" : "text-grayishBlue"
          } md:flex`}
        >
          <div>
            <Link
              to="Ahero"
              smooth={true}
              offset={0}
              className="nav-link Ahero nav-link-active tracking-tight hover:text-gray-100 cursor-pointer"
            >
              Home
            </Link>
          </div>

          <div onClick={(e) => onClickHandler(e)}>
            <Link
              to="services"
              smooth={true}
              offset={-120}
              className="nav-link services tracking-tight hover:text-gray-400 cursor-pointer"
            >
              Services
            </Link>
          </div>

          <div onClick={(e) => onClickHandler(e)}>
            <Link
              to="aboutus"
              smooth={true}
              offset={-120}
              className="nav-link aboutus tracking-tight hover:text-gray-400 cursor-pointer"
            >
              About us
            </Link>
          </div>

          <div onClick={(e) => onClickHandler(e)}>
            <Link
              to="projects"
              smooth={true}
              offset={-120}
              className="  nav-link projects tracking-tight hover:text-gray-400 cursor-pointer"
            >
              Projects
            </Link>
          </div>

          <div onClick={(e) => onClickHandler(e)}>
            <Link
              to="faq"
              smooth={true}
              offset={-120}
              className=" nav-link faq  tracking-tight hover:text-gray-400 cursor-pointer"
            >
              FAQ
            </Link>
          </div>

          <div onClick={(e) => onClickHandler(e)}>
            <Link
              to="newsletter"
              smooth={true}
              offset={-120}
              className="  nav-link newsletter tracking-tight  hover:text-gray-400 cursor-pointer"
            >
              NewsLetter
            </Link>
          </div>
          <div className="contact-button flex justify-center items-center">
            <Link
              to="contactus"
              smooth={true}
              offset={-80}
              className=" nav-link contactus tracking-tight hover:text-gray-400 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>

          {/* <a
              href=""
              className="px-8 py-2 text-white bg-softRed border-2 border-softRed
          rounded-lg shadow-md hover:text-softRed hover:bg-white
          "
            >
              Login
            </a> */}
        </div>
      </div>

      <div
        className={`burger-animate md:hidden w-full py-3 text-center flex ${
          open ? "justify-start" : "justify-end b-animate-start"
        }`}
      >
        <button
          id="menu-btn"
          className={`p-2 rounded-md z-30 inline-block ml-[10%] mr-[10%] md:hidden focus:outline-none hamburger  ${
            open ? "open" : ""
          }`}
          onClick={toggleHam}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        id="menu"
        className={`${
          open ? "mobile_open" : "mobile_close"
        } md:hidden fixed inset-0 z-20 flex flex-col items-center self-end
        w-full h-full min-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase
        divide-y divide-gray-500  bg-[#303030] 
         mobile-nav
        `}
      >
        <div className="mobile-nav-link w-full py-3 text-left pl-2  font-bold">
          <Link
            to="hero"
            smooth={true}
            offset={-120}
            onClick={toggleHam}
            className="  tracking-tight "
          >
            Home
          </Link>
        </div>
        <div className="mobile-nav-link  w-full py-3 text-left pl-2  ">
          <Link
            to="services"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className=" tracking-tight "
          >
            Services
          </Link>
        </div>{" "}
        <div className=" mobile-nav-link  w-full py-3 text-left pl-2 ">
          <Link
            to="aboutus"
            smooth={true}
            offset={-120}
            onClick={toggleHam}
            className="  tracking-tight "
          >
            About Us
          </Link>
        </div>{" "}
        <div className="mobile-nav-link  w-full py-3 text-left pl-2  ">
          <Link
            to="projects"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight"
          >
            Projects
          </Link>
        </div>{" "}
        <div className="mobile-nav-link  w-full py-3 text-left pl-2 ">
          <Link
            to="faq"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight  block"
          >
            FAQ
          </Link>
        </div>
        <div
          className="mobile-nav-link w-full py-3 text-left pl-2 "
          onClick={toggleHam}
        >
          <Link
            to="newsletter"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight block w-full"
          >
            NewsLetter
          </Link>
        </div>
        <div className="mobile-nav-link  w-full py-3 text-left pl-2 ">
          <Link
            to="contactus"
            onClick={toggleHam}
            smooth={true}
            offset={-120}
            className="  tracking-tight "
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div id="pbar" className="relative mb-6 h-1 w-0 bg-green-500 ">
        {/* <div className="h-1 bg-green-500" style={{ width: "50%" }}></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
