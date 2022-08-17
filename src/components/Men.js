import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
import axios from "axios";

import { ImageListItem, ImageList, ImageListItemBar } from "@mui/material";

const MenShoes = () => {
  let data = { title: "Waiting for Data" };
  const [shoes, setShoes] = useState(data);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => {
        setShoes(res?.data);
      });

    // fetchData();
  }, []);

  // if (isFetching) {
  //   return <div>Data Loading.....</div>;
  // }
  let { products } = shoes;
  // console.log("products: ", products);

  // const objiterator = (p, alt) => {
  //   for (var key of p) {
  //     return (
  //       <ul>
  //         <li>
  //           <img src={p[key]} alt={alt} />
  //         </li>
  //       </ul>
  //     );
  //   }
  // };

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
                sx={{ width: 1200, height: 850 }}
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
                      loading='lazy'
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

              {/* {v?.images.map((r, j) => {
                return <img key={j} className='image' src={r} alt={v?.i} />;
              })} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenShoes;
