import React from "react";
import "./categorypage.styles.scss";
import { CollectionItem } from "../../components/collection-item/collection-item.component";

export const CategoryPage = ({ category, products }) => (
  <div className="category-page">
    <h1>{category} Page</h1>
  </div>
);
