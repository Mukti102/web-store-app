import React, { useEffect } from "react";
import { useAppStore } from "../../StateManagt/Store";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebare() {
  const sidebar = useAppStore((state) => state.isSidebar);
  const categories = JSON.parse(localStorage.getItem("appStore")).state
    .categories;
  const handleSidebar = useAppStore((state) => state.handleSidebar);
  const fetchCategories = useAppStore((state) => state.fetchCategoriesTitle);
  useEffect(() => {
    fetchCategories("https://dummyjson.com/products/categories");
  }, []);

  return (
    <div
      className={
        "sidebar sm:w-64 sm:h-full bg-slate-50 absolute z-10 top-0 pl-4 pr-2 py-5 transition-all delay-200 h-screen w-48 text-slate-800" +
        (sidebar ? " -left-0" : " -left-96")
      }
    >
      <div className="flex justify-between sm:text-lg  my-1 sm:pl-3 sm:mb-4 text-[13px] mb-1 gap-2">
        <h1 className="font-semibold">ALL CATEGORIES</h1>
        <button
          className="font-semibold hover:text-primary"
          onClick={handleSidebar}
        >
          X
        </button>
      </div>
      <div className="w-full sm:h-screen sm:overflow-y-scroll scroll bg-slate-50 pb-5 sm:px-3 h-max">
        {categories?.data?.map((item, index) => {
          return (
            <Link to={`/category/${item}`} key={index} onClick={handleSidebar}>
              <div className="py-1 sm:mt-5 border-b-[1.9px] cursor-pointer capitalize hover:text-primary flex items-center border-slate-200 sm:text-sm text-[11px] text-slate-600 my-1">
                {item}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebare;
