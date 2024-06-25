import React from "react";
import YellowBtn from "../UI/Buttons/YellowBtn";
import "./ProductCard.scss";

export default function ProductCard2({ data }) {
  return (
    <div className="product-card2-container">
      <div className="product-img-container">
        <img src={data?.product_img} alt={`${data?.name}-img`} />
      </div>

      <div className="product-card-2-text-box">
        <div className="product-title">
          <h2>{data?.name}</h2>
        </div>
        <div>
          <YellowBtn btn_text={"more info"} />
          <h3>Buy Now</h3>
        </div>
      </div>
    </div>
  );
}
