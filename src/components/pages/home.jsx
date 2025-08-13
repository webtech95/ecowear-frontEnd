import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import ProductCard from "../pages/product";
import { FaMale, FaFemale, FaChild } from "react-icons/fa";

// Images
import Arrivalsimgs1 from "../pages/images/imgs1.webp";
import Arrivalsimgs2 from "../pages/images/imgs19.webp";
import Arrivalsimgs3 from "../pages/images/imgs8.webp";
import Arrivalsimgs4 from "../pages/images/imgs22.webp";
import img1 from "../pages/images/1.webp"
import img2 from "../pages/images/2.webp"
import img3 from "../pages/images/3.webp"
import img4 from "../pages/images/4.webp"
import img5 from "../pages/images/5.webp"
import img6 from "../pages/images/6.webp"
import img7 from "../pages/images/7.webp"
import img8 from "../pages/images/8.webp"
import img9 from "../pages/images/9.webp"
import img10 from "../pages/images/10.webp"

const HomeCrousalImages = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
];

const Arrivals = [
  { id: 1, name: "Crimson Bomber Jacket", price: 1499, image: Arrivalsimgs1 },
  { id: 2, name: "Peach Petal Kurti", price: 699, image: Arrivalsimgs2 },
  { id: 3, name: "Midnight Mirror Kurti", price: 529, image: Arrivalsimgs3 },
  { id: 4, name: "Teal Casual Button T-shirt", price: 349, image: Arrivalsimgs4 },
];

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

      {/* Hero Carousel */}
      <section className="w-full h-[70vh] relative z-0">
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          className="w-full h-full"
        >
          {HomeCrousalImages.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.image}
                alt={`Slide ${img.id}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elevate Your Style with <span className="text-green-600">EcoWear</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Sustainable fashion for modern living.
          </p>
          <Link to="/shop">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Link to="/Men">
            <div className="hover:shadow-xl transition p-6 rounded-2xl bg-gray-100 text-center cursor-pointer">
              <FaMale className="text-5xl text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold">Men</h3>
              <p className="text-gray-500">Explore eco-friendly men's fashion.</p>
            </div>
          </Link>

          <Link to="/women">
            <div className="hover:shadow-xl transition p-6 rounded-2xl bg-gray-100 text-center cursor-pointer">
              <FaFemale className="text-5xl text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold">Women</h3>
              <p className="text-gray-500">Discover sustainable styles for women.</p>
            </div>
          </Link>

          <Link to="/Kids">
            <div className="hover:shadow-xl transition p-6 rounded-2xl bg-gray-100 text-center cursor-pointer">
              <FaChild className="text-5xl text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold">Kids</h3>
              <p className="text-gray-500">Soft, safe, and stylish outfits for kids.</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
