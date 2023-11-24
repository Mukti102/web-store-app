import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { getauth, provider } from "../config/firebase/Firebase";

const AppStore = create(
  persist(
    (set) => ({
      products: [],
      categories: [],
      categoriesProducts: [],
      isSidebar: false,
      getProductSingle: [],
      cart: [],
      user: [],
      logout: () => {
        setTimeout(() => {
          alert("logout succes");
          set({ user: "" });
          set((state) => ({ cart: (state.cart = []) }));
        }, 1000);
      },
      loginWithGoogle: () => {
        signInWithPopup(getauth, provider).then((res) => {
          set({ user: res.user });
        });
      },
      resetCart: () => set((state) => ({ cart: (state.cart = []) })),
      handleDeleteCart: (id) => {
        let findIndex = "";
        AppStore.getState().cart.map((item, index) => {
          if (item.id === id) {
            findIndex = item;
          }
        });
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== findIndex.id),
        }));
      },
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
      increaseQty: (id) => {
        const tempCart = AppStore.getState().cart.map((item) => {
          if (item.id === id) {
            let tempQty = item.quantity + 1;
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return;
          }
        });
        set({ cart: tempCart });
      },
      decreaseQty: (id) => {
        const tempCart = AppStore.getState().cart.map((item) => {
          if (item.id === id) {
            let tempQty = item.quantity - 1;
            let tempTotalPrice = tempQty * item.price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return;
          }
        });
        set({ cart: tempCart });
      },
      handleAddToCart: (product, qty) => {
        // cek is User have login
        if (AppStore.getState().user == 0) {
          alert("Harap Login terlebih dahulu");
          return;
        } else {
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
                  {
                    ...product,
                    quantity: qty,
                    totalPrice: qty * product.price,
                  },
                ],
              });
            }
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
