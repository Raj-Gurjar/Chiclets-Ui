import React from "react";
import home_bg from "../../assets/Backgrounds/home-bg.jpg";
import DarkBlueBtn from "../../components/UI/Buttons/DarkBlueBtn";
import { Link, useNavigate } from "react-router-dom";

export default function HomeTopSection() {
  const navigate = useNavigate();
  return (
    <div className="home-top-container">
      <div className="home-img-container">
        <img src={home_bg} alt="home-img" />
      </div>

      <div className="home-text-container">
        <h1>REFRESH YOUR RHYTHM</h1>
        <p>
          The extremely fresh tastes of Trident will put your world in a new
          perspective.
        </p>

        <div onClick={() => navigate("products")}>
          <DarkBlueBtn btn_text={"show more"} />
        </div>
      </div>
    </div>
  );
}
