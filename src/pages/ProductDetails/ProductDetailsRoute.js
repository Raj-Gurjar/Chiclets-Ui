import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductDetailsRoute() {
  const navigate = useNavigate();
  const param = "dgg";

  return (
    <div>
      <div className="productDetails-routes">
        
        <div>
          <Link to="/" className="nav-link">
            <h3>Home</h3>
          </Link>
        </div>

        <div>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div>
          <Link to="/products" className="nav-link">
            <h3>Products</h3>
          </Link>
        </div>

        <div>
          <span>
            <IoIosArrowForward />
          </span>
        </div>

        <div>
          <h4>{param}</h4>
        </div>
      </div>
    </div>
  );
}
