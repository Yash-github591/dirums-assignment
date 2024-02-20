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
    <div className="group relative">
      <div className="aspect-h-1 p-2 aspect-w-1 w-full overflow-hidden flex items-center rounded-md  lg:aspect-none group-hover:opacity-75 h-80 w-1/2">
        <img src={src} alt={title} className="object-center h-full" />
      </div>
      <div className="mt-4 ">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={src}>{title}</a>
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
