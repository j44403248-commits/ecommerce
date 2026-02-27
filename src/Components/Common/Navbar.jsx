import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaUser
} from "react-icons/fa";

import img1 from "../../assets/img1.avif";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearchFilter, setShowSearchFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="w-full px-6 py-4 bg-white sticky top-0 shadow-md z-40">
      <div className="flex items-center justify-between relative z-10">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">Cane</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-black font-medium items-center">

          {/* WOMEN Dropdown */}
          <li className="relative group cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-gray-600/60"
              onClick={() => navigate("/women")}
            >
              WOMEN <FaChevronDown className="text-xs" />
            </div>

            {/* Dropdown Box */}
            <div className="absolute left-0 top-full mt-4 w-150 bg-black shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              <div className="grid grid-cols-2 gap-4">

                {/* Links */}
                <div>
                  <h3 className="font-semibold mb-2 text-white">Categories</h3>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="cursor-pointer hover:text-gray-400">Dresses</li>
                    <li className="cursor-pointer hover:text-gray-400">Tops</li>
                    <li className="cursor-pointer hover:text-gray-400">Shoes</li>
                    <li className="cursor-pointer hover:text-gray-400">Bags</li>
                  </ul>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-2 h-72">
                  <img src={img1} alt="women1" className="rounded-lg object-cover" />
                  <img src={img2} alt="women2" className="rounded-lg object-cover" />
                </div>

              </div>
            </div>
          </li>

          {/* MEN Dropdown */}
          <li className="relative group cursor-pointer">
            <div
              className="flex items-center gap-1 hover:text-gray-600/60"
              onClick={() => navigate("/men")}
            >
              MEN <FaChevronDown className="text-xs" />
            </div>

            {/* Dropdown Box */}
            <div className="absolute left-0 top-full mt-4 w-150 bg-black shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              <div className="grid grid-cols-2 gap-4">

                {/* Links */}
                <div>
                  <h3 className="font-semibold mb-2 text-white">Categories</h3>
                  <ul className="space-y-2 text-sm text-white">
                    <li className="cursor-pointer hover:text-gray-400">Shirts</li>
                    <li className="cursor-pointer hover:text-gray-400">Pants</li>
                    <li className="cursor-pointer hover:text-gray-400">Shoes</li>
                    <li className="cursor-pointer hover:text-gray-400">Watches</li>
                  </ul>
                </div>

                {/* Images */}
                <div className="grid grid-cols-2 gap-2 h-72">
                  <img src={img3} alt="men1" className="rounded-lg object-cover" />
                  <img src={img4} alt="men2" className="rounded-lg object-cover" />
                </div>

              </div>
            </div>
          </li>

          <li className="hover:text-gray-600/60 cursor-pointer" onClick={() => navigate("/bundles")}>BUNDLES</li>
          <li className="hover:text-gray-600/60 cursor-pointer" onClick={() => navigate("/loyalty")}>LOYALTY REWARDS</li>
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-5">
          <FaSearch
            className="text-xl cursor-pointer hover:text-gray-600/60"
            onClick={() => setShowSearchFilter(!showSearchFilter)}
          />
          <FaUser className="text-xl cursor-pointer hover:text-gray-600/60" />

          {/* CART ICON */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart className="text-2xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-black font-medium z-10 relative">
          <li onClick={() => navigate("/women")} className="cursor-pointer">WOMEN</li>
          <li onClick={() => navigate("/men")} className="cursor-pointer">MEN</li>
          <li onClick={() => navigate("/bundles")} className="cursor-pointer">BUNDLES</li>
          <li onClick={() => navigate("/loyalty")} className="cursor-pointer">LOYALTY REWARDS</li>
          <li className="flex items-center gap-4">
            <FaSearch />
            <FaUser />
            <div onClick={() => navigate("/cart")} className="cursor-pointer">
              <FaShoppingCart />
            </div>
          </li>
        </ul>
      )}

      {/* Search Filter Section */}
      {showSearchFilter && (
        <div className="w-full bg-gray-50 border-t border-gray-200 px-6 py-4 z-30 relative">
          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={() => setShowSearchFilter(false)}
              className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;