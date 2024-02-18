import React from "react";

function Product({ ind }) {
  return (
    <div className="m-2">
      <img src={`./images/${ind}.png`}></img>
    </div>
  );
}

export default Product;
