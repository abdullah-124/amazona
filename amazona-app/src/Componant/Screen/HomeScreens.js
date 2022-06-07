import React from "react";
import { data } from "../../data"
import Product from "../Product/Product";

export default function HomeScreens() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
