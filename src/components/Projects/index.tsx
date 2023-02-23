import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HoverCard from "../HoverCard";
import PROJECTS from './projects.json'

interface IProject{
  title : string;
  content : string ; 
  url : string; 
  imageUrl : string;
}
const Projects = () => {
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
 
  interface IHeading{
    content : string ; 
    styles: string ; 
  }
   function Heading({content,styles}:IHeading){
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

  interface ICard{
    title : string ; 
    imageUrl : string ; 
    content : string ; 
    url : string;
  }
  function Card({
    title,
    imageUrl,
    content, 
    url 
  } : ICard) {
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
 
  return (
    <section id="projects" className="py-16 bg-bodyColorMain ">
      <Heading 
        styles="mb-2 uppercase text-[color:var(--main-text-color)]  text-2xl text-center md:text-3xl"
         content="Our Projects"
        />
    
      <Heading 
        styles=" px-10 sub-title mb-6 text-[color:var(--main-text-color)] text-xl text-center md:text-[16px]"
         content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
  
      {/* Boxes Container */}
      <div className="container mx-auto md:mt-5  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl  ">
       
      {
        PROJECTS.map((item: IProject,idx:number)=>{
          return <div className="flex justify-center items-center">
          <Card
          
          title={item.title}
          imageUrl={item.imageUrl}
          content={item.content}
          url={item.url}
          
          />
        </div>

        })
      }
      
      
      </div>
      <div className="w-full flex justify-center items-center">
      <button></button>

      </div>
    </section>
  );
};

export default Projects;
