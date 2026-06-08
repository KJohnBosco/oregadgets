import React from "react";
import "./collection-item.styles.scss";

export const CollectionItem = ({
  category,
  title,
  imageurl,
  normalPrice,
  discountPrice,
  rating,
}) => (
  <div className="collection-item">
    <div className="image">
      <img src={imageurl} alt={`${category || title} image`} />
    </div>
    <p className="name">{category || title}</p>
    {normalPrice ? (
      <>
        <p className="cost">UGX.{discountPrice}</p>
        <p className="normal">UGX.{normalPrice}</p>
        <p>
          <i className="fa-solid fa-star"></i>
          {rating}
        </p>
      </>
    ) : null}
  </div>
);
