import React from "react";
import "./Button.scss";

export default function YellowBtn({ btn_text }) {
  return (
    <div className="universal-btn">
      <button className="yellow-btn">
        <h4 className="">{btn_text}</h4>
      </button>
    </div>
  );
}
