import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";

export default function Orders() {
  const { cart } = useContext(CartContext);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // إنشاء طلب وهمي يحتوي على جميع المنتجات من السلة
    if (cart.length > 0) {
      const mockOrder = {
        id: `ORDER${Math.floor(Math.random() * 10000)}`, // معرف عشوائي للطلب
        date: new Date().toLocaleDateString("ar-EG"), // التاريخ بالتنسيق العربي
        items: cart,
        subtotal: cart.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
      };
      // حساب الخصم (مثلاً 10% إذا كان المجموع الفرعي > 100)
      const discount = mockOrder.subtotal > 100 ? mockOrder.subtotal * 0.1 : 0;
      setOrder({
        ...mockOrder,
        discount,
        total: mockOrder.subtotal - discount,
      });
    } else {
      setOrder(null);
    }
  }, [cart]);

  const handleBuy = () => {
    // وظيفة وهمية لإتمام الشراء
    console.log("Processing purchase:", order);
    alert("تم إتمام الشراء بنجاح! (وظيفة وهمية)");
    // يمكن إضافة منطق إضافي لاحقًا، مثل إرسال الطلب إلى API
  };

  return (
    <div className="container mx-auto p-6 bg-blue-50">
      <h1 className="text-3xl font-bold mb-6 text-center">طلباتي</h1>
      {!order || cart.length === 0 ? (
        <p className="text-gray-600 text-center">لا توجد طلبات حاليًا.</p>
      ) : (
        <div className="space-y-6">
          <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-2">طلب #{order.id}</h2>
            <p className="text-gray-600 mb-4">التاريخ: {order.date}</p>
            <h3 className="text-lg font-semibold mb-2">تفاصيل الفاتورة</h3>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center py-2 border-b">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-contain"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-gray-800 font-medium">{item.title}</p>
                    <p className="text-green-600">
                      ${item.price} × {item.quantity} = $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <p className="text-lg">
                المجموع الفرعي: ${order.subtotal.toFixed(2)}
              </p>
              {order.discount > 0 && (
                <p className="text-lg text-red-600">
                  الخصم: ${order.discount.toFixed(2)}
                </p>
              )}
              <p className="text-xl font-bold">
                المجموع النهائي: ${order.total.toFixed(2)}
              </p>
              <button
                onClick={handleBuy}
                className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
              >
                إتمام الشراء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
