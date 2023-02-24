import React,{useState} from 'react'
import './styles.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

const Slider = () => {
  const [slideIndex , setSlideIndex] = useState(1);

  const nextSlide = ()=>{
    console.log("SLIDE INDEX : " + slideIndex)
    setSlideIndex((slideIndex+1)%dataSlider.length)
  }
  const prevSlide = () =>{
    console.log("SLIDE INDEX : " + slideIndex)
    if(slideIndex === 0 ){
      setSlideIndex(dataSlider.length-1);
    }
    else{
      setSlideIndex(slideIndex-1);
    }
  }

  return (
    <div className="container-slider">
    {
      dataSlider.map((obj,idx)=>{
        return (
          <div
          key = {idx}
          className={
            slideIndex === idx+1 ? "slide active-anim" : "slide"
          }
          >
            <img
            src = {`image${idx+1}.jpg`}
            >
            </img>
          </div>
        )
      })
    }

    <BtnSlider moveSlide = {prevSlide} direction = {"prev"}/>
    <BtnSlider moveSlide = {nextSlide} direction = {"next"}/>
    </div>
  )
}

export default Slider