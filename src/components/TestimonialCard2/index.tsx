import React from "react";
import "./styles.css";

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
    <figure className="snip1336">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg"
        alt="sample87"
      />
      <figcaption>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg"
          alt="profile-sample4"
          className="profile"
        />
        <h2>
          Hans Down<span>Engineer</span>
        </h2>
        <p>
          I'm looking for something that can deliver a 50-pound payload of snow
          on a small feminine target. Can you suggest something? Hello...?
        </p>
        <a href="#" className="follow">
          Follow
        </a>
        <a href="#" className="info">
          More Info
        </a>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;