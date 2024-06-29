import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

export default function NavbarSmall() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  console.log("cc", toggleMenu);

  return (
    <div className="navbar-small">
      <div className={`${!toggleMenu ? "navbar-small-btn" : "hidden"}`}>
        <h1
          onClick={() => handleMenuToggle()}
          className="text-white text-2xl cursor-pointer"
        >
          Menu
        </h1>
      </div>

      <div className={` ${toggleMenu ? "small-menu-container" : "hidden"}`}>
        <div onClick={() => handleMenuToggle()} className="close-menu">
          <span>
            <RxCross2 />
          </span>
        </div>

        <div className="menu-links">
          <div className="bold-links">
            <div>
              <Link to="/products">Products</Link>
            </div>
            <div>
              <Link to="/">FAQ</Link>
            </div>
            <div>
              <Link to="/">History</Link>
            </div>
          </div>

          <div className="normal-links">
            <div>
              <a href="/">Legal Notice</a>
            </div>
            <div>
              <a href="/">Contact Us</a>
            </div>
            <div>
              <a href="/">Countries</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
