import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const AppStore = create(
  persist(
    (set) => ({
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
              set({ getProductSingle: res.data });
              resolve(true);
            })
            .catch((err) => {
              reject("fetch single product", err);
            });
        });
      },
      handleAddToCart: (product, qty) => {
        // find item same in cart
        if (qty == 0) {
          alert("please add quantity");
          return;
        } else {
          const isItemInCart = AppStore.getState().cart.find(
            (item) => item.id === product.id
          );
          if (isItemInCart) {
            const tempCart = AppStore.getState().cart.map((item) => {
              if (item.id === product.id) {
                let tempQty = item.quantity + qty;
                let tempTotalPrice = item.price * tempQty;
                return {
                  ...item,
                  quantity: tempQty,
                  totalPrice: tempTotalPrice,
                };
              } else {
                return item;
              }
            });
            set({ cart: tempCart });
          } else {
            set({
              cart: [
                ...AppStore.getState().cart,
                { ...product, quantity: qty, totalPrice: qty * product.price },
              ],
            });
          }
        }
      },
      fetch: (url) => {
        return new Promise((fulfilled, reject) => {
          try {
            axios.get(url).then((item) => {
              set({ products: item.data });
            });
            fulfilled(true);
          } catch (err) {
            console.log("error", err);
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
              reject("fetch category products", err);
            });
        });
      },
      handleSidebar: () => set((state) => ({ isSidebar: !state.isSidebar })),
      fetchCategoriesTitle: async (categories) => {
        const res = await axios.get(categories);
        set({ categories: res });
      },
    }),
    {
      name: "appStore",
    }
  )
);

export const useAppStore = AppStore;
