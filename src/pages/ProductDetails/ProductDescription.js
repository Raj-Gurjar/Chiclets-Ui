import React from "react";

export default function ProductDescription({ data }) {
  const productTitle = data?.name;
  const productDescription = data?.description;
  const buyNow = data?.buy_link;
  const moreInfo = data?.more_info_link;

  return (
    <div className="product-description-container">
      <div>
        <h1>{productTitle}</h1>
      </div>

      <div>
        <p>{productDescription}</p>
      </div>

      <div className="description-btn-container">
        <div>
          <a href={buyNow} target="_blank">
            <h3>BUY NOW</h3>
          </a>
        </div>
        <div>
          <a href={moreInfo} target="_blank">
            <h4>More product info</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
