import React from "react";
import logo from "../assets/chicklet logo.png";

export default function Logo() {
  return (
    <div>
      <div className="logo-container">
        <img src={logo} alt="logo-img" />
      </div>
    </div>
  );
}
