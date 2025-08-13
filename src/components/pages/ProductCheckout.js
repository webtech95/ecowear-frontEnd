import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    name: '', address: '', city: '', postalCode: '', country: '', email: '', phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [activeStep, setActiveStep] = useState('cart');
  const [selectedUPI, setSelectedUPI] = useState('');


  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCartItems(JSON.parse(savedCart));
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.1;
  const total = subtotal + shippingCost + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item => item.id === id ? { ...item, quantity: newQuantity } : item);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = id => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleShippingChange = e => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleReview = e => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: total * 100,
      currency: "INR",
      name: "EcoWear Store",
      description: "Thank you for your purchase!",
      handler: function (response) {
        alert("Payment Successful! ID: " + response.razorpay_payment_id);
        navigate('/order-confirmation');
      },
      prefill: {
        name: shippingInfo.name,
        email: shippingInfo.email,
        contact: shippingInfo.phone,
      },
      theme: { color: "#10B981" },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 text-sm">
            {['cart', 'shipping', 'payment', 'review'].map((step, index) => (
              <button
                key={step}
                onClick={() => setActiveStep(step)}
                disabled={(index > 0 && activeStep === 'cart') || (index > 1 && activeStep === 'shipping')}
                className={`transition-colors font-medium ${activeStep === step ? 'text-green-600' : 'text-gray-500'}`}
              >
                {step.charAt(0).toUpperCase() + step.slice(1)}
              </button>
            ))}
          </div>

          {activeStep === 'cart' && (
            <div className="bg-white shadow rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold">Your Cart</h2>
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
              ) : cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded object-cover" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-500">₹{item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border rounded-md overflow-hidden">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1">-</button>
                      <span className="px-3 py-1 border-x">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1">+</button>
                    </div>
                    <p className="w-20 text-right font-medium">₹{item.price * item.quantity}</p>
                    <button onClick={() => removeItem(item.id)} className="text-red-500 hover:underline">Remove</button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setActiveStep('shipping')}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md mt-4"
              >
                Proceed to Shipping
              </button>
            </div>
          )}

          {/* Shipping Step */}
          {activeStep === 'shipping' && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setActiveStep('payment');
              }}
              className="bg-white rounded-lg shadow p-6"
            >

              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={shippingInfo.email}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleShippingChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Zip Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleShippingChange}
                    required
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={shippingInfo.phone}
                  onChange={handleShippingChange}
                  required
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setActiveStep('cart')}
                  className="px-6 py-2 border rounded-md"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
                >
                  Continue
                </button>
              </div>
            </form>
          )}


          {activeStep === 'payment' && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setActiveStep('review');
              }}
              className="bg-white rounded-lg shadow p-6"
            >
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {["debit-card", "upi"].map((method) => (
                  <label
                    key={method}
                    className={`flex items-center px-4 py-3 border rounded-md cursor-pointer ${paymentMethod === method ? 'border-green-500 bg-green-50' : 'border-gray-300'
                      }`}
                  >
                    <input
                      type="radio"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                      className="mr-3"
                    />
                    <span className="text-sm font-medium capitalize">
                      {method === "debit-card" ? "Debit Card" : "UPI"}
                    </span>
                  </label>
                ))}
              </div>

              {/* 🟩 Debit Card Fields */}
              {paymentMethod === "debit-card" && (
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      required
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      maxLength="16"
                      className="w-full px-3 py-2 border rounded"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="12/25"
                        required
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                        maxLength="3"
                        className="w-full px-3 py-2 border rounded"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* 🟦 UPI Options */}
              {paymentMethod === "upi" && (
                <div className="space-y-2 mb-6">
                  <label className="block text-sm font-medium mb-1">Select UPI Option</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {["Google Pay", "PhonePe", "Paytm", "BHIM", "Other"].map((upiOption) => (
                      <label
                        key={upiOption}
                        className="flex items-center px-4 py-2 border rounded-md cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="upiOption"
                          onChange={() => setSelectedUPI(upiOption)}
                          className="mr-3"
                        />
                        {upiOption}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setActiveStep('shipping')}
                  className="px-6 py-2 border rounded-md"
                >
                  Back
                </button>
                <button
                  type="submit"
                  onClick={handleReview}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
                >
                  Review Order
                </button>
              </div>
            </form>
          )}



          {activeStep === 'review' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Review Your Order</h2>

              {/* Shipping Info */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-1">Shipping Information</h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>{shippingInfo.name}</p>
                  <p>{shippingInfo.address}, {shippingInfo.city} - {shippingInfo.postalCode}, {shippingInfo.country}</p>
                  <p>Email: {shippingInfo.email}</p>
                  <p>Phone: {shippingInfo.phone}</p>
                </div>
              </div>

              {/* Payment Info */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-1">Payment Method</h3>
                <p className="text-sm text-gray-700 capitalize">
                  {paymentMethod.replace('-', ' ')}
                </p>
              </div>

              {/* Cart Items */}
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Items in Cart</h3>
                <div className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-4 text-sm text-gray-800"
                    >
                      {/* Image and Name */}
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <span className="font-medium">{item.name} × {item.quantity}</span>
                      </div>

                      {/* Price */}
                      <span className="font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>


              {/* Action Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setActiveStep('payment')}
                  className="px-6 py-2 border rounded-md"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handlePayment}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
                >
                  Place Order
                </button>
              </div>
            </div>
          )}

        </div>

        <div className="bg-white shadow rounded-lg p-6 h-fit sticky top-20">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shippingCost === 0 ? 'Free' : `₹${shippingCost.toFixed(2)}`}</span></div>
            <div className="flex justify-between"><span>Tax</span><span>₹{tax.toFixed(2)}</span></div>
            <div className="border-t pt-3 flex justify-between font-bold text-lg">
              <span>Total</span><span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Checkout;

