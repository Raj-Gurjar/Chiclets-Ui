import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import "./VideoModal.scss";

export default function VideoModal({ isOpen, closeModal, videoId }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="video-modal">
      <div className="modal-content">
        <button onClick={closeModal} className="close-btn">
          <IoMdClose />
        </button>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IZW7iBscvvY?si=nyuE4S6f1zsbUGVq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
