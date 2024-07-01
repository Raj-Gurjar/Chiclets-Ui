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
import Header from "../../components/Header/Header";
import star_img from "../../assets/Backgrounds/star01.png";

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
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      navigateToProduct(productData[newIndex].id);
    }
  };

  const handleForwardArrowClick = () => {
    if (currentIndex < productData.length - 1) {
      const newIndex = currentIndex + 1;
      navigateToProduct(productData[newIndex].id);
    }
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
    <div className={`productDetails-container1`} style={containerStyle}>
      <div className="star-fixed">
        <img src={star_img} alt="" />
      </div>
      <div className="productDetails-container">
        <div>
          <Header />
        </div>
        <div className=" mt-[-2%]">
          <ProductDetailsRoute data={currentProduct?.name} />
          <div className="productDetailCard-outer">
            <ProductDetailCard productData={currentProduct} />

            <div className="productDetail-arrows">
              <div
                className={`bars back-bar ${
                  currentIndex === 0 ? "disabled" : ""
                }`}
                onClick={handleBackArrowClick}
                style={{
                  pointerEvents: currentIndex === 0 ? "none" : "auto",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height=""
                  fill="none"
                  viewBox="0 0 24 490"
                  className="svg-bar-1"
                >
                  <path
                    fill="#fff"
                    d="M23.5 486a4 4 0 0 1-4 4C1.827 490 1 475.673 1 458V296.512a31.999 31.999 0 0 1 4.703-16.699l11.08-18.114a31.998 31.998 0 0 0 0-33.398l-11.08-18.114A31.999 31.999 0 0 1 1 193.488V32C1 14.327-.673 0 17 0c2.21 0 6.5 1.79 6.5 4v482Z"
                  ></path>
                </svg>
                <div
                  className={`productDetail-back-arrow ${
                    currentIndex === 0 ? "disabled" : ""
                  }`}
                  onClick={handleBackArrowClick}
                  style={{
                    pointerEvents: currentIndex === 0 ? "none" : "auto",
                  }}
                >
                  <IoIosArrowBack />
                </div>
              </div>

              <div
                className={`bars front-bar ${
                  currentIndex === productData.length - 1 ? "disabled" : ""
                }`}
                onClick={handleForwardArrowClick}
                style={{
                  pointerEvents:
                    currentIndex === productData.length - 1 ? "none" : "auto",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width=""
                  height=""
                  fill="none"
                  viewBox="0 0 24 490"
                  class="svg-bar-2"
                >
                  <path
                    fill="#fff"
                    d="M23.5 486a4 4 0 0 1-4 4C1.827 490 1 475.673 1 458V296.512a31.999 31.999 0 0 1 4.703-16.699l11.08-18.114a31.998 31.998 0 0 0 0-33.398l-11.08-18.114A31.999 31.999 0 0 1 1 193.488V32C1 14.327-.673 0 17 0c2.21 0 6.5 1.79 6.5 4v482Z"
                  ></path>
                </svg>
                <div
                  className={`productDetail-forward-arrow ${
                    currentIndex === productData.length - 1 ? "disabled" : ""
                  }`}
                  onClick={handleForwardArrowClick}
                  style={{
                    pointerEvents:
                      currentIndex === productData.length - 1 ? "none" : "auto",
                  }}
                >
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Recommendations productData={recommendations} />
        </div>
      </div>
      <div className="footer-margin">
        <Footer pt="150px" />
      </div>
    </div>
  );
}
