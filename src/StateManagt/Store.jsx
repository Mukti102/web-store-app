import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
const AppStore = (set) => ({
  products: [],
  categories: [],
  categoriesProducts: [],
  isSidebar: false,
  getProductSingle: [],
  cart: [],
  fetchAsyncSingleProduct: (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          // Set data atau melakukan operasi lainnya
          set({ getProductSingle: res.data });
          // Resolve dengan nilai yang diinginkan
          resolve(true);
        })
        .catch((err) => {
          // Reject dengan informasi kesalahan
          reject("fetch single product", err);
        });
    });
  },
  fetch: (url) => {
    return new Promise((fulfied, reject) => {
      try {
        axios.get(url).then((item) => {
          set({ products: item.data });
        });
        fulfied(true);
      } catch (err) {
        console.log("errror", err);
        reject(false);
      }
    });
  },
  fetchCategoriesProducts: (url) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((item) => {
          set({ categoriesProducts: item.data.products });
          resolve(true);
        })
        .catch((err) => {
          reject("fetch categorie products", err);
        });
    });
  },
  handleSidebar: () => set((state) => ({ isSidebar: !state.isSidebar })),
  fetchCategoriesTitle: async (categories) => {
    const res = await axios.get(categories);
    set({ categories: res });
  },
});
export const useAppStore = create(
  persist(AppStore, {
    name: "appStore",
  })
);
