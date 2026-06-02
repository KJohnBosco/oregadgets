import React from "react";
import "./button.styles.scss";

export const Button = (props) => (
  <button className="btn" style={{ background: `${props.color}` }}>
    {props.label}
  </button>
);

export const Link = (props) => (
  <button className="btn" style={{ background: `${props.color}` }}>
    {props.label}
  </button>
);
