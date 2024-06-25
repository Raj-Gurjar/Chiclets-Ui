import React from "react";
import triangle_img from "../../../assets/Backgrounds/home-header-bg.svg";

export default function Triangle() {
  return (
    <div>
      <div className="absolute top-5 z-[1] left-[250px] right-[-400px] overflow-hidden">
        <img src={triangle_img} alt="triangle-bg" className="" />
      </div>
    </div>
  );
}
