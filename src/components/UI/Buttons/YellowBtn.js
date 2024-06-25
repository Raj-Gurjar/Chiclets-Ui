import React from "react";
import "./Button.scss";

export default function YellowBtn({ btn_text }) {
  return (
    <div className="universal-btn">
      <button className="bg-[#ffe602]">
        <h4 className="text-black">{btn_text}</h4>
      </button>
    </div>
  );
}
