import React from "react";
import "./Button.scss";

export default function DarkBlueBtn({ btn_text }) {
  return (
    <div className="universal-btn">
      <button className="bg-[#022e70] hover:bg-[#041737]">
        <h4>{btn_text}</h4>
      </button>
    </div>
  );
}
