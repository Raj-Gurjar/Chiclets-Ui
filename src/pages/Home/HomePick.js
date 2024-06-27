import React from "react";
import ProductCard1 from "../../components/Cards/ProductCard1";
import ProductData from "../../Data/ProductsData.json";

export default function HomePick() {
  return (
    <div className="homePick-1-container mb-[80px]">
      <div className="section-heading mb-[40px]">
        <h1>PICK YOUR CHICLET</h1>
      </div>

      <div className="homePick-product-cards">
        {ProductData?.slice(0, 3)?.map((product) => (
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
