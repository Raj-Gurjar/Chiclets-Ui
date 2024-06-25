import { lazy, Suspense } from "react";

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

// const Home = lazy(() => import("./pages/Home/Home.js"));
// const Shop = lazy(() => import("./pages/Shop"));
// const Product = lazy(() => import("./pages/Product"));
// const pages1 = lazy(() => import("./pages/pages1"));

function App() {
  return (
    <div className="app-cls">
      <div>
        <Navbar />
        <Logo />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/pages1" element={<pages1 />} /> */}
      </Routes>
    </div>
  );
}

export default App;
