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
      <div className="content">
        <h2>Quality Gadgets.</h2>
        <h3>Better Life.</h3>
        <p>
          Discover the latest smartphones, accessories, audio & more. Premium
          Quality. Best Prices. Fast Delivery.
        </p>
        <div className="btns">
          <button>Shop Now</button>
          <button>Expolre Deals</button>
        </div>
      </div>
    </div>
  </div>
);
