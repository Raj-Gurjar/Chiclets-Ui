import React, { useState } from "react";
import home_bg from "../../assets/Backgrounds/home-bg.jpg";
import DarkBlueBtn from "../../components/UI/Buttons/DarkBlueBtn";
import { Link, useNavigate } from "react-router-dom";
import VideoButton from "../../components/UI/Buttons/VideoButton";
import VideoModal from "../../components/Modal/VideoModal";

export default function HomeTopSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = (event) => {
    event.preventDefault();
    setModalIsOpen(!modalIsOpen);
  };

  const navigate = useNavigate();

  return (
    <div className="home-top-container">
      <div className="home-img-container">
        <div>
          <img src={home_bg} alt="home-img" />
        </div>
        <div className="video-btn-container-1">
          <Link to="#" onClick={toggleModal}>
            <VideoButton />
          </Link>
        </div>
      </div>

      <div className="home-text-container">
        <h1>REFRESH YOUR RHYTHM</h1>
        <p>
          The extremely fresh tastes of Trident will put your world in a new
          perspective.
        </p>

        <div onClick={() => navigate("products")}>
          <DarkBlueBtn btn_text={"show more"} />
        </div>
      </div>

      <VideoModal
        isOpen={modalIsOpen}
        closeModal={toggleModal}
        videoId="YOUR_VIDEO_ID" // Replace with the actual video ID
      />
    </div>
  );
}
