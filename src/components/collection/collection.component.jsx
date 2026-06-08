import React from "react";
import { Link } from "react-router-dom";
import "./collection.styles.scss";
import { CollectionItem } from "../collection-item/collection-item.component";

export const Collection = ({ title, name, products, limit }) => (
  <div className="collection">
    <div className="header">
      <h2 className="cltnTitle">{title}</h2>
      <Link className="link" to={"/shop"}>
        View All {name} &rarr;
      </Link>
    </div>
    <div className="items">
      {products.map((item, index) =>
        limit ? (
          index < limit ? (
            <CollectionItem
              key={index}
              category={item.category}
              title={item.title}
              imageurl={"#"}
            />
          ) : null
        ) : (
          <CollectionItem
            key={index}
            category={item.category}
            title={item.title}
            imageurl={"#"}
          />
        ),
      )}
    </div>
  </div>
);
