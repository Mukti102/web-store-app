import React from "react";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import { useAppStore } from "../../StateManagt/Store";
function Home() {
  const reset = useAppStore((state) => state.resetCart);
  const cart = useAppStore((state) => state.cart);
  // reset();
  return (
    <>
      <Hero />
      <Products />
    </>
  );
}

export default Home;
