import React from "react";
import Logo from "../../atom/Logo";
import CartIcon from "../../atom/CartIcon";
import InputSearch from "../../atom/InputSearch";
function Navbar() {
  return (
    <nav className="w-full flex my-2 justify-evenly py-0 items-center px-10">
      <Logo />
      <InputSearch />
      <CartIcon />
    </nav>
  );
}

export default Navbar;
