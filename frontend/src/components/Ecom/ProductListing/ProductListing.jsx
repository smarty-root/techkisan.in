import React, { useState } from "react";
import { Search, ShoppingCart, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/logo.png";

// Mock product data
const products = [
  {
    id: 1,
    name: "Modern Desk Lamp",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800",
    category: "Lighting",
  },
  {
    id: 2,
    name: "Ergonomic Chair",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
    category: "Furniture",
  },
  {
    id: 3,
    name: "Minimalist Vase",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&q=80&w=800",
    category: "Decor",
  },
  {
    id: 4,
    name: "Wooden Side Table",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&q=80&w=800",
    category: "Furniture",
  },
  {
    id: 5,
    name: "Ceramic Plant Pot",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=800",
    category: "Decor",
  },
  {
    id: 6,
    name: "Wall Clock",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800",
    category: "Decor",
  },
];

function ProductListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex flex-row items-center gap-4">
              <img src={LOGO} alt="LOGO" className="w-40 h-20 object-contain" />
              <Link to={"/"} className="primary-btn ">
              Home
            </Link>
            </div>

            
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full relative flex-shrink-0">
                <Link to="/store/cart">
                  <ShoppingCart className="w-6 h-6 text-gray-700" />
                </Link>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
            <select className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow min-w-[150px]">
              <option>All Categories</option>
              <option>Filter 1</option>
              <option>Filter 2</option>
              <option>Filter 3</option>
            </select>
          </div>
          <select className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Mobile Filters Panel */}
        {isMobileFiltersOpen && (
          <div className="sm:hidden bg-white rounded-lg shadow-md p-4 mb-6">
            <h3 className="font-semibold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                  <option>All Prices</option>
                  <option>Under $50</option>
                  <option>$50 - $100</option>
                  <option>$100 - $200</option>
                  <option>$200+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <div className="space-y-2">
                  {["All", "Furniture", "Lighting", "Decor"].map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="ml-2">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </span>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProductListing;
