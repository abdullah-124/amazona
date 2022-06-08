import React, { useEffect, useState } from "react";
import { data } from "../../data";
import Product from "../Product/Product";
import axios from "axios";
import LoadingBox from "../Utility/LoadingBox";
import MassageBox from "../Utility/MassageBox";

export default function HomeScreens() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MassageBox variant="danger" message={error.message} />
  ) : (
    <div>
      <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
