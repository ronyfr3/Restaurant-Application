import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// type: "Watch" | "Audio" | "BallTriangle" | "Bars" | "Circles" | "Grid" | "Hearts" | "Oval" | "Puff" | "Rings" |
//  "TailSpin" | "ThreeDots" | "RevolvingDot" | "Triangle" | "Plane" | "MutatingDots" | "CradleLoader"

const Loading = () => {
  return (
    <div className="loader_wraper">
      <div className="loader_info">
        <img src="webLogo.png" alt="Himalayan" />
        <Loader type="ThreeDots" color="#808080" height={65} width={65} />
      </div>
    </div>
  );
};

export default Loading;
