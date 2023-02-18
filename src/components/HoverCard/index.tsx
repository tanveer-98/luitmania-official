import React from "react";
import './styles.css'
const HoverCard = () => {
  return (
    <div className="hovercard_container">
      <div className="hovercard_card">
        <div className="hovercard_image">
          <img
          className="hovercard_image_img"
            src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
            alt="hovercard_image1"
          />
        </div>
        
          <div className="button_container bg-blue-200 flex justify-center items-center w-full">
          <button
          className="hovercard_viewmore">
            View More 
          </button>

          </div>
        <div className="hovercard_content_container">
          <div className="hovercard_content_content">

          <h3>Ganasuraksha Party</h3>
          <p>
            DIn publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
