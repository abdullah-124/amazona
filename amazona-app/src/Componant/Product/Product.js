import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="card">
        <a className="img_box" href="/product">
          <img className="medium " src={product.image} alt="" />
        </a>
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReviews={product.numberReviews} />
          <div className="price">${product.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
