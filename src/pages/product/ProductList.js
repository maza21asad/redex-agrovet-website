import React from "react";
import Product from "./Product";
import products from "./products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductList;
