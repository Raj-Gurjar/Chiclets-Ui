import React from "react";
import ProductCard1 from "../Cards/ProductCard1";
import ProductData from "../../Data/ProductsData.json";
import Slider from "react-slick";
import "../../pages/Home/Home.scss";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePickSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows:false,
    speed: 4000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      {/* <div className="homePick-product-cards"> */}
      <Slider {...settings}>
        {ProductData?.map((product) => (
          <div key={product?.id}>
            <div>
              <ProductCard1 data={product} />
            </div>
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </div>
  );
}
