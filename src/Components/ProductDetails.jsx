import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";

const ProductDetails = () => {
  let { id } = useParams();
  let [data, setData] = useState({});
  const api = async () => {
    let req = await fetch(`https://dummyjson.com/products/${id}`);
    let res = await req.json();
    setData(res);
  };
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      <Nav />
      <section className="productDetails-section">
        <div className="container">
          <div className="row abcd">
            <div className="productImage">
              <img src={data.thumbnail} alt="" />
            </div>
            <div className="productDetails">
              <h1 className="title">{data.title}</h1>
              <p className="description">{data.description}</p>
              <span className="price">{data.price}$</span>
              <span className="disc">{data.discount} %off</span>
              <div className="rating">{data.rating}<i class="fa-solid fa-star"></i></div>
              <div className="brand">{data.brand}</div>
              <div className="category">{data.category}</div>
              <Link>Add to cart</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
