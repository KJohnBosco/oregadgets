import React from "react";
import "./collection-preview.styles.scss";
import { CollectionItem } from "../collection-item/collection-item.component";

const CollectionPreview = ({ id, title, items }) => (
  <div className="collection-preview" key={id}>
    {items.map((item, idx) => (
      <CollectionItem id={idx} />
    ))}
  </div>
);
