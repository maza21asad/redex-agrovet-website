import React from "react";
import "./Product.css";

// function Product() {
//   return <div>This is the product page</div>;
// }

const Product = ({ name, description, price, imageUrl }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default Product;
