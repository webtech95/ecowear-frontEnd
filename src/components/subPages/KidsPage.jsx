import React from "react";
import ProductCard from "../pages/product";
import { Products } from "../subPages/shop";

const KidsPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

    <section className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kids' Collection</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Safe, soft, and sustainable — our kids’ line is crafted from gentle organic materials and vibrant styles that kids love.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">Shop Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default KidsPage;
