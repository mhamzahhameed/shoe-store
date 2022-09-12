import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const WomenHome = () => {
  const [shoes, setShoes] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      "https://dummyjson.com/products/category/womens-shoes"
    );
    const data = await res.data;
    setShoes(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let { products } = shoes;

  return (
    <div style={{ textAlign: "center", text: "bold" }}>
      <h2>
        <strong> Men's Products</strong>
      </h2>
      {!products?.length ? (
        <h2 style={{ textAlign: "center", text: "bold" }}>Data Loading.....</h2>
      ) : (
        <ul>
          {products.map((v, i) => {
            return (
              <li key={i}>
                <Link to={v?.title}>
                  <h2
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {v?.title}
                  </h2>
                  <img
                    style={{
                      margin: "20px 20px",
                      border: "2px lightGrey solid",
                      borderRadius: "5px",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                    src={v?.images[2]}
                    alt={v?.i}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default WomenHome;
