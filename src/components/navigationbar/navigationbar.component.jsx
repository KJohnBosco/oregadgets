import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.styles.scss";

export const NavBar = () => (
  <>
    <nav>
      <img className="logo" src="#" alt="ore logo" />
      <div className="links">
        <Link className="link" to={"/"}>
          Home
        </Link>
        <Link className="link" to={"/shop"}>
          Shop
        </Link>
        <Link className="link" to={"/cart"}>
          cart
        </Link>
        <Link className="link" to={"/about"}>
          about
        </Link>
      </div>
      <div className="icons">
        <i className="fa-solid fa-search"></i>
        <i className="fa-solid fa-account"></i>
        <i className="fa-solid fa-cart">
          <span className="count">0</span>
        </i>
      </div>
    </nav>
  </>
);

// export default NavBar;
