import React, { useEffect, useState } from "react";
import data from "../data";

function Menu({ item }) {
  const [cols, setCols] = useState(3);
  const [columnHeadings, setcolumnHeadings] = useState([]);
  const [left, setLeft] = useState("");

  useEffect(() => {
    const filteredData = data.filter((d) => d.parentId === item.id);
    setcolumnHeadings(filteredData);
    console.log(filteredData, filteredData.length);
    if (filteredData.length > 3) {
      setCols(6);
      setLeft("left-0");
    } else {
      setCols(filteredData.length);
    }
  }, []);

  return (
    <div>
      <div className="group">
        <h2 className="text-white group-hover:text-yellow-600 group-hover:bg-gray-300 p-2">
          {item.heading}
        </h2>
        <div
          className={`${left} gridbox opacity-0 scale-0 group-hover:opacity-100 shadow-lg mb-2 group-hover:scale-100 grid grid-cols-${cols} gap-2 p-4 bg-gray-100 text-black absolute`}
        >
          {columnHeadings.map((d) => {
            return (
              <div key={d.id}>
                <h3 className="font-bold m-2 text-lg">{d.heading}</h3>
                {data.map((curr) => {
                  return (
                    curr.parentId === d.id && (
                      <h3 key={curr.id} className="m-2">
                        {curr.heading}
                      </h3>
                    )
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
