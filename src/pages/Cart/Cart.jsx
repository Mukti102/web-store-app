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
    <div className="w-[80%] mx-auto ">
      <div className="overflow-x-auto h-96">
        <table className="table table-sm shadow-md">
          <thead className="bg-white">
            <tr className="text-sm text-slate-600">
              <th className="text-center">No</th>
              <th>Product</th>
              <th className="text-center">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Total Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {carts.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th className="text-center text-slate-500">{index + 1}</th>
                  <td className="text-slate-500">{item.title}</td>
                  <td className="text-center text-slate-500">${item.price}</td>
                  <td>
                    <div className="bg-white w-max mx-auto text-[12px] border-[1px] border-slate-400 rounded-sm">
                      <button
                        className=" px-2 border-r-[1px] font-semibold border-slate-400"
                        onClick={() => decreaseQty(item.id)}
                      >
                        -
                      </button>
                      <span className="text-[12px] px-2 text-slate-500">
                        {item.quantity}
                      </span>
                      <button
                        className=" px-2 border-l-[1px] font-semibold  border-slate-300"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-center text-primary text-[13px] font-semibold">
                    Rp{formatHarga(item.totalPrice)}
                  </td>
                  <td>
                    <button
                      className="btn-xs text-slate-400 hover:text-primary text-center w-full"
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
          <button className="btn-sm py-1 border-[1.3px]  border-primary  flex items-center gap-2 h-max text-primary hover:bg-primary hover:text-white">
            <FontAwesomeIcon icon={faTrash} />
            <div>CLEAR CART</div>
          </button>
          <div>
            <h1 className="text-[12px]">
              Total({carts.length} item):
              <span className=" ml-[5px] font-semibold text-sm text-primary">
                Rp{formatHarga(amountPriceAllCart)}
              </span>{" "}
            </h1>
            <button className=" bg-primary text-white px-7 py-[6px] text-sm hover:bg-opacity-80">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
