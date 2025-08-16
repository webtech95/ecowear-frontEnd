import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiApplepay } from "react-icons/si";
import { MdOutlineLocalShipping, MdOutlinePayment, MdOutlineSupportAgent } from "react-icons/md";
import { BiGift } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 border-b border-gray-700 pb-10">
          {[
            {
              icon: <MdOutlineLocalShipping className="text-3xl text-green-500" />,
              title: "Free Shipping",
              desc: "On orders over ₹1000",
            },
            {
              icon: <MdOutlinePayment className="text-3xl text-green-500" />,
              title: "Secure Payment",
              desc: "100% safe & encrypted",
            },
            {
              icon: <MdOutlineSupportAgent className="text-3xl text-green-500" />,
              title: "24/7 Support",
              desc: "Dedicated help team",
            },
            {
              icon: <BiGift className="text-3xl text-green-500" />,
              title: "Gift Cards",
              desc: "Perfect gifts for loved ones",
            },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              {item.icon}
              <div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 pb-6">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About EcoWear</h3>
            <p className="text-sm text-gray-400 mb-4">
              We deliver timeless fashion using 100% organic fabrics, plastic-free packaging, and fair wages — built for conscious living.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, url: "https://facebook.com" },
                { icon: FaTwitter, url: "https://twitter.com" },
                { icon: FaInstagram, url: "https://instagram.com" },
                { icon: FaPinterest, url: "https://pinterest.com" },
                { icon: FaYoutube, url: "https://youtube.com" },
              ].map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "Shipping Policy", path: "/shipping-policy" },
                { name: "Returns & Refunds", path: "/returns" },
                { name: "Size Guide", path: "/size-guide" },
                { name: "FAQs", path: "/faqs" },
                { name: "Privacy Policy", path: "/privacy-policy" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get updates on new arrivals and exclusive discounts.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-2 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EcoWear. All rights reserved.
          </p>
          <div className="flex space-x-5 text-gray-400 text-3xl">
            <SiVisa className="hover:text-white transition" title="Visa" />
            <SiMastercard className="hover:text-white transition" title="Mastercard" />
            <SiPaypal className="hover:text-white transition" title="PayPal" />
            <SiApplepay className="hover:text-white transition" title="Apple Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
