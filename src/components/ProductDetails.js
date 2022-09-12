import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
export default ProductDetails;
