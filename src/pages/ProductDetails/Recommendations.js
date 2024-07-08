import React from "react";
import ProductCard3 from "../../components/Cards/ProductCard3";
import { Link } from "react-router-dom";
// import ProductData from "../../Data/ProductsData.json";

export default function Recommendations({ productData }) {
  return (
    <div className="recommendation-container homePick-2-container ">
      <h1>You might also like</h1>

      <div className="homePick-product-cards">
        {productData?.map((product) => (
          <div key={product?.id}>
            <div>
              <ProductCard3 data={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
