import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from "../StateManagt/Store";
import { Link } from "react-router-dom";
import { formatHarga } from "../action/formatPrice";
function CartIcon() {
  const carts = useAppStore((state) => state.cart);
  return (
    <div className="relative  group/item">
      <Link to={"/cart"}>
        <button className="text-slate-100 relative sm:text-lg text-sm">
          <FontAwesomeIcon icon={faCartShopping} />
          <div className="sm:w-4 sm:h-4 bg-green-600 text-slate-100 text-center flex items-center justify-center sm:text-[11px] rounded-full absolute -right-2 -top-1 text-[8px] w-3 h-3">
            {carts.length}
          </div>
        </button>
      </Link>
      <div className="w-60 h-80 absolute shadow-md  invisible z-50 -left-60 px-4 py-2 bg-white group-hover/item:visible transition-all delay-100 ease-in">
        <div className="w-max mx-auto">
          <h1>Products</h1>
        </div>
        <div
          className={
            "w-full flex flex-col gap-2 " +
            (carts.length > 6
              ? " overflow-y-scroll h-60 shadow-sm "
              : " overflow-auto h-max")
          }
        >
          {carts.map((item) => {
            return (
              <div className="flex justify-between items-center">
                <div className="w-max gap-2 flex items-center">
                  <div className="w-14 h-12 overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="text-[7px]">{item.title}</div>
                </div>
                <div className="text-[12px] text-primary font-semibold ">
                  Rp{formatHarga(item.totalPrice)}
                </div>
              </div>
            );
          })}
        </div>
        <Link to={"/cart"}>
          <button className="btn-xs bg-primary mt-4 text-slate-50 text-[11px]">
            View my Carts
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CartIcon;
