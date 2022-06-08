import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../Product/Rating";
import { data } from "./../../data"

export default function ProductScreen() {
  const { id } = useParams();
  const product = data.products.find((product) => product._id === id);
  return !product ? (
    <h1>Oops no products yet</h1>
  ) : (
    <section>
      <Link className="fa fa-arrow-left" to={-1} />
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating
                rating={product.rating}
                numReviews={product.numberReviews}
              />
            </li>
            <li>Price: {product.price}</li>
            <li>Description: {product.description}</li>
            <li>
              <img src={product.image} alt="" />
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price: </div>
                  <div className="price">{product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status: </div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock <small>{product.countInStock}</small></span>
                    ) : (
                      <span className="danger">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
