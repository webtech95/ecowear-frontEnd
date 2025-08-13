import ProductCard from "../pages/product";
import { Products } from "../subPages/shop";

const WomenPage = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-12 md:px-8 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Women's Collection
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Elegant, breathable, and sustainable fashion made just for women. Shop our collection of eco-friendly wear crafted with natural and recycled fabrics.
        </p>

        <h2 className="text-2xl font-semibold mb-6">Shop Now</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WomenPage;
