import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io"
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import BlueButton from "../common/Button/BlueButton";
import MobileNav from "./MobileNav";

const NavBar = ({ link, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="p-2 flex justify-between w-[97%] mx-auto max-w-[1430px]">
      <Link to='/'>
        <IoIosArrowBack className="text-[#fff] relative -left-[15px] h-[50px] w-[40px] " />
      </Link>
      
      <Link to='/'>
        <img className=" h-[50px] mr-auto w-fit" src={logo} alt="logo" />
      </Link>
      <div className=" hidden laptop:flex align-middle font-[500] text-[16px] text-grey">
        <Link to={link} className="flex gap-6  my-auto">
          <BlueButton text={text} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;