import React from "react";
import Logo from "../Images/shoesStoreLogo.png";

function NavBaar() {
  return (
    <div>
      <header className="fixed top-0 z-50 w-full left-0 flex justify-center items-center gap-120 shadow-lg bg-gray-50 ">
        <div className="size-25">
          <img src={Logo} alt="Logo" />
        </div>
        <div >
          <ul className="flex justify-around items-center gap-4 ">
            <li className="text-1xl">
              <a href="#">Home </a>
            </li>
            <li className="text-1xl">
              <a href="#">Categories</a>
            </li>
            <li className="text-1xl">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBaar;
