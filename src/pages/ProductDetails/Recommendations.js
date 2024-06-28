import React from "react";
import ProductCard1 from "../../components/Cards/ProductCard1";
import { Link } from "react-router-dom";
// import ProductData from "../../Data/ProductsData.json";

export default function Recommendations({ productData }) {
  return (
    <div className="recommendations-container">
      <div className="">
        <h1>You might also like</h1>
      </div>

      <div className="recommend-cards-container">
        {productData?.map((product) => (
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
}
