import React from "react";
import "./styles.css";
import bullhorn from '../../assets/bullhorn.png'
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
      <div className="container group flex flex-col items-center justify-center h-[400px] w-[300px] ">
        <div style = {{
          backgroundColor : `${colors}`
        }}className={`image-container bg-[${colors}]  group-hover:bg-[${colors}] bg-opacity-[0.08] group-hover:bg-opacity-[0.07]`}>
        <img
          src={image}
          alt=""
        />

        </div>
        <h3 className="text-white text-3xl" >{heading}</h3>
        <p className="text-sm text-center mx-[4rem]  text-white " >
        {content}
        </p>
      </div>
    </div>
  );
};

export default GlassCard;
