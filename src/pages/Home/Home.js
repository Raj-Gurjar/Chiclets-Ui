import React from "react";
import "./Home.scss";
import HomeTopSection from "./HomeTopSection";
import HomePick from "./HomePick";
import HomePick2 from "./HomePick2";
import HomeStore from "./HomeStore";
import HomeFollow from "./HomeFollow";
import Footer from "../../components/Footer/Footer";

import Logo from "../../components/Logo";
// import Triangle from "./RandomFigures/Triangle";
import RandomFigures from "../../components/RandomFigures/RandomFigures";
import Navbar from "../../components/Navbar/NavbarBig";
import CenterText from "./CenterText";
import HomeFeature from "./HomeFeature";

export default function Home() {
  return (
    <div className="home-main max-w-[1280px]">
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
      <div>
        <Footer />
      </div>
    </div>
  );
}
