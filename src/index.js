import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);


reportWebVitals();


// {
//     id: "01",
//     productName: "Chiclet Mix Fruits ",
//     imgUrl: mix_fruit,
//     category: "ticklets",
//     price: 193,
//     color: "yellow",
//     shortDesc:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!",
//     description:
//       "Chiclets Mix Fruit Flavour bursts your palate with a variety of tastes that leave you feeling invigorated. You get a burst of the juicy chiclets blended fruit. You feel confident and invigorated when on the go with it because of its pocket-friendly size.",
//     reviews: [
//       {
//         rating: 4.7,
//         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//       },
//     ],
//     avgRating: 4.5,
//   }