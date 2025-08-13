import React, { useState } from 'react';
import { Check, ShoppingBag, MapPin, CreditCard, Truck, Shield, Edit, ArrowLeft } from 'lucide-react';

const PlaceOrderPage = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Sample data - in real app this would come from previous steps
    const orderDetails = {
        shipping: {
            name: 'John Smith',
            address: '123 Main Street',
            city: 'New York, NY 10001',
            method: 'Priority Shipping (3-5 days)'
        },
        payment: {
            method: 'Credit Card',
            lastFour: '4532',
            cardType: 'Visa'
        },
        items: [
            { id: 1, name: 'Wireless Bluetooth Headphones', price: 129.99, quantity: 1, image: '🎧' },
            { id: 2, name: 'Smart Watch Series 5', price: 299.99, quantity: 1, image: '⌚' },
            { id: 3, name: 'USB-C Fast Charger', price: 24.99, quantity: 2, image: '🔌' }
        ]
    };

    const subtotal = orderDetails.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = 9.99;
    const tax = subtotal * 0.08;
    const total = subtotal + shippingCost + tax;

    const handlePlaceOrder = async () => {
        setIsProcessing(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsProcessing(false);
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full text-center">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <Check className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed! 🎉</h1>
                    <p className="text-gray-600 mb-2">Thank you for your purchase!</p>
                    <p className="text-lg font-semibold text-blue-600 mb-6">Order #ORD-2024-{Math.floor(Math.random() * 10000)}</p>

                    <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-center text-green-600">
                                <Check className="w-4 h-4 mr-2" />
                                <span>Payment processed successfully</span>
                            </div>
                            <div className="flex items-center justify-center text-blue-600">
                                <span className="mr-2">📧</span>
                                <span>Confirmation email sent</span>
                            </div>
                            <div className="flex items-center justify-center text-purple-600">
                                <span className="mr-2">📦</span>
                                <span>Estimated delivery: 3-5 business days</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setOrderPlaced(false)}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg mb-4"
                    >
                        Continue Shopping
                    </button>
                    <button className="w-full text-gray-600 py-3 rounded-2xl font-medium hover:bg-gray-50 transition-colors">
                        Track Your Order
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center">
                        <ArrowLeft className="w-6 h-6 text-gray-600 mr-4 cursor-pointer hover:text-gray-800 transition-colors" />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">Review Your Order</h1>
                            <p className="text-gray-600 mt-1">Please review your order details before confirming</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Step 4 of 4</p>
                        <div className="w-32 h-2 bg-gray-200 rounded-full mt-1">
                            <div className="w-full h-2 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Order Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Shipping Information */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                                    Shipping Address
                                </h2>
                                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="font-semibold text-gray-800">{orderDetails.shipping.name}</p>
                                <p className="text-gray-600">{orderDetails.shipping.address}</p>
                                <p className="text-gray-600">{orderDetails.shipping.city}</p>
                            </div>
                        </div>

                        {/* Shipping Method */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <Truck className="w-5 h-5 mr-3 text-green-600" />
                                    Shipping Method
                                </h2>
                                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                                    <Edit className="w-4 h-4 mr-1" />
                                    Change
                                </button>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="font-semibold text-gray-800">{orderDetails.shipping.method}</p>
                                <p className="text-sm text-gray-600">Delivered by carrier</p>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                                    <CreditCard className="w-5 h-5 mr-3 text-purple-600" />
                                    Payment Method
                                </h2>
                                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                                    <Edit className="w-4 h-4 mr-1" />
                                    Change
                                </button>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4 flex items-center">
                                <div className="w-12 h-8 bg-blue-600 rounded text-white text-xs font-bold flex items-center justify-center mr-3">
                                    VISA
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">•••• •••• •••• {orderDetails.payment.lastFour}</p>
                                    <p className="text-sm text-gray-600">Expires 12/27</p>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                            <h2 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
                                <ShoppingBag className="w-5 h-5 mr-3 text-orange-600" />
                                Order Items ({orderDetails.items.reduce((sum, item) => sum + item.quantity, 0)} items)
                            </h2>
                            <div className="space-y-4">
                                {orderDetails.items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                        <div className="text-3xl">{item.image}</div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800">{item.name}</h3>
                                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                                            {item.quantity > 1 && (
                                                <p className="text-sm text-gray-500">${item.price.toFixed(2)} each</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 sticky top-8">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({orderDetails.items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span>${shippingCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                                <hr className="border-gray-200" />
                                <div className="flex justify-between text-xl font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Security Badge */}
                            <div className="flex items-center justify-center mb-6 p-3 bg-green-50 rounded-xl">
                                <Shield className="w-5 h-5 text-green-600 mr-2" />
                                <span className="text-sm text-green-700 font-medium">Secure SSL Encryption</span>
                            </div>

                            {/* Place Order Button */}
                            <button
                                onClick={handlePlaceOrder}
                                disabled={isProcessing}
                                className={`w-full py-4 rounded-2xl font-bold text-lg transition-all transform shadow-lg ${isProcessing
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 hover:scale-105'
                                    } text-white`}
                            >
                                {isProcessing ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                                        Processing...
                                    </div>
                                ) : (
                                    `Place Order - $${total.toFixed(2)}`
                                )}
                            </button>

                            <div className="mt-4 text-center">
                                <p className="text-xs text-gray-500 mb-3">
                                    By placing your order, you agree to our <span className="text-blue-600 cursor-pointer">Terms</span> and <span className="text-blue-600 cursor-pointer">Privacy Policy</span>
                                </p>
                                <div className="flex items-center justify-center space-x-4 text-xs text-gray-400">
                                    <span>30-day returns</span>
                                    <span>•</span>
                                    <span>Free exchanges</span>
                                    <span>•</span>
                                    <span>24/7 support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrderPage;