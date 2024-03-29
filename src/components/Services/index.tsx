import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GlassCard from "../GlassCard/card2";
import SERVICES from "./services.json";
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
    <section id="services" className=" bg-[#151617]">
      <Heading
        styles="mb-2 pt-12 uppercase text-[color:var(--main-text-color)]  text-2xl text-center md:text-3xl"
        content="Our Services"
      />

      <Heading
        styles=" px-10 sub-title mb-6 text-gray-400 text-xl text-center md:text-xl"
        content="With our team of highly skilled and experienced professionals, we are proud to offer a wide range of services that are designed to meet your unique needs and exceed your expectations"
      />
      <div className="flex justify-center items-center h-full ">
        <div className=" my-12 gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((data: any, idx: number) => <GlassCard colors={data.color} heading= {data.heading} />)}
        </div>
      </div>
    </section>
  );
};

export default Services;
