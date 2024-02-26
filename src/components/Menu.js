import React, { useEffect, useState } from "react";
import data from "../data";

function Menu({ item }) {
  const [columnHeadings, setcolumnHeadings] = useState([]);

  useEffect(() => {
    let filteredData = data.filter((d) => d.parentId === item.id);
    for (let i = 0; i < filteredData.length; i++) {
      filteredData[i].children = [];
    }

    for (let i = 0; i < filteredData.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (filteredData[i].id === data[j].parentId) {
          filteredData[i].children.push(data[j]);
        }
      }
    }
    setcolumnHeadings(filteredData);
  }, []);

  var colsClass = "grid-cols-3",
    left = "",
    areChildrenPresent = 0;

  const checkChildrenAndAssignClasses = () => {
    for (let i = 0; i < columnHeadings.length; i++) {
      const curr = columnHeadings[i];
      console.log(curr);
      if (curr.children.length > 0) {
        areChildrenPresent = 1;
        break;
      }
    }

    var len = columnHeadings.length;
    if (len > 3) {
      colsClass = "grid-cols-6";
      left = "left-0";
    } else if (len == 2) {
      colsClass = "grid-cols-2";
    }
  };

  if (columnHeadings) {
    checkChildrenAndAssignClasses();
    console.log("areChildrenPresent: ", areChildrenPresent);
    console.log(item.heading, columnHeadings);
  }

  return (
    <div>
      <div className="group">
        <h2 className="text-white group-hover:text-yellow-600 group-hover:bg-gray-300 p-2">
          {item.heading}
        </h2>
        {areChildrenPresent === 1 && (
          <div
            className={`${left} grid ${colsClass} gridbox opacity-0 scale-0 group-hover:opacity-100 shadow-lg mb-2 group-hover:scale-100 gap-2 p-4 bg-gray-100 text-black absolute`}
          >
            {columnHeadings.map((d) => {
              return (
                <div key={d.id}>
                  <h3 className="font-bold m-2 text-lg">{d.heading}</h3>
                  {d.children.map((curr) => {
                    return (
                      <h3 key={curr.id} className="m-2">
                        {curr.heading}
                      </h3>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
        {areChildrenPresent === 0 && (
          <div
            className={`grid grid-cols-1 gridbox opacity-0 scale-0 group-hover:opacity-100 shadow-lg mb-2 group-hover:scale-100 gap-2 p-4 bg-gray-100 text-black absolute`}
          >
            {columnHeadings.map((d) => {
              return (
                <div key={d.id}>
                  <h3 className="text-lg">{d.heading}</h3>
                  {d.children.map((curr) => {
                    return (
                      <h3 key={curr.id} className="m-2">
                        {curr.heading}
                      </h3>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
