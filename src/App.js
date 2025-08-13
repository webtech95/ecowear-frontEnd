import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { X, ShoppingBag, Users } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/header";
import Footer from "./components/Footer";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Shop from "./components/subPages/shop";
import Contact from "./components/pages/contact";
import Register from "./components/subPages/ragistrationpage";
import Login from "./components/subPages/login";
import Cart from "./components/Cart/cart";
import MenPage from "./components/subPages/MenPage";
import WomenPage from "./components/subPages/WomenPage";
import KidsPage from "./components/subPages/KidsPage";
import OrderConfirmation from "./components/pages/OrderConfirmation";
import CartStep from "./components/pages/ProductCheckout";
import PlaceOrderPage from "./components/pages/PlaceOrderPage";
import PaymentPage from "./components/pages/PaymentPage";

function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedBefore");
    if (!hasVisited) setTimeout(() => setShowWelcomePopup(true), 500);
  }, []);

  const handleClosePopup = () => {
    setShowWelcomePopup(false);
    sessionStorage.setItem("hasVisitedBefore", "true");
  };

  const handleGetStarted = () => {
    handleClosePopup();
    navigate("/login");
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={1000} theme="light" />

      {showWelcomePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome to EcoWear!</h2>
              <p className="text-gray-600 mb-8">
                Discover eco-friendly fashion and enjoy a seamless shopping experience.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleGetStarted}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
                >
                  Continue to Login
                </button>
                <button
                  onClick={handleClosePopup}
                  className="w-full text-gray-600 py-2 font-medium hover:text-gray-800"
                >
                  Close
                </button>
              </div>
              <div className="flex items-center justify-center mt-6 text-xs text-gray-500">
                <Users className="w-4 h-4 mr-1" />
                <span>Join 50,000+ happy customers</span>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes fade-in {
              from { opacity: 0; transform: scale(0.95); }
              to { opacity: 1; transform: scale(1); }
            }
            .animate-fade-in { animation: fade-in 0.3s ease-out; }
          `}</style>
        </div>
      )}

      <div className="bg-white text-gray-900 min-h-screen">
        <Header />
        <Routes>
          <Route path="/ecowear" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/CartStep" element={<CartStep />} />
          <Route path="/place-order" element={<PlaceOrderPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
