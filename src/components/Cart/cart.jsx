import { useCart } from "./cartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    navigate("/CartStep"); // Navigate to Checkout page
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-500">₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Buy Now Button */}
          <div className="text-right mt-4">
            <button
              onClick={handleBuyNow}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
