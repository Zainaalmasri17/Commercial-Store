import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-500 transition-colors duration-200";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-700 flex items-center gap-2 hover:text-indigo-900 transition duration-300"
        >
          <span role="img" aria-label="store" className="text-3xl animate-bounce">
            🛍️
          </span>
          <span>MyStore</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>
          <NavLink to="/cart" className={navLinkClass}>
            Cart
          </NavLink>
          <NavLink to="/orders" className={navLinkClass}>
            Orders
          </NavLink>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <NavLink
            to="/login"

            className="text-gray-600 hover:text-indigo-600 transition"

          >
            <FaSignInAlt />
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-blue-600 transition duration-300 shadow-md"
          >
            <FaUserPlus />
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-md"
          >

            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/products" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Products
            </NavLink>
            <NavLink to="/cart" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Cart
            </NavLink>
            <NavLink to="/orders" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Orders
            </NavLink>
            <NavLink to="/login" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              <FaSignInAlt />
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:from-purple-600 hover:to-blue-600 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserPlus />
              Sign Up
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
