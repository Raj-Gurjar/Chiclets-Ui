import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";
import star_01 from "../../../assets/Backgrounds/star01.png"

export default function NavbarBig({ flag }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar-big-container">
      <div className="star-01">
        <img src={star_01} alt="" />
      </div>
      <Link to="/products">
        <div className="nav-product-btn">
          <span>Products</span>

          <span1>
            <FaArrowRight />
          </span1>
        </div>
      </Link>
      <div className="nav-other-links">
        <h3>FAQ</h3>
        <h3>History</h3>
      </div>

      <div className="nav-more-links">
        <h3>More</h3>
      </div>
    </div>
  );
}
