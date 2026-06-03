import React from "react";
import "./button.styles.scss";

export const Link = ({ type }) => (
  <Link className={`btn ${type}`} to={"/"}>
    Test
  </Link>
);
