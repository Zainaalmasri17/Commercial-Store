import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";

export default function Cart() {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">عربة التسوق</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">
          السلة فارغة.{" "}
          <Link to="/products" className="text-blue-600">
            تسوق الآن
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-white shadow-md rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1 ml-6">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-green-600 text-lg mt-1">${item.price}</p>
                <p className="text-gray-600 mt-1">
                  الكمية: {item.quantity || 1}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                حذف
              </button>
            </div>
          ))}
          <Link
            to="/orders"
            className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
          >
            الانتقال إلى الطلبات
          </Link>
        </div>
      )}
    </div>
  );
}
