import React from "react";
import logo from "../../assets/chiclets.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="logo-img" />
        </div>
      </Link>
    </div>
  );
}
