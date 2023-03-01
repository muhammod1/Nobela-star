import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import BlueButton from "../common/Button/BlueButton";
import MobileNav from "./MobileNav";

const NavBar = ({ link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="p-2 flex justify-between w-[97%] mx-auto max-w-[1430px]">
      <Link to={link}>
        <IoIosArrowBack className="text-[#fff] relative -left-[15px] h-[50px] w-[40px] " />
      </Link>
      <div>
        <img className=" h-[50px] mr-auto w-fit" src={logo} alt="logo" />
      </div>
      <div className=" hidden laptop:flex align-middle font-[500] text-[16px] text-grey">
        <div className="flex gap-6  my-auto">
          <BlueButton text="Contact Us" />
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

export default NavBar;
