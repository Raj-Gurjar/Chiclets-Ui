import React from "react";
import "./ProductDetails.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductDetailsRoute from "./ProductDetailsRoute";

export default function ProductDetails() {
  const navigate = useNavigate();
  return (
    <div className="productDetails-container">
      <ProductDetailsRoute />
    </div>
  );
}
