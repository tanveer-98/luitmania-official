import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HoverCard from '../HoverCard';
const Projects = () => {
     const headingVariants = {
      visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1  } },
        hidden: { x: 0, y: 80, scale: 1, opacity: 0 },
      
     }
    const square1Variants = {
        visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 ,delay : 0.2 } },
        hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
      };
    const square2Variants = {
        visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 , delay : 0.4} },
        hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
      };

    const square3Variants = {
        visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 ,  delay: 0.6} },
        hidden: { x: 0, y: 100, scale: 1, opacity: 0 },
      };
    function Heading(){
      const controls = useAnimation() ; 
        const [ref , inView] = useInView(); 
        useEffect(()=>{
            if(inView){
                controls.start('visible')
            }
        },[controls, inView]);
        return <motion.h2
        className='mb-6 text-white text-3xl font-semibold text-center md:text-4xl'
        ref = {ref}
        initial ='hidden'
        animate = {controls}
        variants = {headingVariants}
        >
          Our Projects
        </motion.h2>
    }

    function  Square1(){
        const controls = useAnimation() ; 
        const [refSquare1 , inView] = useInView(); 
        useEffect(()=>{
            if(inView){
                controls.start('visible')
            }
        },[controls, inView]);

        return <motion.div
        className =" relative flex flex-col w-full h-[400px] space-y-16 text-center rounded-lg  md:w-1/3"
        ref = {refSquare1}
        initial ="hidden"
        animate = {controls}
        variants = {square1Variants}
        >
            
            <HoverCard
             title ="Apex Design & Construction"
             imageUrl="/apexsite.png"
             content = "WebSite for Design & Construction Site"
             url="https://www.apexconst.in"
            
            />
        </motion.div>
    }
    function Square2 () {
      const controls = useAnimation() ; 
      const [refSquare1 , inView] = useInView(); 
      useEffect(()=>{
          if(inView){
              controls.start('visible')
          }
      },[controls, inView]);

      return <motion.div
      className ="bg-mainMenu flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
      ref = {refSquare1}
      initial ="hidden"
      animate = {controls}
      variants = {square2Variants}
      >
          <div className="flex justify-center">
            <img src="/apexsite.png" alt="Chrome Image" />
          </div>
          <h5 className="pt-6 text-xl font-bold text-white">Ganasuraksha Party Site</h5>
          <p className="text-gray-400"> WebSite for Political Party</p>
          {/* Dots */}
          <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="https://ganasurakshaparty.in/"
              className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
            >
              Visit Site
            </a>
          </div>
      </motion.div>

    }
    function Square3(){
      const controls = useAnimation() ; 
      const [refSquare1 , inView] = useInView(); 
      useEffect(()=>{
          if(inView){
              controls.start('visible')
          }
      },[controls, inView]);

      return <motion.div
      className ="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
      ref = {refSquare1}
      initial ="hidden"
      animate = {controls}
      variants = {square3Variants}
      >
          <div className="flex justify-center">
            <img src="/apexsite.png" alt="Ganasuraksha" />
          </div>
          <h5 className="pt-6 text-xl font-bold"></h5>
          <p className="text-gray-400"> SDE at Brillio</p>
          {/* Dots */}
          <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
            <a
              href="#"
              className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"
            >
              More
            </a>
          </div>
      </motion.div>

    }
  return (
    <section id="projects" className='py-16 bg-bodyColorMain '>
        <div className="container mx-auto font-semibold text-center md:text-4xl">
          <Heading/>
        </div>
        {/* Boxes Container */}
        <div className="relative mt-12 md:mt-5 flex-wrap flex flex-col items-center max-w-6xl mx-auto  px-10   md:flex-row">
          
            
         <Square1/>
         <Square1/>
         <Square1/>
         <Square1/>
         <Square1/>
         <Square1/>

          
        </div>
      </section>
  )
}

export default Projects