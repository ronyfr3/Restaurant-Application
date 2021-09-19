import React, { useEffect, useState } from "react";
import { Images } from "./CarouselData";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const changevalue = (val) => {
    if (val > Images.length - 1) {
      return 0;
    }
    if (val < 0) {
      return Images.length - 1;
    }
    return val;
  };
  const leftMove = () => {
    setCurrImg(() => {
      return changevalue(currImg - 1);
    });
  };
  const rightMove = () => {
    setCurrImg(() => {
      return changevalue(currImg + 1);
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      rightMove();
    }, 5000);
    return () => clearInterval(timer);
  });
  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{
          backgroundImage: `url(${Images[currImg].img})`,
        }}
      >
        <div className="left" onClick={leftMove}>
          <MdKeyboardArrowLeft style={{ fontSize: 45 }} />
        </div>
        <div className="center">
          <h1>{Images[currImg].title}</h1>
          <p>{Images[currImg].subtitle}</p>
          <button>{Images[currImg].btnText}</button>
        </div>
        <div className="right" onClick={rightMove}>
          <MdKeyboardArrowRight style={{ fontSize: 45 }} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
