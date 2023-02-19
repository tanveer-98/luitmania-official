import React from "react";
import "./styles.css";
import bullhorn from '../../assets/bullhorn.png'
const GlassCard = () => {
  return (
    <div className="glasscard">
      <div className="container flex flex-col items-center justify-center h-[400px] w-[300px] ">
        <div className="image-container">
        <img
          src={bullhorn}
          alt=""
        />

        </div>
        <h3 className="text-white text-3xl" >Lorem Ipsum</h3>
        <p className="text-sm text-center mx-[4rem]  text-white " >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud e
        </p>
      </div>
    </div>
  );
};

export default GlassCard;
