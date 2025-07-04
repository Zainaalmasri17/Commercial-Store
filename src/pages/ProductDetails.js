import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, loading, fetchProducts } = useProductStore();
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const product = products.find((p) => p.id === parseInt(id));

  // Mock functions for UI only
  const handleAddToCart = () => {
    setIsInCart(true);
    setQuantity(1);
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      handleRemoveFromCart();
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (!product)
    return <p className="text-center py-8 text-gray-500">Product not found</p>;

  return (
    <div className="min-h-screen bg-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Product Information */}
        <div className="bg-white rounded-xl shadow-md p-6 flex-1">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 flex flex-col">
              <span className="bg-blue-700 text-white text-xs px-2 py-1 rounded self-start mb-3">
                {product.category}
              </span>

              <h4 className="text-xl font-semibold mb-2">{product.title}</h4>

              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((i) =>
                  product.rating.rate >= i ? (
                    <FaStar
                      key={i}
                      className="inline-block mr-0.5"
                      color="#f8b400"
                      size={16}
                    />
                  ) : product.rating.rate >= i - 0.5 ? (
                    <FaStarHalfAlt
                      key={i}
                      className="inline-block mr-0.5"
                      color="#f8b400"
                      size={16}
                    />
                  ) : (
                    <FaRegStar
                      key={i}
                      className="inline-block mr-0.5"
                      color="#f8b400"
                      size={16}
                    />
                  )
                )}
                <span className="ml-1 text-gray-600">
                  ({product.rating.rate})
                </span>
              </div>

              <h4 className="text-2xl font-bold text-green-600 mb-4">
                ${product.price}
              </h4>

              <h5 className="text-gray-500 text-sm mb-1">Description:</h5>
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.description}
              </p>

              {/* Cart Buttons - UI Only */}
              <div className="mt-6 flex items-center gap-4">
                {isInCart ? (
                  <>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleDecreaseQuantity}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{quantity}</span>
                      <button
                        onClick={handleIncreaseQuantity}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleRemoveFromCart}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
