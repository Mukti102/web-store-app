import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function InputSearch() {
  const [isSearch, setIsSearch] = useState(true);
  console.log(isSearch);
  return (
    <div className="sm:w-[80%] sm:py-3 py-2 w-[60%]">
      <div
        className={
          "sm:w-full sm:py-1 sm:h-9 sm:pl-2 sm:pr-1 sm:bg-slate-100 rounded-sm overflow-hidden flex items-center h-6 py-[2px] pr-[2px] transition-all delay-100 " +
          (isSearch
            ? " bg-transparent  w-max"
            : "  flex-row w-full bg-slate-100")
        }
      >
        <input
          type="text"
          className={
            "sm:w-full bg-transparent outline-none sm:py-1 px-2 sm:text-sm text-[10px] transition-all delay-100 " +
            (isSearch ? " w-0" : " w-full")
          }
          placeholder="Search your prefence here.."
        />
        <button
          className="w-max sm:px-5 text-slate-100 rounded-sm h-full sm:bg-primary hover:bg-opacity-80 px-2 text-[11px]  bg-primary"
          onClick={() => setIsSearch(!isSearch)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default InputSearch;
