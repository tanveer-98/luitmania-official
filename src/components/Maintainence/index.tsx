import React from "react";
import "./styles.css";
const Maintainence = () => {
  return (
    <div className="bg-bodyColorMain h-screen w-screen flex flex-col justify-center items-center">
      <div className="gears-container">
        <div className="gears">
          <img
            className="animate-spin-custom-big"
            style={{ height: "200px", width: "200px" }}
            src="gear.svg"
            alt=""
          />
          <img
            className="animate-spin-custom-anti-medium gear_3"
            style={{ height: "100px", width: "100px" }}
            src="gear.svg"
            alt=""
          />
          <img
            className="animate-spin-custom-small gear_1"
            style={{ height: "50px", width: "50px" }}
            src="gear.svg"
            alt=""
          />
        </div>
      </div>
      <h1 className="maintenance">Site Under Maintenance</h1>
      <p className="desc">
        Our developers are hard at work updating the site. Please wait while
        we do this. We have also made the spinning gears to distract you.
      </p>
    </div>
  );
};

export default Maintainence;
