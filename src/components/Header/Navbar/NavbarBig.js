import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function NavbarBig({ flag }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="navbar-big-container">
      <div className="nav-product-btn">
        <Link to="/products">
          <span>Products</span>
        </Link>

        <span1>
          <FaArrowRight />
        </span1>
      </div>
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
