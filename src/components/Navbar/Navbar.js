import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div className="nav-product-btn">
        <Link to="/products" style={{ textDecoration: "none" }}>
          <span>PRODUCTS</span>
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
