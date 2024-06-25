import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FiYoutube } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";

export default function HomeFollow() {
  return (
    <div className="home-follow-container">
      <h1>FOLLOW US FOR...</h1>
      <p>Fresh ideas to put your world in perspective</p>

      <div className="home-social-container">
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
    </div>
  );
}
