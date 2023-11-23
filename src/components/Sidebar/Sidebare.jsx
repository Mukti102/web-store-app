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
        "w-64 h-full bg-slate-50 absolute z-10  top-0 pl-4 pr-2 py-5 transition-all delay-200" +
        (sidebar ? " -left-0" : " -left-96")
      }
    >
      <div className="flex justify-between  my-1 pl-3 mb-4">
        <h1 className="font-semibold">ALL CATEGORIES</h1>
        <button
          className="font-semibold hover:text-primary"
          onClick={handleSidebar}
        >
          X
        </button>
      </div>
      <div className="w-full h-screen overflow-y-scroll scroll bg-slate-50 pb-5 px-3">
        {categories.data.map((item, index) => {
          return (
            <Link to={`/category/${item}`} key={index}>
              <div className="py-1 mt-5 border-b-[1.9px] cursor-pointer capitalize hover:text-primary flex items-center border-slate-200 text-sm">
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
