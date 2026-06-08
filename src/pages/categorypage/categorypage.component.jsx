import React from "react";
import "./categorypage.styles.scss";
import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { useParams } from "react-router-dom";
import { Products } from "../../Products";

export const CategoryPage = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <>
      <h1>{category}</h1>
    </>
  );
};
