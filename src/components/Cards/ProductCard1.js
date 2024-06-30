import React from "react";
import YellowBtn from "../UI/Buttons/YellowBtn";
import "./ProductCard.scss";

export default function ProductCard({ data, btn_name = "view Product" }) {
  return (
    <div className="product-card-container">
      <div className="product-img-container">
        <img src={data?.product_img} alt={`${data?.name}-img`} />
      </div>

      <div className="product-title">
        <h2>{data?.name}</h2>
      </div>
      <div>
        <YellowBtn btn_text={btn_name} />
      </div>
    </div>
  );
}
