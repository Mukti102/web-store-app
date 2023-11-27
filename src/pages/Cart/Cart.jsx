import React from "react";
import { useAppStore } from "../../StateManagt/Store";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatHarga } from "../../action/formatPrice";
function Cart() {
  const carts = useAppStore((state) => state.cart);
  const deleteCart = useAppStore((state) => state.handleDeleteCart);
  const increaseQty = useAppStore((state) => state.increaseQty);
  const decreaseQty = useAppStore((state) => state.decreaseQty);
  const amountPriceAllCart = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.totalPrice,
    0
  );
  return (
    <div className="sm:w-[80%] mx-auto   w-[97%]">
      <div className="sm:overflow-x-auto h-96 ">
        <table className="sm:table sm:table-sm table table-xs  shadow-md">
          <thead className="bg-white">
            <tr className="sm:text-sm text-slate-600 text-[10px]">
              <th className="text-center">No</th>
              <th>Product</th>
              <th className="text-center">Harga</th>
              <th className="text-center">Kuantitas</th>
              <th className="text-center">Total Harga</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {carts?.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th className="text-center sm:text-sm text-[10px] text-slate-500">
                    {index + 1}
                  </th>
                  <td className="text-slate-800 sm:text-sm text-[9px]">
                    {item.title}
                  </td>
                  <td className="text-slate-800 sm:text-sm text-[8px]  text-center">
                    Rp{formatHarga(item.price)}
                  </td>
                  <td>
                    <div className="bg-white w-max mx-auto sm:text-[12px] border-[1px] border-slate-400 rounded-sm text-[10px]">
                      <button
                        className="sm:px-2 border-r-[1px] font-semibold border-slate-400 sm:text-sm text-[10px] px-2"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span className="sm:text-[12px] sm:px-2 text-slate-500 text-[9px] px-2 text-center">
                        {item.quantity}
                      </span>
                      <button
                        className="sm:px-2 border-l-[1px] font-semibold border-slate-400 sm:text-sm text-[10px] px-2"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center text-primary sm:text-[13px] font-semibold text-[9px]">
                    Rp{formatHarga(item.totalPrice)}
                  </td>
                  <td>
                    <button
                      className="btn-xs text-slate-400 hover:text-primary sm:text-sm text-[10px] text-center w-full"
                      onClick={() => deleteCart(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="w-full bg-white flex justify-between  py-2 px-3 mt-5 shadow-md">
          <button className="btn-xs py-1 border-[1.3px]  border-primary  flex items-center gap-2 h-max text-primary hover:bg-primary sm:text-sm text-[10px] hover:text-white">
            <FontAwesomeIcon icon={faTrash} />
            <div className="sm:text-sm text-[9px]">CLEAR CART</div>
          </button>
          <div className="flex flex-col gap-1">
            <h1 className="sm:text-[12px] text-[9px] text-slate-800">
              Total({carts.length} item):
              <span className="ml-[5px] font-semibold sm:text-sm text-primary text-[9px]">
                Rp{formatHarga(amountPriceAllCart)}
              </span>{" "}
            </h1>
            <button className=" bg-primary text-white sm:px-7 sm:py-[6px] sm:text-sm m-0 hover:bg-opacity-80 px-5 py-[3px] ml-5 text-[10px]">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
