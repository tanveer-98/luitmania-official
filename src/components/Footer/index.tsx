import React from "react";
import Wave from "../CssWave";

const Footer = () => {
  return (
    <section id="footer" className="bg-mainMenu relative pt-10">
      
      {/* <Wave> */}

      <div className=" flex flex-col items-center justify-center mx-auto  space-y-10 px-6 md:flex-row md:space-y-0">
        
        {/* Logo Container */}
        <div
          className="flex flex-col  items-center font-sans justify-between  my-5 text-lg font-light md:items-center 
      text-grayishBlue
      "
        >
          <div>Copyright @ 2023 <a className="hover:text-white text-blue-600" href="https://luitomania-official.netlify.app/">

        LuitoMania
          </a>
        <div className="text-lg text-center ">All Rights Reserved</div>
        </div>
          <div className="w-full text-center">Designed by LuitoMania</div>
        </div>
      </div>

      {/* </Wave> */}
    </section>
  );
};

export default Footer;
