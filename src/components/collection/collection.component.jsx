import React from "react";
import { Link } from "react-router-dom";
import "./collection.styles.scss";
import { CollectionItem } from "../collection-item/collection-item.component";

export const Collection = ({ title, name, products }) => (
  <div className="collection">
    <div className="header">
      <h2 className="cltnTitle">{title}</h2>
      <Link className="link" to={"/shop"}>
        View All {name} &rarr;
      </Link>
    </div>
    <div className="items">
      {products.map((ctgry, index) => (
        <CollectionItem key={index} category={ctgry.category} imageurl={"#"} />
      ))}
    </div>
  </div>
);
