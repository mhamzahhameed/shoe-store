import React from "react";
import { NavLink } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const WomenHome = () => {
  const shoes = {
    austin: {
      id: 19,
      name: "Austin",
      brand: "HUSHPUPPIES",
      gender: "MEN",
      category: "FORMAL",
      price: 75,
      is_in_inventory: true,
      items_left: 2,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/Austin-Coffee_800x800.jpg?v=1574772988",
      slug: "austin",
    },
    "ss-hl-0135": {
      id: 20,
      name: "SS-HL-0135",
      brand: "HUSHPUPPIES",
      gender: "WOMEN",
      category: "FORMAL",
      price: 30,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009240000-11-SS-HL-0135-Black_800x800.jpg?v=1572264270",
      slug: "ss-hl-0135",
    },
    "ss-hl-0136": {
      id: 21,
      name: "SS-HL-0136",
      brand: "HUSHPUPPIES",
      gender: "WOMEN",
      category: "FORMAL",
      price: 50,
      is_in_inventory: true,
      items_left: 4,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009250000-779-SS-HL-0136-Coffee_800x800.jpg?v=1571900372",
      slug: "ss-hl-0136",
    },
    "ss-hl-0128": {
      id: 22,
      name: "SS-HL-0128",
      brand: "HUSHPUPPIES",
      gender: "WOMEN",
      category: "FORMAL",
      price: 35,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/000300242-484-SS-HL-0128-Blue_800x800.jpg?v=1583235174",
      slug: "ss-hl-0128",
    },
    "ss-ms-0075": {
      id: 23,
      name: "SS-MS-0075",
      brand: "HUSHPUPPIES",
      gender: "WOMEN",
      category: "CASUAL",
      price: 25,
      is_in_inventory: true,
      items_left: 7,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/009170000-479-SS-MS-0075-Red_800x800.jpg?v=1570688687",
      slug: "ss-ms-0075",
    },
    "ss-pm-0093": {
      id: 25,
      name: "SS-PM-0093",
      brand: "HUSHPUPPIES",
      gender: "WOMEN",
      category: "CASUAL",
      price: 30,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://cdn.shopify.com/s/files/1/0016/0074/9623/products/SS-PM-0093_1_800x800.jpg?v=1570601253",
      slug: "ss-pm-0093",
    },
    "nizza-x-disney": {
      id: 26,
      name: "Nizza X Disney",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "CASUAL",
      price: 55,
      is_in_inventory: true,
      items_left: 6,
      imageURL:
        "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/ef901c7aeac042578eceab9d0159196c_9366/Nizza_x_Disney_Sport_Goofy_Shoes_White_FW0651_01_standard.jpg",
      slug: "nizza-x-disney",
    },
    x_plr: {
      id: 27,
      name: "X_PLR",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "CASUAL",
      price: 65,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/a36518227134495da766ab9d01772fa2_9366/X_PLR_Shoes_Red_FY9063_01_standard.jpg",
      slug: "x_plr",
    },
    "stan-smith": {
      id: 28,
      name: "Stan Smith",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "CASUAL",
      price: 55,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/d0720712d81e42b1b30fa80800826447_9366/Stan_Smith_Shoes_White_M20607_M20607_01_standard.jpg",
      slug: "stan-smith",
    },
    nmd_r1: {
      id: 29,
      name: "NMD_R1",
      brand: "ADIDAS",
      gender: "KIDS",
      category: "RUNNING",
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/99ca762cb9054caf82fbabc500fd146e_9366/NMD_R1_Shoes_Blue_FY9392_01_standard.jpg",
      slug: "nmd_r1",
    },
    "nmd_r1-flash-red": {
      id: 30,
      name: "NMD_R1 Flash Red",
      brand: "ADIDAS",
      gender: "WOMEN",
      category: "CASUAL",
      price: 140,
      is_in_inventory: true,
      items_left: 5,
      imageURL:
        "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/90f85768e3894aeaab67aba0014a3379_9366/NMD_R1_Shoes_Red_FY9389_01_standard.jpg",
      slug: "nmd_r1-flash-red",
    },
    superstar: {
      id: 31,
      name: "Superstar",
      brand: "ADIDAS",
      gender: "WOMEN",
      category: "CASUAL",
      price: 90,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://assets.adidas.com/images/h_320,f_auto,q_auto:sensitive,fl_lossy/12365dbc7c424288b7cdab4900dc7099_9366/Superstar_Shoes_White_FW3553_FW3553_01_standard.jpg",
      slug: "superstar",
    },
    "club-c-revenge-mens": {
      id: 32,
      name: "Club C Revenge Mens",
      brand: "Reebok",
      gender: "MEN",
      category: "CASUAL",
      price: 70,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/7599294868804d78a1b1ab6f01718a5e_9366/Club_C_Revenge_Men's_Shoes_White_FV9877_01_standard.jpg",
      slug: "club-c-revenge-mens",
    },
  };
  return (
    <div>
      <h2 style={{ textAlign: "center", text: "bold" }}>Other Products</h2>
      <ImageList
        sx={{ width: 1230, height: 850 }}
        variant='quilted'
        cols={3}
        rowHeight={350}
      >
        {Object.entries(shoes).map(([id, { name, imageURL, price }]) => (
          <NavLink to={id}>
            <ImageListItem
              key={id}
              style={{
                margin: "20px 20px",
                border: "2px lightGrey solid",
                borderRadius: "5px",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              <img
                src={`${imageURL}?w=248&fit=crop&auto=format`}
                srcSet={`${imageURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={name}
                loading='lazy'
              />
              <ImageListItemBar
                title={name}
                subtitle={<span>price: ${price}</span>}
                position='below'
              />
            </ImageListItem>
          </NavLink>
        ))}
      </ImageList>
    </div>
  );
};

export default WomenHome;
