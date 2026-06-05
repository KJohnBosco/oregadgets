import React from "react";
import "./404page.styles.scss";
import bot from "../../assets/404.jpg";
import bg from "../../assets/backgrounds/bg2.jpg";

export const PageNotFound = () => (
  <div className="pagenotfound">
    <div className="bg">
      <img src={bg} alt="backgroud image" />
    </div>
    <div className="content">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! This page you're looking for doesn't exist or has been removed
      </p>
    </div>
    <div className="image">
      <img src={bot} alt="bot image" />
      <p className="qn">?</p>
    </div>
  </div>
);
