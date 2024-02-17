import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App font-mono h-screen w-screen">
      <nav>
        <div className="first flex justify-center bg-black gap-10 h-12">
          <img src="./logos/dirums.png" className="w-22 h-10"></img>
          <input
            type="text"
            name="searchTerm"
            className="bg-gray-300 w-1/2 h-5 my-4"
          ></input>
          <img src="./logos/wishlist.png" className="w-10 h-5 my-4"></img>
        </div>
        <div className="second flex justify-center gap-10 h-8 bg-yellow-600  py-1 text-white">
          <h2>Artwork for Wall</h2>
          <h2>Folk Art & Craft</h2>
          <h2>Wildlife Paintings</h2>
          <h2>Home & Living</h2>
          <h2>Painting for Living Room</h2>
          <h2>Religious Paintings</h2>
        </div>
        <div className="h-10 flex gap-2 bg-gray-300 px-10 py-2">
          <h2 className="text-xl">Home</h2>
          <h1 className="text-xl">{">"}</h1>
          <h2 className="text-xl text-yellow-600">Artworks</h2>
        </div>
      </nav>
      <div className="flex h-full h-5/6">
        <div className="rightbar w-1/6 border-r-2 border-black "></div>
        <div className="leftbar w-5/6"></div>
      </div>
    </div>
  );
}

export default App;
