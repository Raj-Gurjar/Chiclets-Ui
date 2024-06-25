import React from "react";
import DarkBlueBtn from "../../components/UI/Buttons/DarkBlueBtn";
import { GiSettingsKnobs } from "react-icons/gi";

export default function ProductFilter() {
  return (
    <div>
      <div className="product-filter-btn">
        <div>
          <h4>SHOW ALL FILTERS</h4>
        </div>
        <div className="product-filter-icon">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              class="styles_buttonIcon__1Kfc6"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M16.5 2.45a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2Zm0-1.95c1.654 0 3 1.312 3 2.925 0 1.27-.838 2.341-2 2.745V19a1 1 0 1 1-2 0V6.17c-1.162-.404-2-1.476-2-2.745C13.5 1.812 14.846.5 16.5.5ZM10 9a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2Zm0-8.5a1 1 0 0 0-1 1v5.68c-1.162.404-2 1.476-2 2.745 0 1.27.838 2.341 2 2.745V19a1 1 0 1 0 2 0v-6.33c1.162-.404 2-1.476 2-2.745 0-1.27-.838-2.341-2-2.745V1.5a1 1 0 0 0-1-1ZM3.5 16a1.001 1.001 0 0 1 0 2 1.001 1.001 0 0 1 0-2Zm1-1.67V1.5a1 1 0 0 0-2 0v12.83c-1.162.404-2 1.476-2 2.745C.5 18.688 1.846 20 3.5 20s3-1.312 3-2.925c0-1.27-.838-2.341-2-2.745Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
