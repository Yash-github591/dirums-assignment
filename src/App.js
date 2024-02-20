import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import { useEffect, useState } from "react";

function App() {
  const [double, setDouble] = useState(1);
  const [single, setSingle] = useState(0);
  const [cols, setCols] = useState(2);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((dataFromUrl) => setData(dataFromUrl));
  }, []);

  const handleDouble = () => {
    const element = document.querySelector(".productTable");
    if (double === 1) {
      element.classList.remove("grid-cols-2");
      element.classList.add("grid-cols-1");
      setDouble(1 - double);
      setSingle(1 - single);
    }
  };
  const handleSingle = () => {
    const element = document.querySelector(".productTable");
    if (single === 1) {
      element.classList.remove("grid-cols-1");
      element.classList.add("grid-cols-2");
      setDouble(1 - double);
      setSingle(1 - single);
    }
  };

  return (
    <div className="App font-mono h-screen w-full">
      <nav>
        <div className="first flex bg-black h-12">
          <img src="./logos/menu.png" className="lg:hidden  w-7 h-7 m-2"></img>
          <div className="flex justify-center gap-10 w-full">
            <img src="./logos/dirums.png" className="w-22 h-10"></img>
            <input
              type="text"
              name="searchTerm"
              className="bg-gray-300 w-1/2 h-5 my-4"
            ></input>
            <img src="./logos/wishlist.png" className="w-10 h-5 my-4"></img>
          </div>
        </div>
        <div className="second hidden lg:flex justify-center gap-10 h-auto w-full bg-yellow-600  py-1 text-white">
          <h2>Artwork for Wall</h2>
          <h2>Folk Art & Craft</h2>
          <h2>Wildlife Paintings</h2>
          <h2>Home & Living</h2>
          <h2>Painting for Living Room</h2>
          <h2>Religious Paintings</h2>
        </div>
        <div className="third h-10 flex gap-2 bg-gray-300 px-10 py-2">
          <h2 className="text-xl">Home</h2>
          <h1 className="text-xl">{">"}</h1>
          <h2 className="text-xl text-yellow-600">Artworks</h2>
        </div>
      </nav>
      <div className="flex h-full">
        <div className="leftbar hidden lg:block h-full w-1/6 relative px-12 py-8">
          <h1 className="text-2xl font-bold relative">
            Filters
            <span className="absolute bottom-0 left-0 h-1 w-auto bg-black"></span>
          </h1>
          <h2 className="text-xl mt-8 font-black"> Price</h2>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            Below 10,000
            <br />
          </label>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            10,000-25,000
            <br />
          </label>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            25,000-50,000
            <br />
          </label>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            50,000-1,00,000
            <br />
          </label>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            Above 1,00,000
            <br />
          </label>
          <h1 className="text-2xl font-bold relative mt-8">Sort By Date</h1>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            Newest
            <br />
          </label>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            Oldest
            <br />
          </label>
          <h1 className="text-2xl font-bold relative mt-8">Sort By Date</h1>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            High to Low
            <br />
          </label>
          <label className="text-sm">
            <input type="radio" name="below" className="m-1" />
            Low to High
            <br />
          </label>
          <button className="my-10 border-2 rounded-xl border-black p-2">
            Reset Filters
          </button>
        </div>
        <div className="rightbar border-l-2 border-black w-auto lg:w-5/6">
          <h1 className="text-4xl m-4 font-extrabold text-center">
            OUR EXQUISITE ART
            <br />
            COLLECTION
          </h1>
          <div className=" h-1 w-auto mx-2 bg-yellow-600"></div>
          <h1 className="text-lg text-center p-4 m-4 font-extrabold">
            Acquire original art from our online art gallery. Take a look at our
            vast collection of artwork created by artists from across the world.
          </h1>
          <div className=" h-1 w-30 mx-2 bg-yellow-600"></div>
          <div className="lg:hidden flex buttons justify-end pt-2">
            <img
              src={`./buttons/double-${double}.png`}
              className="DoubleCol h-4 mx-2"
              onClick={handleDouble}
            ></img>
            <img
              src={`./buttons/single-${single}.png`}
              className="SingleCol h-4 mr-8"
              onClick={handleSingle}
            ></img>
          </div>
          <div className="productTable grid grid-cols-2 lg:grid-cols-3 flex flex-wrap border-l-2 border-black p-3 items-center justify-items-center">
            {data &&
              data.products.map((currProduct) => (
                <Product
                  description={currProduct.description}
                  title={currProduct.title}
                  price={currProduct.price}
                  src={currProduct.images[0]}
                  key={currProduct.id}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
