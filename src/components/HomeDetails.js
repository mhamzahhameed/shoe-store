import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HomeDetails = () => {
  const { id } = useParams();
  const [shoes, setShoes] = useState([]);
  const getData = () => {
    axios
      .get("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => {
        console.log(res.data);
        setShoes(res?.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  let { products } = shoes;
  console.log("products: ", products);
  const product = products[id];
  console.log("product: ", product);
  //   const { title, images } = product;

  return (
    <div>
      {!shoes?.length ? (
        <h2 style={{ textAlign: "center", text: "bold" }}>Data Loading.....</h2>
      ) : (
        <h1>{product?.title}</h1>
      )}

      {/* <img src={img} alt={title} /> */}
    </div>
  );
};

export default HomeDetails;
