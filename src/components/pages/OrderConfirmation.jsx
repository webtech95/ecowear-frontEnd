import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Thank You for Your Order!
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mb-8">
        Your order has been placed successfully. A confirmation email has been sent to your inbox.
      </p>

      <Link to="/shop">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
          Continue Shopping
        </button>
      </Link>
    </div>
    </div>
  );
};

export default OrderConfirmation;
