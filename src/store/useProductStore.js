import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: true,

  fetchProducts: async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      set({ products: res.data, loading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ loading: false });
    }
  },
}));
