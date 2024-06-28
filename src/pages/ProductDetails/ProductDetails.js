import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.scss";
import ProductDetailsRoute from "./ProductDetailsRoute";
import ProductDetailCard from "./ProductDetailCard";
import Recommendations from "./Recommendations";
import Footer from "../../components/Footer/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Replace this with your actual product data
import productData from "../../Data/ProductsData.json";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialProductId = location.state?.product?.id || 1; 
  const [currentProductId, setCurrentProductId] = useState(initialProductId);

  //!------ Carousel Logic
  const currentIndex = productData.findIndex(
    (product) => product.id === currentProductId
  );

  const navigateToProduct = (productId) => {
    setCurrentProductId(productId);
    navigate(`/product-details/${productId}`, {
      state: {
        product: productData.find((product) => product.id === productId),
      },
    });
  };

  const handleBackArrowClick = () => {
    const newIndex =
      (currentIndex - 1 + productData.length) % productData.length;
    navigateToProduct(productData[newIndex].id);
  };

  const handleForwardArrowClick = () => {
    const newIndex = (currentIndex + 1) % productData.length;
    navigateToProduct(productData[newIndex].id);
  };

  const currentProduct = productData.find(
    (product) => product.id === currentProductId
  );

  //!-------- Recommendations Logic
  const getRecommendations = (excludeProductId) => {
    const filteredProducts = productData.filter(
      (product) => product.id !== excludeProductId
    );

    const shuffled = filteredProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const recommendations = getRecommendations(currentProductId);

  //!------- BackGround Color Change
  const containerStyle = {
    backgroundColor: currentProduct?.colorBg || "transparent",
  };

  return (
    <div className={`productDetails-container`} style={containerStyle}>
      <div>
        <ProductDetailsRoute data={currentProduct?.name} />
      </div>

      <div className="productDetailCard-outer">
        <ProductDetailCard productData={currentProduct} />

        <div className="productDetail-arrows">
          <div
            className="productDetail-back-arrow"
            onClick={handleBackArrowClick}
          >
            <IoIosArrowBack />
          </div>

          <div
            className="productDetail-forward-arrow"
            onClick={handleForwardArrowClick}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>

      <div>
        <Recommendations productData={recommendations} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
