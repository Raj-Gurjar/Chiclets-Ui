import React from "react";
import ProductCard3 from "../../components/Cards/ProductCard3";
import ProductData from "../../Data/ProductsData.json";
import { Link } from "react-router-dom";

export default function HomePick2() {
  return (
    <div className="homePick-2-container">
      <h1>PICK YOUR CHICLET</h1>

      <div className="homePick-product-cards">
        {ProductData?.slice(3, 6)?.map((product) => (
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
