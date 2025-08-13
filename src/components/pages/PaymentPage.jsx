import { useEffect, useState } from "react";

const PaymentPage = () => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setAmount(total);
  }, []);

  const loadRazorpay = () => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your script.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: amount * 100,
      currency: "INR",
      name: "EcoWear Store",
      description: "Thank you for your purchase!",
      image: "/logo.png",
      handler: (response) => {
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Afzal Qureshi",
        email: "afzal@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "EcoWear HQ",
      },
      theme: {
        color: "#10B981",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-xl mx-auto py-10 px-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Complete Your Payment</h2>
        <p className="mb-4 text-gray-700">Total Amount: ₹{amount}</p>
        <button
          onClick={loadRazorpay}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
