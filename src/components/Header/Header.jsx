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
    <header className="bg-primary sm:min-w-full pt-2   w-screen">
      <div
        className="sm:flex lg:w-full sm:justify-between sm:pl-12 sm:pr-16 sm:py-2 sm:items-center
        mx-auto w-max"
      >
        <div
          className="sm:flex sm:w-max sm:text-[12px] text-slate-100 sm:gap-2
          text-[10px] flex gap-2"
        >
          <span className="px-4 border-r-[1px] border-slate-100">
            Seller Center
          </span>
          <span className="px-4 border-r-[1px] border-slate-100">Download</span>
          <span className="">Follow Us On</span>
          <div className="sm:flex sm:items-center sm:gap-1 sm:text-sm flex gap-1 items-center">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
        <div className="sm:flex sm:w-max sm:text-[12px] text-slate-100 sm:gap-2 text-[10px] flex justify-center w-full mt-1">
          <span className="sm:px-4 sm:border-r-[1px] sm:text-[12px] border-slate-100 text-[10px]">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="sm:mx-2 sm:text-sm text-[10px] mx-2"
            />
            Support
          </span>
          <button
            className="px-4 sm:border-r-[1px] border-slate-100"
            onClick={user != 0 ? logout : null}
          >
            {user ? "Logout" : "Register"}
          </button>
          {user.length !== 0 ? (
            <div className="avatar absolute right-6 top-3 border-white sm:border-[2px] rounded-full">
              <div className="sm:w-7 sm:rounded-full w-5 rounded-full ">
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
