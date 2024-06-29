import { lazy, Suspense, useEffect } from "react";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

import Home from "../src/pages/Home/Home";
import Products from "../src/pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Logo from "./components/Logo";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import AOS from "aos";
import "aos/dist/aos.css";
import Error from "./pages/Error";

// const Home = lazy(() => import("./pages/Home/Home.js"));
// const Shop = lazy(() => import("./pages/Shop"));
// const Product = lazy(() => import("./pages/Product"));
// const pages1 = lazy(() => import("./pages/pages1"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      debounceDelay: 50,

      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="app-cls">
      <div>
        <Navbar />
        <Logo />
      </div>

      <div className="app-cls-inside">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/pd" element={<ProductDetails />} />
          <Route path="/products/:productId" element={<Products />} />
          <Route
            path="/product-details/:productId"
            element={<ProductDetails />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
