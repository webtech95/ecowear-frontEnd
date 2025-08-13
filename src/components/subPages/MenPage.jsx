import React from "react";
import ProductCard from "../pages/product";
import { Products } from "../subPages/shop";

const MenPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

    <section className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Men’s Sustainable Fashion
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our eco-conscious collection — from breathable organic cotton tees to
            stylish, ethically-made jackets. Designed for modern living with timeless appeal.
          </p>
        </div>

        {/* Info Grid Section */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Why Choose Our Men’s Line?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Every piece in our men’s collection is crafted with sustainability in mind.
              We use GOTS-certified organic cotton, natural dyes, and recycled fibers to ensure
              you not only look good — but feel good too.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Materials We Use
            </h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>100% Organic Cotton for ultimate softness</li>
              <li>Recycled Denim with modern textures</li>
              <li>Bamboo & Hemp Blends that breathe with you</li>
            </ul>
          </div>
        </div>
      </div>


      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Shop Men’s Products
        </h2>
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

export default MenPage;
