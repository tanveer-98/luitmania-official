import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HoverCard from "../HoverCard";
import MultiCarousel from "../MultiCarousel";
import Location from '../Location'

interface IProject {
  title: string;
  content: string;
  url: string;
  imageUrl: string;
}
const OurLocation = () => {
  const headingVariants = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 80, scale: 1, opacity: 0 },
  };
  const square1Variants = {
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.2 },
    },
    hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
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

  interface ICard {
    title: string;
    imageUrl: string;
    content: string;
    url: string;
  }
  function Card({ title, imageUrl, content, url }: ICard) {
    const controls = useAnimation();
    const [refSquare1, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        className=" relative flex flex-col w-full h-[370px] space-y-16 text-center rounded-lg  md:w-1/3"
        ref={refSquare1}
        initial="hidden"
        animate={controls}
        variants={square1Variants}
      >
        <HoverCard
          title={title}
          imageUrl={imageUrl}
          content={content}
          url={url}
        />
      </motion.div>
    );
  }

  const styles = {
    carousal_container: "md:hidden flex justify-center items-center my-16",
  };

  return (
    <section id="projects" className="pt-16 pb-24 bg-bodyColorMain">
      <Heading
        styles="mb-16 sub-title uppercase text-white font-bold  text-2xl text-center md:text-3xl"
        content="Let's MeetUp for something New"
      />
      <Location />
    </section>
  );
};

export default OurLocation;
