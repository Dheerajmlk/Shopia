import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import SignUp from "./SignUp";
import Login from "./Login";
import Checkout from "./Checkout";
import AdminHome from "./Admin/Adminhome";
import Maincategory from "./Admin/Maincategory";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>


          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin-maincategory" element={<Maincategory />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
