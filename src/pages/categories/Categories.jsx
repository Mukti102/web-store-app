import React, { useState } from "react";
import { useAppStore } from "../../StateManagt/Store";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Categories() {
  const { category } = useParams();
  const fetchCategoriesProducts = useAppStore(
    (state) => state.fetchCategoriesProducts
  );
  const categoriesProducts = useAppStore((state) => state.categoriesProducts);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCategoryProduct = async () => {
      try {
        setIsLoading(true);
        const res = await fetchCategoriesProducts(
          `https://dummyjson.com/products/category/${category}`
        );
        console.log(res);
      } catch (error) {
        console.log("fetch category products", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategoryProduct();
  }, [category]);
  return isLoading ? (
    <div className="w-max mx-auto">
      <span className="loading loading-infinity loading-lg text-primary mx-auto"></span>
    </div>
  ) : (
    <div>
      <div className="w-[90%] mt-5 font-semibold text-slate-400 rounded-sm bg-white px-3 py-2 h-10 relative flex items-center shadow-lg mx-auto before:w-1 before:h-full before:bg-primary before:absolute before:left-0 before:rounded-[1.7px]">
        <h1>{category}</h1>
      </div>
      <div className="w-[90%] flex flex-wrap gap-5 justify-center mx-auto my-8">
        {categoriesProducts.map((item, index) => {
          return (
            <Link to={`/products/${item.id}`} key={item}>
              <div
                className="w-52 bg-white pb-0 shadow-md rounded-sm  flex justify-center flex-col relative"
                key={index}
              >
                <div className="w-full h-[200px] overflow-hidden bg-black">
                  <img
                    src={item.images[0]}
                    alt="picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-3 w-full text-[13px]">
                  <h1 className="text-center font-light text-slate-700">
                    Brand <span className="font-semibold">{item.brand}</span>
                  </h1>
                </div>
                <div className="text-[12px] w-full mx-auto">
                  <h1 className="text-center">{item.title}</h1>
                </div>
                <div className="w-full py-3 text-sm  flex gap-2  justify-center">
                  <span className="text-[10px] line-through">
                    ${item.price + item.discountPercentage}
                  </span>
                  <span className="text-[13px] font-semibold">
                    ${item.price}
                  </span>
                  <span className="text-[10px] text-primary font-semibold">
                    ({item.discountPercentage}%Of)
                  </span>
                </div>
                <div className="w-max h-max py-1 px-2 text-white font-light text-[11px] bg-primary absolute capitalize top-4 -left-[1px] shadow-md rounded-l-sm">
                  {item.category}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
