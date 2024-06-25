import React from "react";
import "./Products.scss";
import ProductData from "../../Data/ProductsData.json";
import ProductFilter from "./ProductFilter";
import ProductCard2 from "../../components/Cards/ProductCard2";
import Footer from "../../components/Footer/Footer";

export default function Products() {
  return (
    <div className="products-container">
      

      <div className="product-heading">
        <h1>PRODUCTS</h1>
      </div>

      <div className="product-category-container">
        <div className="product-category-wrapper">
          {ProductData?.map((product) => (
            <div>
              <h3>{product?.category}</h3>
            </div>
          ))}
        </div>

        <div>
          <ProductFilter />
        </div>
      </div>

      <div className="products-cards-container">
        {ProductData?.map((product) => (
          <div>
            <ProductCard2 data={product} />
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
}
