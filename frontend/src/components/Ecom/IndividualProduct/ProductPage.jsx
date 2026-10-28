import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShoppingCart,
  Star,
  Heart,
  Share2,
  ChevronRight,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = React.useState(1);
  const [activeTab, setActiveTab] = React.useState("description");

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id),
    name: id === "1" ? "Premium Wireless Headphones" : "Smart Watch Series X",
    price: id === "1" ? 199.99 : 299.99,
    originalPrice: id === "1" ? 249.99 : 349.99,
    rating: 4.8,
    reviews: 128,
    stock: 12,
    sku: id === "1" ? "WH-1000XM4" : "SW-X200",
    description:
      "Experience premium quality with our latest technology. This product features high-end materials, exceptional build quality, and innovative features that set it apart from the competition.",
    specifications: [
      { name: "Battery Life", value: "30 hours" },
      { name: "Connectivity", value: "Bluetooth 5.0" },
      { name: "Water Resistance", value: "IPX4" },
      { name: "Warranty", value: "1 Year" },
    ],
    features: [
      "Premium build quality with aerospace-grade materials",
      "Advanced noise cancellation technology",
      "Long-lasting battery life with quick charging",
      "Seamless device connectivity with multi-point pairing",
      "Voice assistant compatibility",
    ],
    image:
      id === "1"
        ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
        : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    gallery: [
      id === "1"
        ? "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
        : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a6c91816?w=400&q=80",
    ],
  };

  const [selectedImage, setSelectedImage] = React.useState(product.image);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/" className="hover:text-primary">
              Electronics
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-xl bg-white p-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square rounded-lg overflow-hidden bg-white p-2 border-2 transition-all
                    ${
                      selectedImage === image
                        ? "border-primary"
                        : "border-transparent hover:border-gray-200"
                    }`}
                >
                  <img
                    src={image}
                    alt={`Product ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <div className="flex items-baseline gap-4">
                <p className="text-3xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </p>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-medium rounded">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Product Benefits */}
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <Truck className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <Shield className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium">2-Year Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg">
                <RotateCcw className="w-6 h-6 text-primary mb-2" />
                <span className="text-sm font-medium">30-Day Returns</span>
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="space-y-4 bg-white p-6 rounded-lg">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <span>SKU: {product.sku}</span>
                <span
                  className={`${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg bg-gray-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="flex-1 bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
              <div className="flex gap-4 pt-4">
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">Save for Later</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="border rounded-lg overflow-hidden">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    activeTab === "description"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("specifications")}
                  className={`flex-1 px-4 py-3 text-sm font-medium ${
                    activeTab === "specifications"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Specifications
                </button>
              </div>
              <div className="p-6 bg-white">
                {activeTab === "description" ? (
                  <div className="space-y-4">
                    <p className="text-gray-600">{product.description}</p>
                    <h3 className="text-lg font-medium text-gray-900">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="divide-y">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="py-3 flex justify-between">
                        <span className="text-gray-600">{spec.name}</span>
                        <span className="font-medium text-gray-900">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cart Icon */}
      <Link
        to="/store/cart"
        className="fixed bottom-6 right-6 p-4 bg-primary text-white rounded-full shadow-lg hover:bg-opacity-90 transition-colors"
      >
        <ShoppingCart className="w-6 h-6" />
      </Link>
    </div>
  );
}

export default ProductPage;
