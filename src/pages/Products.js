import { useEffect } from "react";
import { useProductStore } from "../store/useProductStore";
import Card from "../components/Card";

export default function Products() {
  const { products, loading, fetchProducts } = useProductStore();

  const showData = products.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      img={product.image}
      title={product.title}
      rating={product.rating.rate}
      price={product.price}
    />
  ));

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const skeletonRows = Array(6)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="w-full max-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg animate-fade animate-once animate-duration-700 transition-transform hover:scale-105 cursor-pointer"
      >
        <div className="w-full h-[200px] bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
        <div className="p-4">
          <div className="h-4 bg-gray-300 rounded animate-pulse mb-2"></div>
          <div className="flex justify-between items-center">
            <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-4 w-16 bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="p-5 min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-all duration-300">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8 animate-fade-down animate-once animate-duration-500">
        Browse Our Products
      </h1>
      <div className="flex flex-wrap justify-center gap-6 w-full box-border">
        {loading ? skeletonRows : showData}
      </div>
    </div>
  );
}
