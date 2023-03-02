import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import BlueButton from "../common/Button/BlueButton";
import MobileNav from "./MobileNav";

const NavBarsec = ({ link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="flex justify-between w-[97%] mx-auto max-w-[1430px]">
      <div>
        <img className=" h-[45px] mr-auto w-fit" src={logo} alt="logo" />
      </div>
      <div className="flex text-blue gap-5 items-center font-semibold">
        <NavLink to="/" className="py-3 px-5">
          Home
        </NavLink>
        <a href="#content" className="py-3 px-5">
          Contact
        </a>
          <a 
            href="#about"
            className="py-3 px-5"
          >
            About
          </a>
      </div>
      <div className=" hidden laptop:flex align-middle font-[500] text-[16px] text-grey">
        <div className="flex gap-6  my-auto">
          {/* <BlueButton text="Test AI" /> */}
        </div>
      </div>
      <div
        onClick={() => setIsActive(!isActive)}
        className="my-auto block laptop:hidden "
      >
        <AiOutlineMenu className="w-[30px] h-[30px]" />
      </div>
      {isActive && (
        <div className="absolute right-0 bg-grey top-0 h-[100vh] w-[70%] transition ease-in-out delay-350">
          <MobileNav setIsActive={setIsActive} />
        </div>
      )}
    </nav>
  );
};

export default NavBarsec;
