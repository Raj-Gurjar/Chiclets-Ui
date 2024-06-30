import React from "react";
import star_2 from "../../assets/Backgrounds/star01.png";

export default function CenterText() {
  return (
    <div className="center-text-container">
      <div className="star-02">
        <img src={star_2} alt="" />
      </div>
      <div className="center-circle-container">
        <h1>Refreshingly Long Lasting</h1>
        <div className="center-circle"></div>
      </div>
    </div>
  );
}
