import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from "../StateManagt/Store";
import { Link } from "react-router-dom";
function Logo() {
  const handleSidebar = useAppStore((state) => state.handleSidebar);
  return (
    <>
      <div className="text-slate-100 sm:flex sm:gap-2 gap-1 flex">
        <button onClick={handleSidebar}>
          <FontAwesomeIcon icon={faBars} className="text-sm sm:text-xl" />
        </button>
        <Link to={"/"}>
          <div className="flex gap-1 sm:items-center cursor-pointer">
            <span className="sm:text-xl text-lg">
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <h1 className="font-semibold sm:text-sm sm:flex flex items-center text-sm">
              Snap <span className="font-normal">Up</span>
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Logo;
