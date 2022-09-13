import React from "react";
import { NavLink } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const HomeHome = () => {
  const shoes = {
    "nike-react-infinity-run-flyknit": {
      id: 1,
      name: "Nike React Infinity Run Flyknit",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 160,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-665455a5-45de-40fb-945f-c1852b82400d/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.jpg",
      slug: "nike-react-infinity-run-flyknit",
    },
    "nike-react-miler": {
      id: 2,
      name: "Nike React Miler",
      brand: "NIKE",
      gender: "MEN",
      category: "RUNNING",
      price: 130,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-5cc7de3b-2afc-49c2-a1e4-0508997d09e6/react-miler-mens-running-shoe-DgF6nr.jpg",
      slug: "nike-react-miler",
    },
    "nike-air-zoom-pegasus-37": {
      id: 3,
      name: "Nike Air Zoom Pegasus 37",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      price: 120,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-33b0a0a5-c171-46cc-ad20-04a768703e47/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg",
      slug: "nike-air-zoom-pegasus-37",
    },
    "nike-joyride-run-flyknit": {
      id: 4,
      name: "Nike Joyride Run Flyknit",
      brand: "NIKE",
      gender: "WOMEN",
      category: "RUNNING",
      price: 180,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/99a7d3cb-e40c-4474-91c2-0f2e6d231fd2/joyride-run-flyknit-womens-running-shoe-HcfnJd.jpg",
      slug: "nike-joyride-run-flyknit",
    },
    "nike-mercurial-vapor-13-elite-fg": {
      id: 5,
      name: "Nike Mercurial Vapor 13 Elite FG",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      price: 250,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9dda6202-e2ff-4711-9a09-0fcb7d90c164/mercurial-vapor-13-elite-fg-firm-ground-soccer-cleat-14MsF2.jpg",
      slug: "nike-mercurial-vapor-13-elite-fg",
    },
    "nike-phantom-vision-elite-dynamic-fit-fg": {
      id: 6,
      name: "Nike Phantom Vision Elite Dynamic Fit FG",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      price: 150,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/s1amp7uosrn0nqpsxeue/phantom-vision-elite-dynamic-fit-fg-firm-ground-soccer-cleat-19Kv1V.jpg",
      slug: "nike-phantom-vision-elite-dynamic-fit-fg",
    },
    "nike-phantom-venom-academy-fg": {
      id: 7,
      name: "Nike Phantom Venom Academy FG",
      brand: "NIKE",
      gender: "WOMEN",
      category: "FOOTBALL",
      price: 80,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/whegph8z9ornhxklc8rp/phantom-venom-academy-fg-firm-ground-soccer-cleat-6JVNll.jpg",
      slug: "nike-phantom-venom-academy-fg",
    },
    "nike-mercurial-vapor-13-elite-tech-craft-fg": {
      id: 8,
      name: "Nike Mercurial Vapor 13 Elite Tech Craft FG",
      brand: "NIKE",
      gender: "MEN",
      category: "FOOTBALL",
      price: 145,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/vhbwnkor8sxt8qtecgia/mercurial-vapor-13-elite-tech-craft-fg-firm-ground-soccer-cleat-l38JPj.jpg",
      slug: "nike-mercurial-vapor-13-elite-tech-craft-fg",
    },
    "nike-mercurial-superfly-7-pro-mds-fg": {
      id: 9,
      name: "Nike Mercurial Superfly 7 Pro MDS FG",
      brand: "NIKE",
      gender: "MEN",
      category: "FOOTBALL",
      price: 137,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-a52a8aec-22dc-4982-961b-75c5f4c72805/mercurial-superfly-7-pro-mds-fg-firm-ground-soccer-cleat-mhcpdN.jpg",
      slug: "nike-mercurial-superfly-7-pro-mds-fg",
    },
    "nike-air-force-1": {
      id: 10,
      name: "Nike Air Force 1",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      price: 90,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/178b2a46-3ee4-492b-882e-f71efdd53a36/air-force-1-big-kids-shoe-2zqp8D.jpg",
      slug: "nike-air-force-1",
    },
    "nike-air-max-90": {
      id: 11,
      name: "Nike Air Max 90",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      price: 100,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8439f823-86cf-4086-81d2-4f9ff9a66866/air-max-90-big-kids-shoe-1wzwJM.jpg",
      slug: "nike-air-max-90",
    },
    "nike-air-max-90-ltr": {
      id: 12,
      name: "Nike Air Max 90 LTR",
      brand: "NIKE",
      gender: "KIDS",
      category: "CASUAL",
      price: 110,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-620aeb37-1b28-44b0-9b14-5572f8cbc948/air-max-90-ltr-big-kids-shoe-hdNLQ5.jpg",
      slug: "nike-air-max-90-ltr",
    },
    "nike-joyride-dual-run": {
      id: 13,
      name: "Nike Joyride Dual Run",
      brand: "NIKE",
      gender: "KIDS",
      category: "RUNNING",
      price: 110,
      is_in_inventory: false,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/33888130-0320-41a1-ba53-a026decd8aa2/joyride-dual-run-big-kids-running-shoe-1HDJF8.jpg",
      slug: "nike-joyride-dual-run",
    },
    "nike-renew-run": {
      id: 14,
      name: "Nike Renew Run",
      brand: "NIKE",
      gender: "KIDS",
      category: "RUNNING",
      price: 80,
      is_in_inventory: true,
      items_left: 3,
      imageURL:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg",
      slug: "nike-renew-run",
    },
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", text: "bold" }}>
        {" "}
        Offers by <span style={{ color: "darkgray" }}>PAK_SHOWS</span>{" "}
      </h1>
      <h2 style={{ textAlign: "center", text: "bold" }}>Nike Products</h2>
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
export default HomeHome;
