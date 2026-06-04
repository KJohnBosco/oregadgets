import React from "react";
import { Link } from "react-router-dom";
import "./footer.styles.scss";
import logo from "../../assets/logo.png";

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="info">
        <img src={logo} alt="ore logo" />
        <p>Quality Gadgets For a Better Life.</p>

        <div className="icons">
          <i className="fa-brand fa-facebook"></i>
          <i className="fa-brand fa-facebook"></i>
          <i className="fa-brand fa-facebook"></i>
          <i className="fa-brand fa-facebook"></i>
        </div>
      </div>
      <div className="links">
        <div className="link-group">
          <h3>Shop</h3>
          <ul>
            <Link className="link" to={"/shop"}>
              Smartphones
            </Link>
            <Link className="link" to={"/shop"}>
              Audio
            </Link>
            <Link className="link" to={"/shop"}>
              Accessories
            </Link>
            <Link className="link" to={"/shop"}>
              Smart Watches
            </Link>
            <Link className="link" to={"/shop"}>
              Laptops
            </Link>
            <Link className="link" to={"/shop"}>
              Others
            </Link>
          </ul>
        </div>
        <div className="link-group">
          <h3>Company</h3>
          <ul>
            <Link className="link" to={"/about"}>
              About Us
            </Link>
            <Link className="link" to={"/contact"}>
              Contact Us
            </Link>
            <Link className="link" to={"/faq"}>
              FAQ
            </Link>
            <Link className="link" to={"/about"}>
              Shipping & Returns
            </Link>
            <Link className="link" to={"/terms&conditions"}>
              Terms & Conditions
            </Link>
            <Link className="link" to={"/privacypolicy"}>
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="link-group">
          <h3>Help</h3>
          <ul>
            <Link className="link" to={"/account"}>
              My Account
            </Link>
            <Link className="link" to={"/order"}>
              Track Order
            </Link>
            <Link className="link" to={"/order"}>
              Returns
            </Link>
            <Link className="link" to={"/account"}>
              Payment Options
            </Link>
            <Link className="link" to={"/contact"}>
              Support Center
            </Link>
          </ul>
        </div>
        <div className="link-group">
          <h3>Contact</h3>
          <div className="contacts">
            <Link className="link" to={"tel:+256700000000"}>
              +256 700 000 000
            </Link>
            <Link className="link" to={"mailto:info@oregadgets.com"}>
              info@oregadgets.com
            </Link>
            <Link className="link" target="blank" to="https://maps.google.com">
              Kampala, Uganda
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-group">
      <p>&copy; 2026 Ore Gadgets, All rights reserved</p>
      <div className="brands">
        <img src="#" alt="brand image" />
        <img src="#" alt="brand image" />
        <img src="#" alt="brand image" />
        <img src="#" alt="brand image" />
      </div>
    </div>
  </footer>
);
