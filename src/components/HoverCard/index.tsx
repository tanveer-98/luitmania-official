import React from "react";
import './styles.css'
interface IHoverCard{
  title : string ; 
  content : string ; 
  url :string; 
  imageUrl : string ; 
}
const HoverCard = ({title,imageUrl,content, url} : IHoverCard) => {
  return (
    <div className="hovercard_container">
      <div className="hovercard_card">
        <div className="hovercard_image">
          <img
          className="hovercard_image_img"
            src={imageUrl}
            alt="hovercard_image1"
          />
        </div>
        <p className="card_para mt-4">View More</p>
        <div className="hovercard_content">
          <h3>{title}</h3>
          <p>
            {content}
           </p>
          
          <div className="a_container">
            <a href={url}>
            Visit Site
            </a>
          </div>

        </div>
      </div>
  </div>
  );
};

export default HoverCard;
