import React from "react";
import "./styles.css";
import bullhorn from '../../assets/bullhorn.png'
import Button from "../Neonbutton/neonbutton";
interface IGlassCard{
  colors :string;
  image ?: string;
  content? : string; 
  heading ?: string ; 
}
const GlassCard = ({colors,image="bullhorn.png",
content ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud e"
, heading ="Lorem Ipsum"



}:IGlassCard) => {

  return (
    <div className="glasscard">
      <div className="container flex flex-col items-center justify-center h-full w-full p-4 md:h-full md:w-full  ">
        <div style = {{
          backgroundColor : `${colors}`
        }}className={`image-container bg-[${colors}]  group-hover:bg-[${colors}] bg-opacity-[0.08] group-hover:shadow-sm group-hover:shadow-white`}>
        <img
          src={image}
          alt=""
        />

        </div>
        <h3 className="text-white text-2xl md:text-3xl text-center" >{heading}</h3>
        <p className="hidden md:block text-lg text-center mx-[4rem]  text-white " >
        {content}
        </p>
        <button className="mt-4 readmore-button">
            <a href="">
          Read More

            </a>
        </button>
      </div>
    </div>
  );
};

export default GlassCard;
