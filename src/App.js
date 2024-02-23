import "./App.css";

function App() {
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
            <img src="./images/wishlist.png" className="w-10 h-5 my-4"></img>
          </div>
        </div>
        <div className="second flex justify-center gap-10 h-auto w-full bg-yellow-600">
          <div className="group">
            <h2 className="text-white group-hover:text-yellow-600 hover:bg-gray-300 p-2">
              Artworks
            </h2>
            <div className="opacity-0 scale-0 group-hover:opacity-100 shadow-lg mb-2 group-hover:scale-100 w-1/2 grid grid-cols-3 gap-2 p-4 bg-gray-100 text-black absolute">
              <div className="column1">
                <h3 className="font-bold m-2 text-lg">Paintings</h3>
                <h3 className="m-2">Acrylic</h3>
                <h3 className="m-2">WaterColor</h3>
                <h3 className="m-2">Oil Paintings</h3>
                <h3 className="m-2">Mix Media Paintings</h3>
                <h3 className="m-2">Ink on Paper Paintings</h3>
                <h3 className="m-2">Wildlife Paintings</h3>
                <h3 className="m-2">Natural Landscape</h3>
                <h3 className="m-2">Home Office Art</h3>
              </div>
              <div className="column2">
                <h3 className="font-bold m-2 text-lg">Folk Art</h3>
                <h3 className="m-2">Madhubani Art</h3>
                <h3 className="m-2">Mandala Art</h3>
                <h3 className="m-2">Gond Art</h3>
                <h3 className="m-2">Bhil Art</h3>
                <h3 className="m-2">Dhokra Art</h3>
                <h3 className="m-2">Pattachitra Art</h3>
              </div>
              <div className="column3">
                <h3 className="font-bold m-2 text-lg">Religious</h3>
                <h3 className="m-2">Lord Buddha Paintings</h3>
                <h3 className="m-2">Lord Krishna Paintings</h3>
                <h3 className="m-2">Lord Shiva Paintings</h3>
                <h3 className="m-2">Lord Vishnu Paintings</h3>
                <h3 className="m-2">Lord Ganesha Paintings</h3>
                <h3 className="m-2">Lord Hanuman Paintings</h3>
                <h3 className="m-2">Lord Ram Paintings</h3>
                <h3 className="m-2">Maa Durga Paintings</h3>
                <h3 className="m-2">Maa Lakshmi Paintings</h3>
                <h3 className="m-2">Maa Saraswati Paintings</h3>
              </div>
            </div>
          </div>
          <div className="group">
            <h2 className="text-white  hover:text-yellow-600 hover:bg-gray-300 p-2">
              Home & Living
            </h2>
            <div className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 w-full h-1/2 shadow-lg mb-2 left-0 grid grid-cols-6 flex justify-around gap-2 p-8 bg-gray-100 text-black absolute">
              <div className="column1">
                <h3 className="font-bold m-2 text-lg">Wall Decor</h3>
                <h3 className="m-2">Wall Art & Paintings</h3>
                <h3 className="m-2">Wall Plates</h3>
                <h3 className="m-2">Embroidery Hoops</h3>
                <h3 className="m-2">Photo Frames</h3>
                <h3 className="font-bold mt-4 mb-2 mx-2 text-lg">
                  Wall Clocks
                </h3>
                <h3 className="m-2">Modern Clocks</h3>
                <h3 className="m-2">Resin Clocks</h3>
                <h3 className="m-2">Lippan Clocks</h3>
              </div>
              <div className="column2">
                <h3 className="font-bold m-2 text-lg">Table Decor</h3>
                <h3 className="m-2">Decorative Trays</h3>
                <h3 className="m-2">Elegant Coasters</h3>
                <h3 className="m-2">Dhokra</h3>
                <h3 className="m-2">Vases</h3>
                <h3 className="font-bold mt-4 mb-2 mx-2 text-lg">Trays</h3>
                <h3 className="m-2">Wooden Trays</h3>
                <h3 className="m-2">Pattachitra Trays</h3>
                <h3 className="m-2">Resin Trays</h3>
                <h3 className="m-2">Coasters</h3>
              </div>
              <div className="column3">
                <h3 className="font-bold m-2 text-lg">Resin</h3>
                <h3 className="m-2">Trays</h3>
                <h3 className="m-2">Tea Light Holders</h3>
                <h3 className="m-2">Pooja Thalis</h3>
                <h3 className="m-2">Key Chains</h3>
                <h3 className="m-2">Coasters</h3>
                <h3 className="m-2">Photo Frames</h3>
                <h3 className="m-2">Clocks</h3>
              </div>
              <div className="column4">
                <h3 className="font-bold m-2 text-lg">Lippan</h3>
                <h3 className="m-2">Wall Hangings</h3>
                <h3 className="m-2">Photo Frames</h3>
                <h3 className="m-2">Tea Light Holders</h3>
                <h3 className="m-2">Mirror</h3>
                <h3 className="font-bold mt-4 mb-2 mx-2 text-lg">Candles</h3>
                <h3 className="m-2">Decorative Candles</h3>
                <h3 className="m-2">Tea Light Candles</h3>
              </div>
              <div className="column5">
                <h3 className="font-bold m-2 text-lg">Photo Frames</h3>
                <h3 className="m-2">Modern Frames</h3>
                <h3 className="m-2">Resin Frames</h3>
                <h3 className="m-2">Lippan Frames</h3>
                <h3 className="font-bold mt-4 mb-2 mx-2 text-lg">
                  Candles Holders
                </h3>
                <h3 className="m-2">Resin Candle Holders</h3>
                <h3 className="m-2">Tea Light Holders</h3>
              </div>
              <div className="column6">
                <h3 className="font-bold m-2 text-lg">Pooja Essentials</h3>
                <h3 className="m-2">Spiritual Wall Hangings</h3>
                <h3 className="m-2">Pooja Thalis</h3>
                <h3 className="m-2">Diya</h3>
                <h3 className="m-2">Incense Burner</h3>
                <h3 className="m-2">God Idols</h3>
                <h3 className="font-bold mt-4 mb-2 mx-2 text-lg">
                  Decorative Pot & Planters
                </h3>
                <h3 className="m-2">Terracotta Planters</h3>
                <h3 className="m-2">Terracotta Pots</h3>
              </div>
            </div>
          </div>
          <div className="group">
            <h2 className="text-white  group-hover:text-yellow-600 group-hover:bg-gray-300 p-2">
              Jwellery Accessories
            </h2>
            <div className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 grid grid-cols-2 gap-2 p-2 bg-gray-100 text-black absolute">
              <div className="column1">
                <h3 className="font-bold m-2 text-lg">Earrings</h3>
                <h3 className="m-2">Resin</h3>
                <h3 className="m-2">Quiling</h3>
                <h3 className="m-2">Bead & Mirror</h3>
                <h3 className="m-2">Clay</h3>
                <h3 className="m-2">Fabric</h3>
                <h3 className="m-2">Keyrings</h3>
              </div>
              <div className="column2">
                <h3 className="font-bold m-2 text-lg">Jwellery Set</h3>
                <h3 className="m-2">Resin Jwellery</h3>
                <h3 className="m-2">Quiling Jwellery</h3>
                <h3 className="m-2">Sea-Sell Jwellery</h3>
                <h3 className="m-2">Clay Jwellery</h3>
                <h3 className="m-2">Fabric Jwellery</h3>
                <h3 className="m-2">Wood Jwellery</h3>
                <h3 className="m-2">Kundan Jwellery</h3>
              </div>
            </div>
          </div>
          <div className="group">
            <h2 className="text-white group-hover:text-yellow-600 group-hover:bg-gray-300 p-2">
              Kitchen & Dining
            </h2>
            <div className="opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 w-1/3 grid grid-cols-3 gap-2 p-2 bg-gray-100 text-black absolute">
              <div className="column1">
                <h3 className="font-bold m-2 text-lg">DrinkWare</h3>
                <h3 className="m-2">Coffee Mugs</h3>
                <h3 className="m-2">Water Bottles</h3>
                <h3 className="m-2">Teacups Set</h3>
                <h3 className="m-2">Glass Set</h3>
                <h3 className="m-2">Fabric</h3>
              </div>
              <div className="column2">
                <h3 className="font-bold m-2 text-lg">ServeWare</h3>
                <h3 className="m-2">Serving Tray</h3>
                <h3 className="m-2">Tray Set</h3>
              </div>
              <div className="column3">
                <h3 className="font-bold m-2 text-lg">TableWare</h3>
                <h3 className="m-2">Coasters</h3>
                <h3 className="m-2">Kettle</h3>
              </div>
            </div>
          </div>
          <div className="group relative">
            <h2 className="text-white p-2 group-hover:bg-gray-300 group-hover:text-yellow-600">
              Gifting
            </h2>
            <div className="p-2 hidden group-hover:block h-50 w-50 bg-gray-100 text-black absolute grid grid-cols-1 gap-4">
              <h3 className="m-2">Corporate Gifts</h3>
              <h3 className="m-2">Anniversary Gifts</h3>
              <h3 className="m-2">Birthday Gifts</h3>
              <h3 className="m-2">Gift Hampers</h3>
              <h3 className="m-2">Personalized Gifts</h3>
              <h3 className="m-2">Valentine's Day Special</h3>
            </div>
          </div>
          <div className="group relative">
            <h2 className="text-white group-hover:text-yellow-600 group-hover:bg-gray-300 p-2">
              Art & Collectibles
            </h2>
            <div className="hidden absolute group-hover:block h-50 w-full bg-gray-100 text-black grid grid-cols-1 gap-4 text-center">
              <h3 className="m-2">Sculpture</h3>
              <h3 className="m-2">Masterpices</h3>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-45 w-full">
        <img src="./images/home.png" className="h-full w-full"></img>
      </div>
    </div>
  );
}

export default App;
