import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function InputSearch() {
  const categories = JSON.parse(localStorage.getItem("appStore")).state
    .categories.data;
  // const categorie = categories.slice(1, 9);
  return (
    <div className="w-[80%]">
      <div className="w-full py-1 h-9 pl-2 pr-1 bg-slate-100 rounded-sm overflow-hidden flex items-center">
        <input
          type="text"
          className="w-full bg-transparent outline-none py-1 px-2 text-sm"
          placeholder="Search your prefence here.."
        />
        <button className="w-max px-5 text-slate-100 rounded-sm h-full bg-primary hover:bg-opacity-80">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="full flex gap-4 text-[12px] h-5 py-4  items-center text-slate-100">
        {/* {categorie.map((item, index) => {
          return (
            <span key={index} className="capitalize cursor-pointer">
              {item}
            </span>
          );
        })} */}
      </div>
    </div>
  );
}

export default InputSearch;
