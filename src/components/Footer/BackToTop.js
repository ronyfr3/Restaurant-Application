import React from "react";
import { Link } from "react-scroll";
import { RiArrowUpCircleFill } from "react-icons/ri";

const BackToTopBtn = () => {
  return (
    <div className="gotop">
      <Link
        activeClass="active"
        to="goToTop"
        spy={true}
        smooth={true}
        hashSpy={true}
        duration={300}
        isDynamic={true}
      >
        <RiArrowUpCircleFill className="goToTop" />
      </Link>
    </div>
  );
};
export default BackToTopBtn;
