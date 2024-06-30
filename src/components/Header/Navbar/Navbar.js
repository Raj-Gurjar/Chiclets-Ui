import React from "react";
import { useLocation } from "react-router-dom";
import NavbarBig from "./NavbarBig";
import NavbarBig2 from "./NavbarBig2";
import NavbarSmall from "./NavbarSmall";
import "./Navbar.scss";


export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="navbar">
   
      <div className="navbar-big">
        {isHomePage ? <NavbarBig /> : <NavbarBig2 />}
      </div>
      <div className="navbar-small">
        <NavbarSmall />
      </div>
    </div>
  );
}
