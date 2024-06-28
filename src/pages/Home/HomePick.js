import React from "react";
import ProductCard1 from "../../components/Cards/ProductCard1";
import ProductData from "../../Data/ProductsData.json";
import { Link } from "react-router-dom";

const HomePick = () => (
  <div className="homePick-1-container mb-[80px]">
    <div className="section-heading mb-[40px]">
      <h1>PICK YOUR CHICLET</h1>
    </div>

    <div className="homePick-product-cards">
      {ProductData?.slice(0, 3)?.map((product) => (
        <div key={product?.id}>
          <Link to={`/products/${product.id}`}>
            <div>
              <ProductCard1 data={product} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default HomePick;
