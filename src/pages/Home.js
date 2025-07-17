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

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-blue-50">
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Store
            </h1>
            <p className="text-xl mb-6">
              Discover amazing products at unbeatable prices
            </p>
            <button
              onClick={() => navigate("/products")}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Shop Now <FaArrowRight className="ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Featured products"
              className="rounded-lg shadow-2xl max-h-80 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-5 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View All <FaArrowRight className="ml-2" />
          </button>
        </div>

        {loading ? (
          <div className="flex flex-wrap justify-center gap-5 w-full box-border">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full max-w-[300px] bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <div className="w-full h-[200px] bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-5 w-full box-border">
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

      <div className="max-w-6xl mx-auto py-12 px-5">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl p-8 md:p-12 text-white">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Summer Sale!</h2>
            <p className="text-xl mb-6">
              Up to 50% off on selected items. Limited time offer.
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
