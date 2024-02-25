const data = [
  // artworks
  {
    id: 1,
    heading: "ArtWorks",
    parent: null,
  },
  {
    id: 2,
    heading: "Paintings",
    parentId: 1, // ArtWorks
  },
  {
    id: 3,
    heading: "Acrylic",
    parentId: 7, // Paintings
  },
  {
    id: 4,
    heading: "WaterColor",
    parentId: 7, // Paintings
  },
  {
    id: 5,
    heading: "Oil Paintings",
    parentId: 7, // Paintings
  },
  {
    id: 6,
    heading: "Mix Media Paintings",
    parentId: 7, // Paintings
  },
  {
    id: 7,
    heading: "Ink On Paper Paintings",
    parentId: 7, // Paintings
  },
  {
    id: 8,
    heading: "Wildlife Paintings",
    parentId: 7, // Paintings
  },
  {
    id: 9,
    heading: "Natural Landscape",
    parentId: 7, // Paintings
  },
  {
    id: 10,
    heading: "Home Office Art",
    parentId: 7, // Paintings
  },
  {
    id: 11,
    heading: "Folk Art",
    parentId: 1,
  },
  {
    id: 12,
    heading: "Madhubani Art",
    parentId: 11,
  },
  {
    id: 13,
    heading: "Mandala Art",
    parentId: 11,
  },
  {
    id: 14,
    heading: "Gond Art",
    parentId: 11,
  },
  {
    id: 15,
    heading: "Dhokra Art",
    parentId: 11,
  },
  {
    id: 16,
    heading: "Pattachitra Art",
    parentId: 11,
  },
  {
    id: 17,
    heading: "Religious",
    parentId: 1,
  },
  {
    id: 18,
    heading: "Lord Buddha Paintings",
    parentId: 17,
  },
  {
    id: 19,
    heading: "Lord Krishna Paintings",
    parentId: 17,
  },
  {
    id: 20,
    heading: "Lord Ganesha Paintings",
    parentId: 17,
  },
  {
    id: 21,
    heading: "Lord Shiva Paintings",
    parentId: 17,
  },
  {
    id: 22,
    heading: "Lord Hanuman Paintings",
    parentId: 17,
  },
  {
    id: 23,
    heading: "Lord Vishnu Paintings",
    parentId: 17,
  },
  {
    id: 24,
    heading: "Lord Ram Paintings",
    parentId: 17,
  },
  {
    id: 25,
    heading: "Maa Durga Paintings",
    parentId: 17,
  },
  {
    id: 26,
    heading: "Maa Saraswati Paintings",
    parentId: 17,
  },
  {
    id: 27,
    heading: "Maa Laxmi Paintings",
    parentId: 17,
  },
  {
    id: 28,
    heading: "Home & Living",
    parentId: null,
  },
  {
    id: 29,
    heading: "Wall Decor",
    parentId: 28, // Home & Living
  },
  {
    id: 30,
    heading: "Wall Art & Paintings",
    parentId: 29, // Wall Decor
  },
  {
    id: 31,
    heading: "Wall Plates",
    parentId: 29, // Wall Decor
  },
  {
    id: 32,
    heading: "Embroidery Hoops",
    parentId: 29, // Wall Decor
  },
  {
    id: 33,
    heading: "Photo Frames",
    parentId: 29, // Wall Decor
  },
  {
    id: 34,
    heading: "Wall Clocks",
    parentId: 28, // Home & Living
  },
  {
    id: 35,
    heading: "Modern Clocks",
    parentId: 34, // Wall Clocks
  },
  {
    id: 36,
    heading: "Resin Clocks",
    parentId: 34, // Wall Clocks
  },
  {
    id: 37,
    heading: "Lippan Clocks",
    parentId: 34, // Wall Clocks
  },
  {
    id: 38,
    heading: "Table Decor",
    parentId: 28, // Home & Living
  },
  {
    id: 39,
    heading: "Decorative Trays",
    parentId: 38, // Table Decor
  },
  {
    id: 40,
    heading: "Elegant Coasters",
    parentId: 38, // Table Decor
  },
  {
    id: 41,
    heading: "Dhokra",
    parentId: 38, // Table Decor
  },
  {
    id: 42,
    heading: "Vases",
    parentId: 38, // Table Decor
  },
  {
    id: 43,
    heading: "Trays",
    parentId: 28, // Home & Living
  },
  {
    id: 44,
    heading: "Wooden Trays",
    parentId: 43, // Trays
  },
  {
    id: 45,
    heading: "Pattachitra Trays",
    parentId: 43, // Trays
  },
  {
    id: 46,
    heading: "Resin Trays",
    parentId: 43, // Trays
  },
  {
    id: 47,
    heading: "Resin",
    parentId: 28, // Home & Living
  },
  {
    id: 48,
    heading: "Trays",
    parentId: 47, // Resin
  },
  {
    id: 49,
    heading: "Tea Light Holders",
    parentId: 47, // Resin
  },
  {
    id: 50,
    heading: "Pooja Thalis",
    parentId: 47, // Resin
  },
  {
    id: 51,
    heading: "Key Chains",
    parentId: 47, // Resin
  },
  {
    id: 52,
    heading: "Coasters",
    parentId: 47, // Resin
  },
  {
    id: 53,
    heading: "Photo Frames",
    parentId: 47, // Resin
  },
  {
    id: 54,
    heading: "Clocks",
    parentId: 47, // Resin
  },
  {
    id: 55,
    heading: "Lippan",
    parentId: 28, // Home & Living
  },
  {
    id: 56,
    heading: "Wall Hangings",
    parentId: 55, // Lippan
  },
  {
    id: 57,
    heading: "Photo Frames",
    parentId: 55, // Lippan
  },
  {
    id: 58,
    heading: "Tea Light Holders",
    parentId: 55, // Lippan
  },
  {
    id: 59,
    heading: "Mirror",
    parentId: 55, // Lippan
  },
  {
    id: 60,
    heading: "Candles",
    parentId: 28, // Home & Living
  },
  {
    id: 61,
    heading: "Decorative Candles",
    parentId: 60, // Candles
  },
  {
    id: 62,
    heading: "Tea Light Candles",
    parentId: 60, // Candles
  },
  {
    id: 63,
    heading: "Photo Frames",
    parentId: 28, // Home & Living
  },
  {
    id: 64,
    heading: "Modern Frames",
    parentId: 63, // Photo Frames
  },
  {
    id: 65,
    heading: "Resin Frames",
    parentId: 63, // Photo Frames
  },
  {
    id: 66,
    heading: "Lippan Frames",
    parentId: 63, // Photo Frames
  },
  {
    id: 67,
    heading: "Candle Holders",
    parentId: 28, // Home & Living
  },
  {
    id: 68,
    heading: "Resin Candle Holders",
    parentId: 67, // Candle Holders
  },
  {
    id: 69,
    heading: "Tea Light Holders",
    parentId: 67, // Candle Holders
  },
  {
    id: 70,
    heading: "Pooja Essentials",
    parentId: 28, // Home & Living
  },
  {
    id: 71,
    heading: "Spiritual Wall Hangings",
    parentId: 70, // Pooja Essentials
  },
  {
    id: 72,
    heading: "Pooja Thalis",
    parentId: 70, // Pooja Essentials
  },
  {
    id: 73,
    heading: "Diya",
    parentId: 70, // Pooja Essentials
  },
  {
    id: 74,
    heading: "Incense Burners",
    parentId: 70, // Pooja Essentials
  },
  {
    id: 75,
    heading: "God Idols",
    parentId: 70, // Pooja Essentials
  },
  {
    id: 76,
    heading: "Decorative Pot & Planters",
    parentId: 28, // Home & Living
  },
  {
    id: 77,
    heading: "Teracotta Planters",
    parentId: 76, // Decorative Pot & Planters
  },
  {
    id: 78,
    heading: "Teracotta Pots",
    parentId: 76, // Decorative Pot & Planters
  },
];

export default data;
