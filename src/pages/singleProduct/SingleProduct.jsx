import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useAppStore } from "../../StateManagt/Store";
import { useParams } from "react-router";
import { formatHarga } from "../../action/formatPrice";
function SingleProduct() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const fetchAsyncSingleProduct = useAppStore(
    (state) => state.fetchAsyncSingleProduct
  );
  const handleAddCart = useAppStore((state) => state.handleAddToCart);
  const getProductSingle = useAppStore((state) => state.getProductSingle);
  const [quantity, setQuantity] = useState(0);
  const increase = () => {
    setQuantity((prevQuantity) => {
      let tempQuantity = prevQuantity + 1;
      if (tempQuantity > getProductSingle.stock)
        tempQuantity = getProductSingle.stock;
      return tempQuantity;
    });
  };
  const decrease = () => {
    setQuantity((prevQuantity) => {
      let tempQuantity = prevQuantity - 1;
      if (tempQuantity < 0) tempQuantity = 0;
      return tempQuantity;
    });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengatur isLoading menjadi true sebelum permintaan
        setIsLoading(true);

        // Memanggil fetchAsyncSingleProduct secara asynchronous
        const res = await fetchAsyncSingleProduct(
          `https://dummyjson.com/products/${id}`
        );

        // Melakukan operasi lain jika diperlukan, seperti mengatur state
        console.log(res);
      } catch (error) {
        // Menangani kesalahan jika terjadi
        console.error("Error fetching single product", error);
      } finally {
        // Mengatur isLoading menjadi false setelah permintaan selesai (baik berhasil atau gagal)
        setIsLoading(false);
      }
    };

    // Memanggil fungsi fetchData yang bersifat asynchronous
    fetchData();
  }, [id]);
  return isLoading ? (
    <div className="loading loading-infinity loading-lg text-primary absolute top-[50%] left-[50%] translate-y-[50%]"></div>
  ) : (
    <div className="w-[90%] mx-auto my-5 p-1 flex overflow-hidden h-[450px] shadow-lg bg-white">
      <div className="w-1/2  overflow-hidden">
        <div className="w-full h-[70%] overflow-hidden">
          <img
            src={getProductSingle.thumbnail || getProductSingle.images[0]}
            className="w-full object-center"
          />
        </div>
        <div className="flex w-full h-[30%] bg-black">
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={getProductSingle.images[1]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={getProductSingle.images[2]}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={getProductSingle.images[3]}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 py-5 px-3">
        <div className="flex gap-5 flex-col">
          <div>
            <h1 className="font-semibold text-xl">-{getProductSingle.title}</h1>
          </div>
          <hr />
          <span className="text-[12px]">{getProductSingle.description}</span>
          <div className="flex w-full">
            <div className="text-primary w-max text-sm px-3 border-r-[1.2px] border-primary">
              Rating :
              <span className="text-slate-800 border-primary">
                {getProductSingle.rating}
              </span>
            </div>
            <div className="text-primary w-max text-sm px-3 border-r-[1.2px] border-primary">
              Brand :{" "}
              <span className="text-slate-800">{getProductSingle.brand}</span>
            </div>
            <div className="text-primary w-max text-sm px-3">
              Category :{" "}
              <span className="text-slate-800">
                {getProductSingle.category}
              </span>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-md px-3 py-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="line-through text-[11px] text-slate-500">
                Rp
                {formatHarga(
                  getProductSingle.price + getProductSingle.discountPercentage
                )}
              </span>
              <span className="text-[12px]">(Inclusive of all)</span>
            </div>
            <div className="flex  gap-2">
              <div className="text-primary font-semibold text-xl">
                <h1>Rp{formatHarga(getProductSingle.price)}</h1>
              </div>
              <div className="text-[10px] h-max w-max bg-primary px-2 py-[1px] text-slate-100 rounded-sm">
                <span>{getProductSingle.discountPercentage}% Off</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="text-sm">Quantity</div>
            <div className="bg-white text-sm border-[1px] border-slate-800 rounded-sm">
              <button
                className=" px-2 border-r-[1px]  border-slate-700"
                onClick={() => decrease()}
              >
                -
              </button>
              <span className="text-sm px-2">{quantity}</span>
              <button
                className=" px-2 border-l-[1px]   border-slate-700"
                onClick={() => increase()}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="flex cursor-pointer px-4 gap-2 bg-primary items-center py-2 text-white text-sm "
              onClick={() => handleAddCart(getProductSingle, quantity)}
            >
              <FontAwesomeIcon icon={faCartArrowDown} />
              <button className="text-[12px] cursor-pointer">
                Add to Cart
              </button>
            </div>
            <div className="flex cursor-pointer px-4 gap-2 bg-primary items-center py-2 text-white text-sm ">
              <span className="text-[12px]">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
