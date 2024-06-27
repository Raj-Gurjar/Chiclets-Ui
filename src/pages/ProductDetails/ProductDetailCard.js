import React from "react";
import ProductDescription from "./ProductDescription";
import ProductData from "../../Data/ProductsData.json";

export default function ProductDetailCard() {
  const Product1 = ProductData[0];
  return (
    <div className="">
      <div className="productDetails-container-inner">
        <div className="productDetails-img-col">
          <img src={Product1?.product_img} alt="product-img" className="" />
        </div>

        <div className="product-data-col">
          <div>
            <ProductDescription data={Product1} />
          </div>
          {/* <div>
            <NutritionValues data={Product1?.nutrition} />
          </div>
          <div>
            <Ingredients data={Product1?.ingredients} />
          </div>
          <div>
            <OrderNow data={Product1?.buy_link} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
