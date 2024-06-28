import React from "react";
import NavbarBig from "./NavbarBig";
import NavbarSmall from "./NavbarSmall";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-big">
        <NavbarBig />
      </div>

      <div className="navbar-small">
        <NavbarSmall />
      </div>
    </div>
  );
}
