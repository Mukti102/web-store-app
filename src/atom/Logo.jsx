import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from "../StateManagt/Store";
import { Link } from "react-router-dom";
function Logo() {
  const handleSidebar = useAppStore((state) => state.handleSidebar);
  return (
    <>
      <div className="text-slate-100 flex gap-2 ">
        <button onClick={handleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Link to={"/"}>
          <div className="flex gap-1 items-center cursor-pointer">
            <span className="text-xl">
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <h1 className="font-semibold">
              Snap <span className="font-normal">Up</span>
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Logo;
