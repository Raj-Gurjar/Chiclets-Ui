import React from "react";
import "./ProductDetails.scss";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductDetailsRoute from "./ProductDetailsRoute";
import ProductDetailCard from "./ProductDetailCard";
import Recommendations from "./Recommendations";
import Footer from "../../components/Footer/Footer";

export default function ProductDetails() {
  const navigate = useNavigate();
 
  

  return (
    <div className="productDetails-container bg-green-300 pb-[20px]">
      <div>
        <ProductDetailsRoute />
      </div>

      <div>
        <ProductDetailCard />
      </div>

      <div>
        <Recommendations />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
