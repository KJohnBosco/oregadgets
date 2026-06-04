import React from "react";
import { Link } from "react-router-dom";
import "./collection.styles.scss";

export const Collection = ({ title, name, children }) => (
  <div className="collection">
    <div className="header">
      <h2 className="cltnTitle">{title}</h2>
      <Link className="link" to={"/shop"}>
        View All {name} &rarr;
      </Link>
    </div>
    <div className="items">{children}</div>
  </div>
);
