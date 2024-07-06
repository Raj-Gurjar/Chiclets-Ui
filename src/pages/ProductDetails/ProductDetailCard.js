import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductDescription from "./ProductDescription";
// import "./ProductDetailCard.scss"; // Ensure this is the correct path to your CSS/SCSS file

export default function ProductDetailCard({ productData }) {
  const [animate, setAnimate] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);



  return (
    <div className="productDetails-container-inner ">
      
      <div className="productDetails-img-col">
        <img
          key={location.pathname} 
          src={productData?.product_img}
          alt="product-img"
          className={animate ? "animate-img" : ""}
        />
      </div>

      <div className="product-data-col">
        <div>
          <ProductDescription data={productData} />
        </div>
      </div>
    </div>
  );
}
