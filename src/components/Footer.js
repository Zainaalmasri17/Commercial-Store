import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MyStore</h2>
          <p className="text-sm text-gray-400">
            أفضل تجربة تسوق إلكتروني. منتجات عالية الجودة وخدمة عملاء مميزة.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">الرئيسية</Link></li>
            <li><Link to="/products" className="hover:text-white">المنتجات</Link></li>
            <li><Link to="/cart" className="hover:text-white">السلة</Link></li>
            <li><Link to="/orders" className="hover:text-white">طلباتي</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">الدعم</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-white">اتصل بنا</Link></li>
            <li><Link to="/faq" className="hover:text-white">الأسئلة الشائعة</Link></li>
            <li><Link to="/privacy" className="hover:text-white">سياسة الخصوصية</Link></li>
            <li><Link to="/terms" className="hover:text-white">الشروط والأحكام</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">تابعنا</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyStore. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}

export default Footer;
