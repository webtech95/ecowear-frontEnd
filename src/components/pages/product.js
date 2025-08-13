import { useCart } from "../Cart/cartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    if (!product) return null;

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
                src={product.image || ""}
                alt={product.name || "Product Image"}
                className="w-full h-60 object-cover"
            />

            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 truncate">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-lg font-medium">₹{product.price}</p>

                <div className="flex flex-col gap-3 mt-4">
                    <button
                        onClick={() => {
                            addToCart(product);
                            toast.success("Added to Cart");
                        }}
                        className="w-full border border-gray-900 text-gray-900 py-2 rounded-full font-medium hover:bg-gray-900 hover:text-white transition duration-200"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;
