export const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const removeFromCart = (productId) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const updateCartQuantity = (productId, quantity) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item
  );
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};