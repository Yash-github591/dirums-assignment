import { useEffect, useState } from "react";
import "./App.css";
import data from "./data.js";
import Menu from "./components/Menu.js";

function App() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      if (item.parentId === null) {
        return item.heading;
      }
    });
    setHeadings(filteredData);
  }, []);

  return (
    <div className="App font-mono h-screen w-full">
      <nav>
        <div className="first flex bg-black h-12">
          <div className="flex justify-center gap-10 w-full">
            <img src="./images/dirums.png" className="w-22 h-10"></img>
            <input
              type="text"
              name="searchTerm"
              className="bg-gray-300 w-1/2 h-5 my-4"
            ></input>
            <img src="./images/wishlist.png" className="w-15 h-5 my-4"></img>
          </div>
        </div>
        <div className="second flex justify-center gap-8 h-auto w-full bg-yellow-600">
          {headings.map((item) => {
            return <Menu key={item.id} item={item} />;
          })}
        </div>
      </nav>
      <div className="h-45 w-full">
        <img src="./images/home.png" className="h-full w-full"></img>
      </div>
    </div>
  );
}

export default App;
