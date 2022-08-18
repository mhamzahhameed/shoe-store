import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
import axios from "axios";

import { ImageListItem, ImageList, ImageListItemBar } from "@mui/material";

const MenShoes = () => {
  let [isFetching, setIsFetching] = useState(false);
  let data = { title: "Waiting for Data" };
  const [shoes, setShoes] = useState(data);

  useEffect(() => {
    setIsFetching(true);
    axios
      .get("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => {
        setShoes(res?.data);
        setIsFetching(false);
      });
  }, []);

  if (isFetching)
    return (
      <div style={{ textAlign: "center", text: "bold" }}>
        <h3>Data Loading.....</h3>
      </div>
    );
  let { products } = shoes;

  return (
    <div>
      <h2 style={{ textAlign: "center", text: "bold" }}>
        <strong>Men's Products</strong>
      </h2>
      <ul>
        {products?.map((v, i) => {
          return (
            <li key={i}>
              <h2
                style={{
                  textAlign: "center",
                }}
              >
                {v?.title}
              </h2>
              <ImageList
                sx={{ width: 1230, height: 850 }}
                variant='quilted'
                cols={3}
                rowHeight={350}
              >
                {v?.images?.map((item, idx) => (
                  <ImageListItem
                    key={idx}
                    style={{
                      margin: "20px 20px",
                      border: "2px lightGrey solid",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src={`${item}?w=248&fit=crop&auto=format`}
                      srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={v?.title}
                    />
                    <ImageListItemBar
                      title={v?.title}
                      subtitle={
                        <span>by: ENDURE || Price ${v.price - (idx + 5)}</span>
                      }
                      position='below'
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenShoes;
