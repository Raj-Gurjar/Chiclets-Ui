import React from "react";
import triangle_img from "../../assets/Backgrounds/home-header-bg.svg";
import star1 from "../../assets/Backgrounds/star01.png";
import star2 from "../../assets/Backgrounds/star02.png";

export default function RandomFigures() {
  return (
    <div>
      <div className="triangle">
        <img src={triangle_img} alt="triangle-bg" className="" />
      </div>

      <div className="star-1">
        <img src={star1} alt="triangle-bg" className="" />
      </div>

      <div className="star-2">
        <img src={star2} alt="triangle-bg" className="" />
      </div>
    </div>
  );
}
