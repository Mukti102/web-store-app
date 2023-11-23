import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from "../StateManagt/Store";
function CartIcon() {
  const carts = useAppStore((state) => state.cart);
  return (
    <button className="text-slate-100 relative text-lg">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="w-4 h-4 bg-green-600 text-slate-100 text-center flex items-center justify-center text-[11px] rounded-full absolute -right-2 -top-1">
        {carts.length}
      </div>
    </button>
  );
}

export default CartIcon;
