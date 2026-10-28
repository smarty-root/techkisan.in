import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Package, 
  MapPin,
  Clock,
  CheckCircle2
} from 'lucide-react';

function PlaceOrder() {
  const [step, setStep] = React.useState(1);
  const [shippingMethod, setShippingMethod] = React.useState('standard');
  const [paymentMethod, setPaymentMethod] = React.useState('card');

  const cartItems = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80"
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 299.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = shippingMethod === 'express' ? 15.99 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Doe"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="john@example.com"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="123 Main St"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="10001"
                />
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-medium text-gray-900">Shipping Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  shippingMethod === 'standard' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="shipping"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="hidden"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-primary" />
                      <span className="font-medium text-gray-900">Standard Shipping</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">3-5 business days</span>
                    </div>
                    <p className="text-lg font-medium text-primary mt-2">FREE</p>
                  </div>
                </label>

                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  shippingMethod === 'express' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={(e) => setShippingMethod(e.target.value)}
                    className="hidden"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Package className="w-5 h-5 text-primary" />
                      <span className="font-medium text-gray-900">Express Shipping</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-500">1-2 business days</span>
                    </div>
                    <p className="text-lg font-medium text-primary mt-2">$15.99</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Payment Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="hidden"
                  />
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-900">Credit Card</span>
                  </div>
                </label>

                <label className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === 'paypal' ? 'border-primary bg-primary/5' : 'hover:border-gray-300'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="hidden"
                  />
                  <div className="flex items-center gap-3">
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg" 
                         alt="PayPal" 
                         className="h-6" />
                    <span className="font-medium text-gray-900">PayPal</span>
                  </div>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Order Review</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-gray-900">Shipping Address</h3>
                </div>
                <p className="text-gray-600">
                  John Doe<br />
                  123 Main St<br />
                  New York, NY 10001
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-gray-900">Shipping Method</h3>
                </div>
                <p className="text-gray-600">
                  {shippingMethod === 'standard' ? 'Standard Shipping (3-5 business days)' : 'Express Shipping (1-2 business days)'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border space-y-4">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <h3 className="font-medium text-gray-900">Payment Method</h3>
                </div>
                <p className="text-gray-600">
                  {paymentMethod === 'card' ? 'Credit Card ending in 3456' : 'PayPal'}
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Breadcrumb */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/store" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/store/cart" className="hover:text-primary">Cart</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900">Checkout</span>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <span className="text-sm mt-2">Shipping</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className={`h-full bg-primary transition-all ${
                step >= 2 ? 'w-full' : 'w-0'
              }`} />
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
              <span className="text-sm mt-2">Payment</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className={`h-full bg-primary transition-all ${
                step >= 3 ? 'w-full' : 'w-0'
              }`} />
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                3
              </div>
              <span className="text-sm mt-2">Review</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {renderStep()}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-sm font-medium text-primary">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-medium pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => step < 3 ? setStep(step + 1) : null}
                  className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  {step === 3 ? 'Place Order' : 'Continue'}
                </button>
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 px-4 rounded-lg transition-colors"
                  >
                    Back
                  </button>
                )}
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PlaceOrder;