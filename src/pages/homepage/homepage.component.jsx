import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./homepage.styles.scss";
import { ShopPage } from "../shoppage/shoppage.component";
import { AboutPage } from "../aboutpage/aboutpage.component";
import { PageNotFound } from "../404page/404page.component";
import heroImg from "../../assets/hero.png";
import { Collection } from "../../components/collection/collection.component";
import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { Products } from "../../Products";

export const HomePage = () => (
  <div className="homepage">
    {/* Hero Section */}
    <div className="hero">
      <div className="content">
        <span className="welcome">
          <span>Welcome To</span> ORE GADGETS
        </span>
        <h2>Quality Gadgets.</h2>
        <h3>Better Life.</h3>
        <p>
          Discover the latest smartphones, accessories, audio & more. Premium
          Quality. Best Prices. Fast Delivery.
        </p>
        <div className="btns">
          <Link className="btn primary" to={"/shop"}>
            Shop Now
          </Link>
          <Link className="btn secondary" to={"/shop"}>
            Explore Deals
          </Link>
        </div>
      </div>
      <img className="hero-image" src={heroImg} alt="hero image" />
    </div>

    {/* Service Group */}
    <div className="service-group">
      <div className="card">
        <i className="fa-solid fa-truck"></i>
        <div className="info">
          <h3>Free Delivery</h3>
          <p>On orders above UGX.300,000</p>
        </div>
      </div>
      <div className="card">
        <i className="fa-solid fa-truck"></i>
        <div className="info">
          <h3>Secure Payment</h3>
          <p>100% secure payments</p>
        </div>
      </div>
      <div className="card">
        <i className="fa-solid fa-truck"></i>
        <div className="info">
          <h3>Easy Returns</h3>
          <p>7-day return policy</p>
        </div>
      </div>
      <div className="card">
        <i className="fa-solid fa-truck"></i>
        <div className="info">
          <h3>24/7 Support</h3>
          <p>We are here to help</p>
        </div>
      </div>
    </div>

    {/* Collections */}
    <div>
      {/* Shop By Category */}
      <Collection title={"Shop By Category"} name="Categories">
        {Products.map((ctgry, index) => (
          <CollectionItem
            key={index}
            category={ctgry.category}
            imageurl={"#"}
          />
        ))}
      </Collection>

      {/* Best Selling Products */}
      <Collection title={"Best Selling Products"} name={"Products"}>
        {Products[0].items.map((item, index) =>
          index < 10 ? (
            <CollectionItem
              key={index}
              category={item.title}
              imageurl={item.imageurl}
              normalPrice={item.normalPrice}
              discountPrice={item.discountPrice}
              rating={item.rating}
            />
          ) : null,
        )}
      </Collection>
    </div>
  </div>
);
