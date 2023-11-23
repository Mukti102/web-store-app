import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import Sidebare from "../Sidebar/Sidebare";
function Header() {
  return (
    <header className="bg-primary min-w-full">
      <div className="flex w-full justify-between px-10 py-2">
        <div className="flex w-max text-[12px] text-slate-100 gap-2">
          <span className="px-4 border-r-[1px] border-slate-100">
            Seller Center
          </span>
          <span className="px-4 border-r-[1px] border-slate-100">Download</span>
          <span className="">Follow Us On</span>
          <div className="flex items-center gap-1 text-sm">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
        <div className="flex w-max text-[12px] text-slate-100 gap-2">
          <span className="px-4 border-r-[1px] border-slate-100">
            <FontAwesomeIcon icon={faCircleQuestion} className="mx-2 text-sm" />
            Support
          </span>
          <button className="px-4 border-r-[1px] border-slate-100">
            Register
          </button>
          <button className="">Login</button>
        </div>
      </div>
      <Navbar />
      <Sidebare />
    </header>
  );
}

export default Header;
