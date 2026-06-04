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
            <Link className="link">Smartphones</Link>
            <Link className="link">Audio</Link>
            <Link className="link">Accessories</Link>
            <Link className="link">Smart Watches</Link>
            <Link className="link">Laptops</Link>
            <Link className="link">Others</Link>
          </ul>
        </div>
        <div className="link-group">
          <h3>Company</h3>
          <ul>
            <Link className="link">About Us</Link>
            <Link className="link">Contact Us</Link>
            <Link className="link">FAQ</Link>
            <Link className="link">Shipping & Returns</Link>
            <Link className="link">Terms & Conditions</Link>
            <Link className="link">Privacy Policy</Link>
          </ul>
        </div>
        <div className="link-group">
          <h3>Help</h3>
          <ul>
            <Link className="link">My Account</Link>
            <Link className="link">Track Order</Link>
            <Link className="link">Returns</Link>
            <Link className="link">Payment Options</Link>
            <Link className="link">Support Center</Link>
          </ul>
        </div>
        <div className="link-group">
          <h3>Contact</h3>
          <div className="contacts">
            <Link className="link">+256 700 000 000</Link>
            <Link className="link">info@oregadgets.com</Link>
            <Link className="link">Kampala, Uganda</Link>
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
