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
import AdminHome from "./Admin/AdminHome";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Checkout" element={<Checkout />}></Route>


          <Route path="/Admin" element={<AdminHome />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
