import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import star_01 from "../../../assets/Backgrounds/star01.png";

export default function NavbarBig({ flag }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar-big-container2">
      <div className="star-01">
        <img src={star_01} alt="" />
      </div>
      <div className="nav-other-links">
        <Link to="/products">
          <h3>Products</h3>
        </Link>
        <Link to="/products">
          <h3>FAQ</h3>
        </Link>
        <Link to="/products">
          <h3>History</h3>
        </Link>
      </div>

      <div className="nav-more-links">
        <h3>More</h3>
      </div>
    </div>
  );
}
