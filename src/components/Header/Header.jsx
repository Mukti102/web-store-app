import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar/Navbar";
import Sidebare from "../Sidebar/Sidebare";
import { useAppStore } from "../../StateManagt/Store";
function Header() {
  const login = useAppStore((state) => state.loginWithGoogle);
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);

  return (
    <header className="bg-primary min-w-full pt-2">
      <div className="flex w-full justify-between px-12 py-2">
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
          <button
            className="px-4 border-r-[1px] border-slate-100"
            onClick={user != 0 ? logout : null}
          >
            {user ? "Logout" : "Register"}
          </button>
          {user.length !== 0 ? (
            <div className="avatar absolute right-6 top-3 border-white border-[2px] rounded-full">
              <div className="w-7 rounded-full ">
                <img src={user.photoURL} alt="profil" />
              </div>
            </div>
          ) : (
            <button className="" onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
      <Navbar />
      <Sidebare />
    </header>
  );
}

export default Header;
