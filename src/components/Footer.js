import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gradient mb-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-transparent bg-clip-text">
            MyStore
          </h2>
          <p className="text-sm text-gray-400">
            The best online shopping experience. High-quality products and top-notch customer support.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-pink-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-pink-300 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-pink-300 transition">Products</Link></li>
            <li><Link to="/cart" className="hover:text-pink-300 transition">Cart</Link></li>
            <li><Link to="/orders" className="hover:text-pink-300 transition">My Orders</Link></li>
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-blue-400 mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-blue-300 transition">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-blue-300 transition">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-300 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-300 transition">Terms & Conditions</Link></li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-green-400 mb-3">Follow Us</h3>
          <div className="flex space-x-5 text-2xl">
            <a href="#" className="hover:text-emerald-400 transition"><FaGlobe /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">MyStore</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
