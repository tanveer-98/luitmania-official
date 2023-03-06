import React from "react";
import "./styles.css";
const Wave = ({ children }: any) => {
  return (
    <div>
      <svg
        className="footer-waves-2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="#3c3c3c"
            className="opacity-60"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="#3c3c3c"
            className="opacity-70"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="#3c3c3c"
            className="opacity-80"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="#3c3c3c"
            className="opacity-90"
          />
        </g>
      </svg>
      {children}
    </div>
  );
};

export default Wave;
