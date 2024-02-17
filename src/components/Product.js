import React from "react";

function Product({ ind }) {
  return (
    <div className="m-4">
      <img src={`./images/${ind}.png`}></img>
    </div>
  );
}

export default Product;
