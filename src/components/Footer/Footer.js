import React from "react";
import "./Footer.scss";
import "../../pages/Home/Home.scss";
import FooterData from "../../Data/FooterData.json";
import ProductData from "../../Data/ProductsData.json";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer({ pt = "50px" }) {
  const newProductsData = FooterData?.NewProducts;
  const mainPagesData = FooterData?.MainPage;
  const productNames = ProductData;
  const OtherLinks = FooterData?.OtherLinks;

  return (
    <div className={`footer-container `} style={{ paddingTop: pt }}>
      {/* <div className="max-w-[1280px] "> */}
      <div className="footer-col-container">
        <div className="footer-col">
          <h2>NEWEST PRODUCTS</h2>

          <div>
            {productNames?.slice(0, 3)?.map((product) => (
              <div className="footer-link">
                <div className="footer-icon">
                  <FaArrowRight />
                </div>

                <div className="footer-link-text">
                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3>{product?.name}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h2>MAIN PAGES</h2>

          <div>
            {mainPagesData?.map((page) => (
              <div className="footer-link">
                <div className="footer-icon">
                  <FaArrowRight />
                </div>

                <div className="footer-link-text">
                  <Link to={page?.link} style={{ textDecoration: "none" }}>
                    <h3>{page?.name}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h2>PRODUCT CATEGORIES</h2>

          <div>
            {productNames?.map((product) => (
              <div className="footer-link">
                <div className="footer-icon">
                  <FaArrowRight />
                </div>

                <div className="footer-link-text">
                  <Link
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <h3>{product?.name}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-social-container">
        <a href="https://www.instagram.com/your-instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/your-facebook">
          <LuFacebook />
        </a>
        <a href="https://twitter.com/your-twitter">
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin">
          <SlSocialLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin">
          <FiYoutube />
        </a>
      </div>

      <div className="other-links-container-outer">
        <div className="other-links-container">
          {OtherLinks?.map((data) => (
            <div key={data?.id} className="other-links-wrapper">
              <a href={data?.link}>{data?.name}</a>
            </div>
          ))}
        </div>

        <div className="copyright-container">
          <h4>© Perfetti Van Melle Benelux, B.V. 2024</h4>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
