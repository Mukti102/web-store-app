import React, { useState } from "react";
import { useAppStore } from "../../StateManagt/Store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatHarga } from "../../action/formatPrice";
import AOS from "aos";
import "aos/dist/aos.css";
function Products() {
  const products = useAppStore((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const [seeMoreLoad, setSeeMoreLoad] = useState(false);
  const fetch = useAppStore((state) => state.fetch);
  const [limit, setLimit] = useState(10);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        fetch(`https://dummyjson.com/products?limit=${limit}`);
      } catch (err) {
        console.log("fetch products", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [limit]);
  useEffect(() => {
    AOS.init();
  }, []);
  const seeMore = () => {
    setSeeMoreLoad(true);
    if (limit > 90) return;
    else {
      setTimeout(() => {
        setLimit((prevent) => {
          return prevent + 10;
        });
        setSeeMoreLoad(false);
      }, [1000]);
    }
    setIsLoading(false);
  };
  return !isLoading ? (
    <>
      <div className="w-[90%] sm:mt-5 font-semibold text-slate-400 rounded-sm bg-white sm:px-3 sm:py-2 sm:h-10 relative flex items-center shadow-lg mx-auto before:w-1 before:h-full before:bg-primary before:absolute before:left-0 before:rounded-[1.7px] sm:text-lg text-[12px] px-3 py-1">
        <h1>SEE OUR PRODUCTS</h1>
      </div>
      <div className="sm:w-[90%] flex flex-wrap sm:gap-5 justify-center mx-auto sm:my-8 my-4 gap-3 px-1 ">
        {products?.products?.map((item) => {
          return (
            <Link to={`/products/${item.id}`} key={item.id}>
              <div
                data-aos="fade-up"
                className="sm:w-52 cursor-pointer bg-white sm:pb-0 shadow-md rounded-sm  flex justify-center flex-col relative w-32"
                key={item.id}
              >
                <div className="w-full sm:h-[200px] overflow-hidden bg-black h-[110px]">
                  <img
                    src={item.images[1]}
                    alt="picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="sm:py-3 w-full sm:text-[13px] text-[8px] pb-1 pt-2">
                  <h1 className="text-center font-light sm:text-slate-700 text-slate-700  ">
                    Brand <span className="font-semibold">{item.brand}</span>
                  </h1>
                </div>
                <div className="sm:text-[12px] sm:w-[98%] w-[80%] mx-auto text-[10px] text-slate-800">
                  <h1 className="text-center">{item.title}</h1>
                </div>
                <div className="w-full sm:py-3 sm:text-sm  sm:flex sm:gap-2 gap-1 items-center sm:justify-center  py-2 flex justify-center ">
                  <span className="sm:text-[10px] line-through text-[5px] text-slate-400">
                    Rp{formatHarga(item.price + item.discountPercentage)}
                  </span>
                  <span className="sm:text-[13px] font-semibold text-[9px] text-slate-800">
                    Rp{formatHarga(item.price)}
                  </span>
                  <span className="sm:text-[10px] text-primary font-semibold text-[6px]">
                    ({item.discountPercentage}%Of)
                  </span>
                </div>
                <div className="w-max h-max sm:py-1 sm:px-2 text-white font-light sm:text-[11px] bg-primary absolute capitalize top-4 -left-[1px] shadow-md rounded-l-sm text-[8px] px-[5px] py-[2px]">
                  {item.category}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <button
        className="btn-sm bg-primary text-[11px] sm:my-10 my-4 text-slate-100 sm:text-sm block mx-auto rounded-sm hover:opacity-80"
        onClick={seeMore}
      >
        {seeMoreLoad ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "Lihat lebih banyak..."
        )}
      </button>
    </>
  ) : (
    <div className="loading loading-infinity loading-lg text-primary absolute top-[50%] left-[50%]"></div>
  );
}

export default Products;
