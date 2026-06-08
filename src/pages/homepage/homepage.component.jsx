import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./homepage.styles.scss";
import { ShopPage } from "../shoppage/shoppage.component";
import { AboutPage } from "../aboutpage/aboutpage.component";
import { PageNotFound } from "../404page/404page.component";
import { Collection } from "../../components/collection/collection.component";
import { Products } from "../../Products";
import bgimage from "../../assets/backgrounds/bg3.jpg";
import heroImg from "../../assets/hero.png";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: Products,
    };
  }

  render() {
    return (
      <div className="homepage">
        {/* Hero Section */}
        <div className="hero">
          <div className="bgImage">
            <img src={bgimage} alt="background image" />
          </div>
          <div className="content">
            <span className="welcome">
              <span>Welcome To</span> ORE GADGETS
            </span>
            <h2>Quality Gadgets.</h2>
            <h3>Better Life.</h3>
            <p>
              Discover the latest smartphones, accessories, audio & more.
              Premium Quality. Best Prices. Fast Delivery.
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
              <p className="title">Free Delivery</p>
              <p>On orders above UGX.300,000</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-truck"></i>
            <div className="info">
              <p className="title">Secure Payment</p>
              <p>100% secure payments</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-truck"></i>
            <div className="info">
              <p className="title">Easy Returns</p>
              <p>7-day return policy</p>
            </div>
          </div>
          <div className="card">
            <i className="fa-solid fa-truck"></i>
            <div className="info">
              <p className="title">24/7 Support</p>
              <p>We are here to help</p>
            </div>
          </div>
        </div>

        {/* Collections */}
        <div>
          {/* Shop By Category */}
          <Collection
            title={"Shop By Category"}
            name="Categories"
            products={this.state.products}
          />

          {/* Best Selling Products */}
          <Collection
            title={"Best Selling Products"}
            name={"Products"}
            products={this.state.products}
          />
        </div>

        {/* Subscriptions */}
        <div className="subscription-card">
          <h1>Join Ore Gadget Community</h1>
          <p>
            Get exclusive deals, new arrivals & special offers delivered to your
            door.
          </p>
          <form className="form" action="">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>

        {/* Why Choose Section */}
        <div>
          <h1 className="section-header">Why Choose Ore Gadgets?</h1>
          <div className="service-group">
            <div className="card">
              <i className="fa-solid fa-truck"></i>
              <div className="info">
                <p className="title">Genuine Products</p>
                <p>100% authentic products</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-truck"></i>
              <div className="info">
                <p className="title">Affordable Prices</p>
                <p>Best prices in the market</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-truck"></i>
              <div className="info">
                <p className="title">Fast Delivery</p>
                <p>Over & reliable delivery</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-truck"></i>
              <div className="info">
                <p className="title">Trusted By Thousands</p>
                <p>Join thousands of our customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
