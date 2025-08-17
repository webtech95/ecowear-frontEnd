import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./Cart/cartContext";
import SearchBar from "../components/subPages/searchbar";
import { Products } from "./subPages/shop";
import Logo from "./pages/images/ecowear-logo.png";

const Header = () => {
  const { cartCount } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-green-700">
            <img src={Logo} alt="Ecowear" className="h-16 w-auto" />
          </Link>
          <nav className="hidden lg:flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-green-700 transition">Home</Link>
            <Link to="/shop" className="hover:text-green-700 transition">Shop</Link>
            <Link to="/about" className="hover:text-green-700 transition">About</Link>
            <Link to="/contact" className="hover:text-green-700 transition">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden md:block w-64">
              <SearchBar allProducts={Products} />
            </div>
            <button onClick={() => setShowSearch(!showSearch)} className="md:hidden" aria-label="Toggle search">
              <Search className="w-5 h-5 text-gray-700" />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <User className="w-5 h-5 text-gray-700" />
            </Link>
            <button onClick={toggleMenu} className="lg:hidden ml-2 p-1 rounded-md text-gray-700" aria-label="Toggle menu">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className={`lg:hidden fixed top-[72px] left-0 w-full bg-white shadow-md transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="flex flex-col px-4 py-4 space-y-2 text-gray-700 font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:text-green-700">Home</Link>
            <Link to="/shop" onClick={toggleMenu} className="hover:text-green-700">Shop</Link>
            <Link to="/about" onClick={toggleMenu} className="hover:text-green-700">About</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-green-700">Contact</Link>
          </nav>
        </div>
        {showSearch && (
          <div className="md:hidden px-4 py-3 bg-gray-100 border-t border-gray-200">
            <SearchBar allProducts={Products} />
          </div>
        )}
      </header>
      <div className={`${showSearch || menuOpen ? "pt-[160px]" : "pt-[90px]"} transition-all duration-300`} />
    </>
  );
};

export default Header;
