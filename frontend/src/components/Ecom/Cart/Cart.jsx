import React from 'react';
import { ShoppingCart, Minus, Plus, Trash2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Cart() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 299.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/store" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/store/cart" className="hover:text-primary">Cart</Link>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <ShoppingCart className="w-8 h-8 text-primary mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.length === 0 ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-primary font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Minus className="w-5 h-5 text-secondary" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="w-5 h-5 text-secondary" />
                        </button>
                        <button
                          onClick={() => updateQuantity(item.id, -item.quantity)}
                          className="p-1 rounded-full hover:bg-gray-100 ml-2"
                        >
                          <Trash2 className="w-5 h-5 text-red-500" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">Total</span>
                    <span className="text-lg font-bold text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link to="/store/placeorder">
                <button
                  className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Proceed to Checkout
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;