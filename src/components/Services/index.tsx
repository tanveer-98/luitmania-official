import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GlassCard from "../GlassCard";
const Services = () => {
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
  return (
    <div className=" bg-mainMenu">
      <Heading
        styles="mb-2 pt-12 uppercase text-[color:var(--main-text-color)]  text-2xl text-center md:text-3xl"
        content="Our Services"
      />

      <Heading
        styles=" px-10 sub-title mb-6 text-[color:var(--main-text-color)] text-xl text-center md:text-[16px]"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
      />
      <div className="flex justify-center items-center h-full">
        <div className=" my-12 gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard colors="#ffffff" />
          <GlassCard colors="#7cff32" />
          <GlassCard colors="#32a4ff" />
          <GlassCard colors="#db32ff" />
          <GlassCard colors="#ffde32" />
          <GlassCard colors="#32ffd0" />
        </div>
      </div>
    </div>
  );
};

export default Services;
