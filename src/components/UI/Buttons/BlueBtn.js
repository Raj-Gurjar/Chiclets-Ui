import React from "react";
import "./Button.scss";

export default function BlueBtn({ btn_text }) {
  return (
    <div className="universal-btn">
      <button className=" bg-[#0247ad] hover:bg-[#07285d]">
        <h4 className="text-white">{btn_text}</h4>
      </button>
    </div>
  );
}
