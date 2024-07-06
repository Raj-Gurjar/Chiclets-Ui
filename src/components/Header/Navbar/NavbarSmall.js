import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NavbarSmall() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    AOS.init({
      duration: 2900,
      debounceDelay: 50,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="navbar-small">
      <div className={`${!toggleMenu ? "navbar-small-btn" : "hidden"}`}>
        <h1 onClick={handleMenuToggle} className="menu-btn">
          Menu
        </h1>
      </div>

      <div className={` ${toggleMenu ? "small-menu-container" : "hidden"}`}>
        <div onClick={handleMenuToggle} className="close-menu">
          <span data-aos="zoom-in">
            <RxCross2 />
          </span>
        </div>

        <div className="menu-links">
          <div className="bold-links">
            <div>
              <Link to="/" onClick={handleMenuToggle}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/products" onClick={handleMenuToggle}>
                Products
              </Link>
            </div>
            <div>
              <Link to="/" onClick={handleMenuToggle}>
                FAQ
              </Link>
            </div>
            <div>
              <Link to="/" onClick={handleMenuToggle}>
                History
              </Link>
            </div>
          </div>

          <div className="normal-links">
            <div>
              <a href="/" onClick={handleMenuToggle}>
                Legal Notice
              </a>
            </div>
            <div>
              <a href="/" onClick={handleMenuToggle}>
                Contact Us
              </a>
            </div>
            <div>
              <a href="/" onClick={handleMenuToggle}>
                Countries
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
