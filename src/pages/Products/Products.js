import React, { useEffect, useCallback } from "react";
import "./Products.scss";
import ProductData from "../../Data/ProductsData.json";
import ProductFilter from "./ProductFilter";
import ProductCard2 from "../../components/Cards/ProductCard2";
import Footer from "../../components/Footer/Footer";
import { useLocation, useParams } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const { productId } = useParams();

  const scrollToProduct = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (productId) {
      scrollToProduct(productId);
    } else if (location.hash) {
      scrollToProduct(location.hash.slice(1));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, productId, scrollToProduct]);

  const handleCategoryClick = (event, id) => {
    event.preventDefault();
    scrollToProduct(id);
  };

  return (
    <div className="products-container">
      <div className="product-heading">
        <h1>PRODUCTS</h1>
      </div>

      <div className="product-category-container">
        <div className="product-category-wrapper">
          {ProductData?.map((product) => (
            <div key={product.id} className="product-cat-line">
              <a
                href={`#${product.id}`}
                onClick={(event) => handleCategoryClick(event, product.id)}
              >
                <h3>{product.name}</h3>
              </a>
            </div>
          ))}
        </div>

        <div>
          <ProductFilter />
        </div>
      </div>

      <div className="products-cards-container">
        {ProductData?.map((product) => (
          <div key={product.id} id={`${product.id}`}>
            <ProductCard2 data={product} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Products;
