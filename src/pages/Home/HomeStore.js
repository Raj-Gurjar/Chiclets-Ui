import React from "react";
import Distance from "../../Data/Distance.json";
import ProductsData from "../../Data/ProductsData.json";
import BlueBtn from "../../components/UI/Buttons/BlueBtn";
import { IoIosArrowDown } from "react-icons/io";

export default function HomeStore() {
  return (
    <div className="home-store-container">
      <h1 className="home-store-heading">FIND FRESHNESS NEAR YOU</h1>
      <div className="home-store-form-container">
        <form action="">
          <div>
            <label htmlFor="zipcode">
              Zipcode <span>*</span>
            </label>
            <input
              type="number"
              placeholder="Your zipcode"
              required
              id="zipcode"
            />
          </div>

          <div>
            <label htmlFor="distance">
              Distance <span>*</span>
            </label>

            <div className="select-box-container">
              <select className="select-box">
                <option>Distance</option>
                {Distance.map((dis) => {
                  return <option key={dis?.id}>{dis?.length}</option>;
                })}
              </select>

              <span className="select-box-arrow">
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="product">
              Product <span>*</span>
            </label>

            <div className="select-box-container">
              <select className="select-box">
                <option className="opt">Pick a Product</option>
                {ProductsData.map((product) => {
                  return <option key={product?.id}>{product?.name}</option>;
                })}
              </select>
              <span className="select-box-arrow">
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div className="mt-[30px]">
            <BlueBtn btn_text={"Show Stores"} />
          </div>
        </form>
      </div>
    </div>
  );
}
