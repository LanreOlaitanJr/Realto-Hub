import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-lg py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        
        {/* Logo */}
        <Link to="/">
        <img src={Logo} alt="logo" className="w-20 h-20" />
        </Link>

        {/* Search Bar */}
        <form className="bg-gray-100 px-4 py-2 rounded-full flex items-center shadow-inner border border-gray-200 focus-within:ring-2 focus-within:ring-cyan-500 transition">
          <input
            type="text"
            placeholder="Search properties, locations..."
            className="bg-transparent outline-none w-32 sm:w-64 text-gray-700 placeholder-gray-400"
          />
          <button type="submit" className="ml-2 text-cyan-700 hover:text-cyan-900">
            <FaSearch size={18} />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="hidden sm:inline hover:text-cyan-600 text-gray-700 font-medium transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hidden sm:inline hover:text-cyan-600 text-gray-700 font-medium transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="flex items-center gap-1 hover:text-cyan-600 text-gray-700 font-semibold transition">
              <FaUserCircle size={20} className="hidden sm:inline" />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;