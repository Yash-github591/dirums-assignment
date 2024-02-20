import React, { useEffect, useState } from "react";

function Product({ src, title, price, description }) {
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    const limit = 55;
    if (description.length > limit) {
      setNewDescription(description.slice(0, limit) + "...");
    } else {
      setNewDescription(description);
    }
  }, []);

  return (
    // <div className=" relative text-left m-2">
    //   <img src={src} className="h-3/4 w-3/4"></img>
    //   <h1 className="text-lg font-bold">{title}</h1>
    //   <p>{price}</p>
    //   <p>{newDescription}</p>
    // </div>
    <div className="group relative m-4">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={src}
          alt={title}
          className="object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 ">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={src}>
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              {title}
            </a>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">{price}</p>
      </div>
      <p className="mt-1 text-sm text-gray-500 h-full w-full ">
        {newDescription}
      </p>
    </div>
  );
}

export default Product;
