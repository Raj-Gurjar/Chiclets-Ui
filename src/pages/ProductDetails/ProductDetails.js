import React, { useState, useEffect } from "react";
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

export default function ProductDetails({ setbg }) {
  const location = useLocation();
  const navigate = useNavigate();

  const initialProductId = location.state?.product?.id || 1;
  const [currentProductId, setCurrentProductId] = useState(initialProductId);

  useEffect(() => {
    const product = productData.find(
      (product) => product.id === currentProductId
    );
    setbg(product?.colorBg || "transparent");
  }, [currentProductId, setbg]);

  useEffect(() => {
    const product = productData.find(
      (product) => product.id === initialProductId
    );
    setCurrentProductId(product.id);
  }, [initialProductId]);

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
      setbg(productData[newIndex].colorBg || "transparent");
      navigateToProduct(productData[newIndex].id);
    }
  };

  const handleForwardArrowClick = () => {
    if (currentIndex < productData.length - 1) {
      const newIndex = currentIndex + 1;
      setbg(productData[newIndex].colorBg || "transparent");
      navigateToProduct(productData[newIndex].id);
    }
  };

  const currentProduct = productData.find(
    (product) => product.id === currentProductId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProductId]);

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
        <div className=" mt-[-3%]">
          <ProductDetailsRoute data={currentProduct?.name} />
          <div className="productDetailCard-outer">
            <ProductDetailCard productData={currentProduct} />

            <div className="productDetail-arrows">
              <div
                className={`bars back-bar cursor-pointer ${
                  currentIndex === 0 ? "disabled" : ""
                }`}
                onClick={handleBackArrowClick}
                style={{
                  pointerEvents: currentIndex === 0 ? "none" : "auto",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 491"
                  className="svg-bar-1"
                >
                  <path
                    d="M 36 486 a 4 4 0 0 1 -4 4 c -14.327 0 -32 -14.327 -32 -32 V 296.512 a 31.999 31.999 0 0 1 4.703 -16.699 l 11.08 -18.114 a 31.998 31.998 0 0 0 0 -33.398 l -11.08 -18.114 A 31.999 31.999 0 0 1 0 193.488 V 32 C 0 14.327 14.327 0 32 0 m 0 0 L 40 0 v 491.02 L 32.032 490.51 Z"
                    fill="#fff"
                  />
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
                className={`bars front-bar cursor-pointer ${
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
                  viewBox="0 0 40 491"
                  className="svg-bar-2"
                >
                  <path
                    d="M 36 486 a 4 4 0 0 1 -4 4 c -14.327 0 -32 -14.327 -32 -32 V 296.512 a 31.999 31.999 0 0 1 4.703 -16.699 l 11.08 -18.114 a 31.998 31.998 0 0 0 0 -33.398 l -11.08 -18.114 A 31.999 31.999 0 0 1 0 193.488 V 32 C 0 14.327 14.327 0 32 0 m 0 0 L 40 0 v 491.02 L 32.032 490.51 Z"
                    fill="#fff"
                  />
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
