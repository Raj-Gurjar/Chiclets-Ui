import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductDetailsRoute({ data }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="productDetails-routes">
        <div>
          <Link to="/" className="nav-link">
            <h3>Home</h3>
          </Link>
        </div>

        <div className="route-arrow">
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div>
          <Link to="/products" className="nav-link">
            <h3>Products</h3>
          </Link>
        </div>

        <div className="route-arrow">
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div>
          <h4>{data}</h4>
        </div>
      </div>
    </div>
  );
}
