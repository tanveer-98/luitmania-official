import React from "react";
import './styles.css'

interface ITestimonialCard {
  profileImg: string;
  client_name: string;
  designation: string;
  content: string;
}

const TestimonialCard = ({
  client_name,
  profileImg,
  designation,
  content,
}: ITestimonialCard) => {
  return (
    <div className="testimonial  backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="client-container">
        <div className="image-container flex justify-center items center">
          <img src={profileImg} alt="testimonial profile image" />
        </div>
        <div className="name w-full text-center mt-12 "> {client_name} </div>
        <div className="designation w-full text-center">{designation}</div>
      </div>
      <div className="rating flex flex-row justify-center items-center">
        {[1,2,3,4,5].map(()=><img className="star" src="star.svg" alt="star rating" />)}
        
       
      </div>
      <div className="content">
        
        <img src="quotestart.svg" className="quote-start" alt="quote_start" />
        {content}
        <img src="quoteend.svg" className="quote-end" alt="quote_start" />
      </div>
    </div>
  );
};

export default TestimonialCard;
