import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialJSON from "./testimonials.json";
import TestimonialCard from "../TestimonialCard2";
import MultiCarousel from "../MultiCarousel";
import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";

const Testimonials = () => {
  interface IProject {
    title: string;
    content: string;
    url: string;
    imageUrl: string;
  }

  const headingVariants = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 80, scale: 1, opacity: 0 },
  };
  interface IHeading {
    content: string;
    styles: string;
  }
  function Heading({ content, styles }: IHeading) {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.h2
        className={`${styles}`}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headingVariants}
      >
        {content}
      </motion.h2>
    );
  }
  interface IContent {
    content: any;
  }
  const styles = {
    carousal_container: "flex justify-center items-center my-12",
  };
  function Carousel() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="h-full w-full relative z-2 flex items-center justify-center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headingVariants}
      >
        <MultiCarousel data={TestimonialJSON}>
          {TestimonialJSON.map((element: any) => (
            <div className={styles.carousal_container}>
              <TestimonialCard
                profileImg={element.profileImg}
                client_name={element.client_name}
                designation={element.designation}
                content={element.content}
              />
            </div>
          ))}
        </MultiCarousel>
      </motion.div>
    );
  }

  return (
    <div className="relative -z-1 flex flex-col py-16 bg-bgcolormain  justify-center items-center flex-wrap  overflow-hidden  h-full w-full">
      <Heading
        styles="mb-2 block uppercase text-white font-bold  text-2xl text-center md:text-3xl"
        content="Testimonials from our Prestigious Clients"
      />

      <Heading
        styles=" px-10 block sub-title mb-6 text-[color:var(--main-text-color)] text-xl text-center md:text-[16px]"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />

      {/* <div className="flex flex-row flex-wrap justify-center items-center">
        <TestimonialCard
          profileImg="tanveer.webp"
          content="Great support from the team . It has been a wonderful journey from the beginning of the project till the end."
          client_name="N. Borah"
          designation="Founder of Apex Design & Construction"
        />
        <TestimonialCard
          profileImg="tanveer.webp"
          content="Great support from the team . It has been a wonderful journey from the beginning of the project till the end."
          client_name="N. Borah"
          designation="Founder of Apex Design & Construction"
        />
        <TestimonialCard
          profileImg="tanveer.webp"
          content="Great support from the team . It has been a wonderful journey from the beginning of the project till the end."
          client_name="N. Borah"
          designation="Founder of Apex Design & Construction"
        />
        <TestimonialCard
          profileImg="tanveer.webp"
          content="Great support from the team . It has been a wonderful journey from the beginning of the project till the end."
          client_name="N. Borah"
          designation="Founder of Apex Design & Construction"
        />
      </div> */}

      <div className="relative w-full h-full flex justify-center itmes-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
        <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
  <MouseParallaxChild factorX={0.3} factorY={0.5}>
  <img src="circle.png" className="circle-4" />
  </MouseParallaxChild>
  <MouseParallaxChild factorX={0.7} factorY={0.8}>
  <img src="circle.png" className="circle-1"/>
  </MouseParallaxChild>
  <MouseParallaxChild factorX={0.7} factorY={0.8}>
  <img src="circle.png" className="circle-3" />
  </MouseParallaxChild>
  <MouseParallaxChild factorX={0.7} factorY={0.8}
   style = {{
    position: "absolute",
    top : "100px",
    right : "100px",
    zIndex : 0
   }}
   className= "absolute top-0 left-0 z-0"
   >
  <img src="circle.png" className="circle-5" />
  </MouseParallaxChild>
</MouseParallaxContainer>
          <img src="circle.png" className="circle-4" />
          <img src="circle.png" className="circle-1"/>
          <img src="circle.png" className="circle-2"/>
          <img src="circle.png" className="circle-3" />
          <img src="circle.png" className="circle-5" /> 
        </div>
        <Carousel />
      </div>

      {/* <MultiCarousel data = {TestimonialJSON}  /> */}
    </div>
  );
};

export default Testimonials;
