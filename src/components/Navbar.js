import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600 transition-colors duration-200";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700 flex items-center gap-2"
        >
          <span role="img" aria-label="store">
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
        <div className="hidden md:flex gap-4">
          <NavLink
            to="/login"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-white shadow-md">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Cart
          </NavLink>
          <NavLink
            to="/orders"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Orders
          </NavLink>
          <NavLink
            to="/login"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
