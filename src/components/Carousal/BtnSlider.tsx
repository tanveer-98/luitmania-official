import React from "react";

const BtnSlider = ({ moveSlide, direction }: any) => {
  return (
    <button
    //   className="btn-slide "
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? "right-arrow.svg" : "left-arrow.svg"}
        style={{ height: "80px", width: "80px" }}
        alt=""
      />
      {/* <img
        src="right-arrow.svg"
        style={{ height: "80px", width: "80px" }}
        alt=""
      /> */}
    </button>
  );
};

export default BtnSlider;
