import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import image from "./images/Green and White Conceptual New Look Fashion Blog Banner.webp";
import { useEffect, useState } from "react";
import OrganicPage from "../subPages/OrganicPage";
import PlasticPackagingPage from "../subPages/PlasticPackagingPage";
import FairWagesPage from "../subPages/FairWagesPage";
import TimelessDesignPage from "../subPages/TimelessDesignPage";
import img11 from "../pages/images/11.webp";
import img12 from "../pages/images/12.webp";
import img13 from "../pages/images/13.webp";
import img14 from "../pages/images/14.webp";
import img15 from "../pages/images/15.webp";
import img16 from "../pages/images/16.webp";
import img17 from "../pages/images/17.webp";
import img18 from "../pages/images/18.webp";
import img19 from "../pages/images/19.webp";
import img20 from "../pages/images/20.webp";
import Banner from "../pages/images/Banner2.webp";


const CarouselImages = [
  { id: 1, image: img11 },
  { id: 2, image: img12 },
  { id: 3, image: img13 },
  { id: 4, image: img14 },
  { id: 5, image: img15 },
  { id: 6, image: img16 },
  { id: 7, image: img17 },
  { id: 8, image: img18 },
  { id: 9, image: img19 },
  { id: 10, image: img20 },
];

const About = () => {
  const [activeModal, setActiveModal] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="bg-white text-gray-800">
      <section className="w-full relative z-0 m-0 p-0 overflow-hidden">

        {isMobile ? (
          <div className="w-full h-auto">
            <img
              src={Banner}
              alt="Banner"
              className="w-full h-auto object-cover"
            />
          </div>
        ) : (<Swiper
          modules={[Autoplay, Navigation]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          className="w-full h-full"
        >
          {CarouselImages.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.image}
                alt={`Slide ${img.id}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        )}
      </section>

      <section className="relative -mt-10 z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 bg-white/60 backdrop-blur-md rounded-xl shadow text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Elevate Your Style with <span className="text-green-600">EcoWear</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Discover sustainable fashion designed for comfort, crafted with care, and committed to a better planet.
          </p>
          <Link to="/shop">
            <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg hover:bg-green-700 transition shadow-md">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About EcoWear</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At EcoWear, we believe fashion should feel good — not just on your skin, but in your soul. We create sustainable, ethically produced clothing that blends comfort, style, and environmental responsibility.
        </p>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img src={image} alt="EcoWear values" className="w-full rounded-xl shadow-md" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Sustainability in Every Thread</h3>
            <p className="text-gray-700 mb-4">
              Our mission is to reduce fashion waste by creating long-lasting, biodegradable clothing from organic materials. We source fabrics responsibly and collaborate only with certified ethical partners.
            </p>
            <p className="text-gray-700">
              EcoWear is more than a brand — it's a movement for a cleaner, kinder, and more beautiful fashion future.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose <span className="text-green-600">EcoWear</span>?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { title: "100% Organic", desc: "All our fabrics are GOTS certified organic.", modal: "organic" },
            { title: "Plastic-Free Packaging", desc: "We use compostable & recyclable packaging.", modal: "packaging" },
            { title: "Fair Wages", desc: "Fair pay and safe conditions for every worker.", modal: "wages" },
            { title: "Timeless Design", desc: "Durable, trend-proof, comfortable fashion.", modal: "design" }
          ].map(({ title, desc, modal }) => (
            <div
              key={modal}
              onClick={() => setActiveModal(modal)}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition cursor-pointer"
            >
              <h4 className="text-xl font-semibold mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-6 text-base md:text-lg text-gray-700 text-justify">
          <p>
            <strong>EcoWear</strong> crafts garments with deep commitment to sustainability, ethics, and timeless design. Our organic fabrics like GOTS cotton, bamboo, and hemp protect ecosystems and reduce waste.
          </p>
          <p>
            <strong>Plastic-free packaging</strong> and <strong>fair labor</strong> aren't trends — they're non-negotiables. Every item reflects our belief in clean fashion.
          </p>
          <p>
            With minimalist design and maximum quality, our clothes are made to last — for you and for the planet.
          </p>
        </div>
      </section>

      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-auto pt-20">
          <div className="bg-white max-w-4xl w-full mx-4 p-6 rounded-xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              &times;
            </button>
            {activeModal === "organic" && <OrganicPage />}
            {activeModal === "packaging" && <PlasticPackagingPage />}
            {activeModal === "wages" && <FairWagesPage />}
            {activeModal === "design" && <TimelessDesignPage />}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
