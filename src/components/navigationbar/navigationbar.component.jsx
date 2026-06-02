import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.styles.scss";

export const NavBar = () => (
  <nav>
    <Link to={"/"}>Home</Link>
    <Link to={"/shop"}>Shop</Link>
    <Link to={"/cart"}>cart</Link>
  </nav>
);

// export default NavBar;
