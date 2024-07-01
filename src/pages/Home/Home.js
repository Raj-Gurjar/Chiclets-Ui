import React, { useEffect } from "react";
import "./Home.scss";
import HomeTopSection from "./HomeTopSection";
import HomePick from "./HomePick";
import HomePick2 from "./HomePick2";
import HomeStore from "./HomeStore";
import HomeFollow from "./HomeFollow";
import Footer from "../../components/Footer/Footer";

// import Triangle from "./RandomFigures/Triangle";
import RandomFigures from "../../components/RandomFigures/RandomFigures";
import CenterText from "./CenterText";
import HomeFeature from "./HomeFeature";
import Navbar from "../../components/Header/Navbar/Navbar";
import star_img from "../../assets/Backgrounds/star01.png";

export default function Home({ setbg }) {

  useEffect(() => {
    setbg("#0358d6")
  },[])

  return (
    <div className="home-main1 pb-[30px]">
      <div className="home-main">
        <div className="header2">
          <Navbar />
        </div>

        <div className="star-fixed">
          <img src={star_img} alt="" />
        </div>
        <div>
          <HomeTopSection />
        </div>

        <div>{/* <RandomFigures /> */}</div>

        <div>
          <HomePick />
        </div>
        <div>
          <HomeStore />
        </div>

        <div>
          <CenterText />
        </div>
        <div>
          <HomeFeature />
        </div>
        <div>
          <HomeFollow />
        </div>
        <div>
          <HomePick2 />
        </div>
      </div>
      <div className="footer-margin">
        <Footer pt={"150px"} />
      </div>
    </div>
  );
}
