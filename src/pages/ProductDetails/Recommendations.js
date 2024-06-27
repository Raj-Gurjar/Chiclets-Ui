import React from "react";
import ProductCard from "../../components/Cards/ProductCard1";
import ProductData from "../../Data/ProductsData.json";

export default function Recommendations() {
  return (
    <div className="recommendations-container">
      <div className="">
        <h1>You might also like</h1>
      </div>

      <div className="recommend-cards-container">
        {ProductData?.slice(0,3).map((product) => (
          <div key={product?.id} className="">
            <ProductCard data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
