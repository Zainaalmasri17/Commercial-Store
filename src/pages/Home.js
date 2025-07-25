import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import Card from "../components/Card";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const featuredProducts = products.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-5 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center animate-fade-up animate-once">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-md">
              Welcome to Our Store
            </h1>
            <p className="text-xl mb-6 text-gray-100 drop-shadow-sm">
              Discover amazing products at unbeatable prices.
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 shadow-lg transition-all flex items-center mx-auto md:mx-0"
            >
              Shop Now <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-left animate-once">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=870&auto=format&fit=crop"
              alt="Featured"
              className="rounded-xl shadow-2xl w-full max-w-[400px] hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto py-16 px-5 bg-white animate-fade-up animate-once">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-blue-900">Featured Products</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition"
          >
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full max-w-[280px] bg-white rounded-xl overflow-hidden shadow-lg animate-pulse"
                >
                  <div className="w-full h-[200px] bg-gradient-to-r from-gray-200 to-gray-300"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-16 bg-gray-300 rounded"></div>
                      <div className="h-4 w-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.title}
                rating={product.rating.rate}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>

      {/* Promo Section */}
      <div className="max-w-6xl mx-auto py-16 px-5">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-10 text-white shadow-xl animate-fade-up animate-once">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">🎉 Summer Sale!</h2>
            <p className="text-lg md:text-xl mb-6">
              Up to <span className="font-bold">50%</span> off on selected items. Limited time offer!
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop the Sale
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
