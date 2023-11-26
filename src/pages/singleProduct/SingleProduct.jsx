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
  }, [id, fetchAsyncSingleProduct]);
  console.log("SINGLE PRODUCT", getProductSingle);
  return isLoading ? (
    <div className="loading loading-infinity loading-lg text-primary absolute top-[50%] left-[50%] translate-y-[50%]"></div>
  ) : (
    <div className="sm:w-[90%] mx-auto my-5 p-1 sm:flex overflow-hidden sm:h-[450px] shadow-lg bg-white h-max block justify-center w-[80%]">
      <div className="sm:w-1/2 sm:h-full overflow-hidden h-60 w-full bg-black">
        <div className="w-full sm:h-[70%] h-full overflow-hidden">
          <img
            src={
              getProductSingle?.thumbnail ??
              "https://tse3.mm.bing.net/th?id=OIP.2JkSNigfTvmaMwVkzc7A9wHaHa&pid=Api&P=0&h=180"
            }
            className="sm:w-full h-full sm:h-max object-center"
          />
        </div>
        <div className="flex w-full sm:h-[30%] h-0 bg-black">
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={
                getProductSingle?.images && getProductSingle.images[1]
                  ? getProductSingle.images[1]
                  : "https://tse3.mm.bing.net/th?id=OIP.2JkSNigfTvmaMwVkzc7A9wHaHa&pid=Api&P=0&h=180"
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={
                getProductSingle?.images && getProductSingle.images[2]
                  ? getProductSingle.images[2]
                  : "https://tse3.mm.bing.net/th?id=OIP.2JkSNigfTvmaMwVkzc7A9wHaHa&pid=Api&P=0&h=180"
              }
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/3 h-full overflow-hidden">
            <img
              src={
                getProductSingle?.images && getProductSingle.images[3]
                  ? getProductSingle.images[3]
                  : "https://tse3.mm.bing.net/th?id=OIP.2JkSNigfTvmaMwVkzc7A9wHaHa&pid=Api&P=0&h=180"
              }
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 sm:py-5 sm:px-3 w-full py-2 px-2 h-1/2">
        <div className="flex sm:gap-5 gap-3 flex-col">
          <div className="sm:mx-0 mx-auto">
            <h1 className="font-semibold sm:text-xl text-lg">
              -{getProductSingle?.title}-
            </h1>
          </div>
          <hr />
          <span className="sm:text-[13px] text-[9px]">
            {getProductSingle?.description}
          </span>
          <div className="sm:flex sm:w-full  ">
            <div className="text-primary w-max sm:text-sm px-3 sm:border-r-[1.2px] border-primary text-[12px]">
              Rating :
              <span className="text-slate-800 border-primary">
                {getProductSingle?.rating}
              </span>
            </div>
            <div className="text-primary w-max sm:text-sm px-3 sm:border-r-[1.2px] border-primary text-[12px]">
              Brand :{" "}
              <span className="text-slate-800">{getProductSingle?.brand}</span>
            </div>
            <div className="text-primary w-max sm:text-sm px-3 sm:border-r-[1.2px] border-primary text-[12px]">
              Category :{" "}
              <span className="text-slate-800">
                {getProductSingle?.category}
              </span>
            </div>
          </div>
          <div className="sm:w-full bg-slate-200 sm:rounded-md sm:px-3 sm:py-5 flex flex-col gap-2 px-2 py-1 w-[80%]">
            <div className="flex items-center gap-2">
              <span className="line-through sm:text-[11px] text-slate-500 text-[8px]">
                Rp
                {formatHarga(
                  getProductSingle?.price + getProductSingle?.discountPercentage
                )}
              </span>
              <span className="sm:text-[12px] text-[9px]">
                (Inclusive of all)
              </span>
            </div>
            <div className="flex gap-2">
              <div className="text-primary font-semibold sm:text-xl text-sm">
                <h1>Rp{formatHarga(getProductSingle?.price)}</h1>
              </div>
              <div className="text-[10px] h-max w-max bg-primary px-2 py-[1px] text-slate-100 rounded-sm">
                <span>{getProductSingle?.discountPercentage}% Off</span>
              </div>
            </div>
          </div>
          <div className="flex sm:gap-2 gap-1">
            <div className="sm:text-sm text-[12px]">Quantity</div>
            <div className="bg-white sm:text-sm border-[1px] border-slate-800 rounded-sm text-[12px]">
              <button
                className="sm:px-2 px-1  border-r-[1px]  border-slate-700"
                onClick={() => decrease()}
              >
                -
              </button>
              <span className="sm:text-sm sm:px-2 px-1 text-[12px]">
                {quantity}
              </span>
              <button
                className="sm:px-2 px-1  border-l-[1px]  border-slate-700"
                onClick={() => increase()}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div
              className="flex cursor-pointer sm:px-4 gap-2 bg-primary items-center sm:py-2 text-white sm:text-sm text-[10px] px-2 h-max py-1"
              onClick={() => handleAddCart(getProductSingle, quantity)}
            >
              <FontAwesomeIcon icon={faCartArrowDown} />
              <button className="sm:text-[12px] cursor-pointer text-[10px]">
                Add to Cart
              </button>
            </div>
            <div className="flex cursor-pointer sm:px-4 gap-2 bg-primary items-center sm:py-2 text-white sm:text-sm text-[10px] px-2 h-max py-1">
              <span className="sm:text-[12px] text-[10px]">Buy Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
