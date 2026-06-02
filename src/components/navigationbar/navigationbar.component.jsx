import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./navigationbar.styles.scss";

const NavBar = () => (
  <>
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
      <Link to={"/cart"}>cart</Link>
    </nav>

    <Routes>
        <Route path="/" element={} />
        <Route path="/shop" element={} />
        <Route path="/cart" element={} />
        <Route path="*" element={} />
    </Routes>
  </>
);
