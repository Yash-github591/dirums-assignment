import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div className="App font-mono h-screen w-screen">
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
        <div className="second hidden lg:flex justify-center gap-10 h-8 bg-yellow-600  py-1 text-white">
          <h2 className="flex-shrink-0">Artwork for Wall</h2>
          <h2 className="flex-shrink-0">Folk Art & Craft</h2>
          <h2 className="flex-shrink-0">Wildlife Paintings</h2>
          <h2 className="flex-shrink-0">Home & Living</h2>
          <h2 className="flex-shrink-0">Painting for Living Room</h2>
          <h2 className="flex-shrink-0">Religious Paintings</h2>
        </div>
        <div className="h-10 flex gap-2 bg-gray-300 px-10 py-2">
          <h2 className="text-xl">Home</h2>
          <h1 className="text-xl">{">"}</h1>
          <h2 className="text-xl text-yellow-600">Artworks</h2>
        </div>
      </nav>
      <div className="flex h-full">
        <div className="rightbar hidden lg:block h-full w-1/6 relative px-12 py-8">
          <h1 className="text-2xl font-bold relative">
            Filters
            <span className="absolute bottom-0 left-0 h-1 w-full bg-black"></span>
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
        <div className="leftbar border-l-2 border-black w-screen lg:w-5/6">
          <h1 className="text-4xl m-4 font-extrabold text-center">
            OUR EXQUISITE ART
            <br />
            COLLECTION
          </h1>
          <div className=" h-1 w-auto mx-2 bg-yellow-600"></div>
          <h1 className="text-lg text-center p-4 m-4 font-extrabold">
            Acquire original art from our online art gallery. Take a look at our
            vast collection of artwork created by
            {/* <br /> */}
            artists from across the world.
          </h1>
          <div className=" h-1 w-30 mx-2 bg-yellow-600"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex flex-wrap border-l-2 border-black p-3 items-center justify-items-center">
            <Product ind={1} />
            <Product ind={2} />
            <Product ind={3} />
            <Product ind={4} />
            <Product ind={5} />
            <Product ind={6} />
            <Product ind={7} />
            <Product ind={7} />
            <Product ind={7} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
