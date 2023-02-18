import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from '../../assets/luitomania.png'
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

  return (
    <nav
      className={`fixed py-2 top-0 backdrop-blur-lg  transition-all duration-300 ease-linear z-20 ${
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
            className="w-[200px] "
          /> */}
         <h2 className= " logo text-white ml-6 tracking-widest text-3xl text-center">

          LuitoMania
         </h2>
        </div>
        {/* <!-- Menu Items --> */}
        <div
          className={`items-center space-x-4 uppercase ${
            scrollReached ? "text-white" : "text-grayishBlue"
          } md:flex`}
        >
          <Link
            to="hero"
            smooth={true}
            offset={0}
            className="  tracking-tight hover:text-white  cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="aboutus"
            smooth={true}
            offset={-120}
            className="  tracking-tight hover:text-white cursor-pointer"
          >
            About us
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-120}
            className="  tracking-tight hover:text-white cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={-120}
            className="  tracking-tight hover:text-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="faq"
            smooth={true}
            offset={-120}
            className="  tracking-tight hover:text-white cursor-pointer"
          >
            FAQ
          </Link>
          <div>
            <Link
              to="newsletter"
              smooth={true}
              offset={-120}
              className="  tracking-tight  hover:text-white cursor-pointer"
            >
              NewsLetter
            </Link>
          </div>
          <div className="contact-button flex justify-center items-center">
            <Link
              to="contactus"
              smooth={true}
              offset={-80}
              className=" tracking-tight hover:text-white cursor-pointer"
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
          className={`bg-[#424242] p-2 rounded-md z-30 inline-block ml-[3%] md:hidden focus:outline-none hamburger  ${
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
            to="services"
            smooth={true}
            onClick={toggleHam}
            offset={-120}
            className="  tracking-tight "
          >
            Services
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
    </nav>
  );
};

export default Navbar;
