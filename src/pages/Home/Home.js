import React from "react";
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

export default function Home() {
  return (
    <div className="home-main1 pb-[30px]">
      <div className="home-main">
        <div>
          <Navbar />
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
      <div className="px-[20px]">
        <Footer pt={"150px"} />
      </div>
    </div>
  );
}
