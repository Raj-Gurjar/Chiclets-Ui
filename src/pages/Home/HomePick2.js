import React from "react";
import ProductCard1 from "../../components/Cards/ProductCard1";
import ProductData from "../../Data/ProductsData.json";

export default function HomePick2() {
  return (
    <div className="homePick-2-container">
      <h1>PICK YOUR CHICLET</h1>

      <div className="homePick-product-cards">
        {ProductData?.slice(3, 6).map((product) => (
          <div key={product?.id}>
            <div>
              <ProductCard1 data={product} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
