import React from "react";
import cancle from "../assets/cancle.svg";

const MobileNav = ({ setIsActive }) => {
  return (
    <div>
      <img
        src={cancle}
        onClick={() => setIsActive(false)}
        className="cursor-pointer font-[600] w-[25px] h-[25px] ml-auto mr-3 mt-3"
        alt=""
      />

      <div className="mt-3 flex flex-col">
        <a
          href="/"
          onClick={() => setIsActive(false)}
          className="block my-5 mx-4 pb-3 font-bold text-[18px] text-[#fff]"
        >
          Home
        </a>
        <a
          href="/?#content"
          onClick={() => setIsActive(false)}
          className="block my-5 mx-4 pb-3 font-bold text-[18px] text-[#fff]"
        >
          Content
        </a>
        <a
          href="/#about"
          onClick={() => setIsActive(false)}
          className="block my-5 mx-4 pb-3 font-bold text-[18px] text-[#fff]"
        >
          About
        </a>
        <a
          href="/#ai_app"
          onClick={() => setIsActive(false)}
          className="block my-5 mx-4 pb-3 font-bold text-[18px] text-[#fff]"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
