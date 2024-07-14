// src/pages/product/ProductPage.js
import React from "react";
import ProductList from "./ProductList";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="product-page">
      <h1 className="page-title">Our Products</h1>
      <ProductList />
    </div>
  );
};

export default ProductPage;
