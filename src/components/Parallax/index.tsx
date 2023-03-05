import React from 'react'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
const ParallaxComponent = () => {
  
  function parallax (event : any ){
    this.querySelectorAll()
  } 
  document.addEventListener("mousemove" , parallax);
  
  
  return (
    <section className="parallax">
      <MouseParallaxContainer globalFactorX={1} globalFactorY={1}>
  <MouseParallaxChild factorX={1} factorY={1}>
    <img className="c-1" src="circle.png" alt="" />
  </MouseParallaxChild>
  <MouseParallaxChild factorX={1} factorY={1}>
    <img className="c-2"
    src="circle.png" alt="" />
  </MouseParallaxChild>
</MouseParallaxContainer></section>
  )
}

export default ParallaxComponent