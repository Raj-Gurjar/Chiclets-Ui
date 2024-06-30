import React from "react";
import Navbar from "./Navbar/Navbar";
import Logo from "./Logo";
import "./Header.scss";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div>
          <Logo />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}
