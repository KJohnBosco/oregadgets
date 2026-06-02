import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./homepage.styles.scss";
import { ShopPage } from "../shoppage/shoppage.component";
import { AboutPage } from "../aboutpage/aboutpage.component";
import { PageNotFound } from "../404page/404page.component";
import { Button } from "../../components/button/button.component";

export const HomePage = () => (
  <div className="homepage">
    <div className="hero">
      <h1>
        <span>ORE</span> Gadgets
      </h1>
      <p>Quality Gadget Distributor</p>
      <h3>Buy & Enjoy The New Feeling</h3>

      <div className="btns">
        <Link className="btn" to={"/about"} style={{ background: "blue" }}>
          About
        </Link>
        <Link className="btn" to={"/shop"} style={{ background: "orangered" }}>
          Shop
        </Link>
      </div>

      <Routes>
        <Route path={"/shop"} element={<ShopPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
    </div>
  </div>
);

// export default Homepage;
