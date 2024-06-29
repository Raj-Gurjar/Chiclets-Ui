import React from "react";
import { TiTick } from "react-icons/ti";
import DarkBlueBtn from "../../components/UI/Buttons/DarkBlueBtn";
import img from "../../assets/strawberry.png";
import { Link } from "react-router-dom";
import VideoButton from "../../components/UI/Buttons/VideoButton";

export default function HomeFeature() {
  return (
    <div className="homeFeatures-container">
      <div className="homeFeatures-img">
        <img src={img} alt="img" />
        <div className="play-btn-container">
          <Link to="">
            <VideoButton />
          </Link>
        </div>
      </div>

      <div className="homeFeatures-texts">
        <h1>CHICLETS CHEWING GUMS</h1>

        <div className="tick-options-container">
          <div className="tick-point">
            <div className="tick-icon">
              <TiTick />
            </div>
            <div>
              <h4>VARIETY OF GUMS </h4>
            </div>
          </div>

          <div className="tick-point">
            <div className="tick-icon">
              <TiTick />
            </div>
            <div>
              <h4>VARIETY OF TASTES </h4>
            </div>
          </div>

          <div className="tick-point">
            <div className="tick-icon">
              <TiTick />
            </div>
            <div>
              <h4>VARIETY OF FLAVOURS</h4>
            </div>
          </div>
        </div>

        <div>
          <p>
            The extremely fresh tastes of Chiclets will put your world in a new
            perspective.
          </p>
        </div>

        <div className="text-white">
          <DarkBlueBtn btn_text={"Buy Now"} />
        </div>
      </div>
    </div>
  );
}
