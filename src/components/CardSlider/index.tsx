import React from 'react'
import './index.css';
import './swiper.css';

const Slider = () => {
  return (
    <div className="card_slider">
     
     <div className="slide-containerr">
      <div className="slide-content">
        <div className="card-wrapper">
          <div className="card swiper-slide">
            <div className="image-content">
            <span className="overlay"></span>
            <div className="card-image">
              <img src="image1.jpg" alt="" className='card-img' />
            </div>
            </div>
            <div className="card-content">
              <h2 className="name"></h2>
              <p className="description"> Lorem ipsum lorem </p>
              <button className="button">View More</button>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Slider