import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function CartIcon() {
  return (
    <button className="text-slate-100 relative text-lg">
      <FontAwesomeIcon icon={faCartShopping} />
      <div className="w-4 h-4 bg-green-600 text-slate-100 text-center flex items-center justify-center text-[11px] rounded-full absolute -right-2 -top-1">
        0
      </div>
    </button>
  );
}

export default CartIcon;
