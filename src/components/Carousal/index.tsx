import React, { useEffect, useState } from "react";

const slides = [
    {
        name : 'tanveer',
        rollno : '1815010',
        section : 'B'
    },
    {
        name : 'tanveer',
        rollno : '1815010',
        section : 'B'
    }
]
const initialCarouselState = {
  offset : 0 , 
  desired : 0 ,
  active : 0 
}
interface ICarousal{
    time : number;

}
const Carousal = ({time} : ICarousal) => {
  const [current, setCurrent] = useState(0);
  
  useEffect(()=>{
    const next = (current + 1) % slides.length;
    const id = setTimeout(()=> setCurrent(next) , time )
    return ()=> clearTimeout(id);
  },[current])
  return <div>



  </div>;
};

export default Carousal;
