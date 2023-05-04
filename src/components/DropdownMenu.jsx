import React, { useState } from "react";
import { Link } from "react-router-dom";
import GreaterThan from "../assets/greaterThan.svg";
import Down from "../assets/Down.svg";

function DropdownMenu({ links }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");

  localStorage.setItem('cont', selectedItem)
  const conts = localStorage.getItem("cont");
  console.log(conts)
  console.log(selectedItem)

  const items = [
    {
      item: "Introduction",
      link: "/introduction",
    },
    {
      item: "Application",
      link: "/application",
    },
    {
      item: "Benefit",
      link: "/benefit",
    },
    {
      item: "Challenges",
      link: "/challenges",
    },
    {
      item: "Future",
      link: "/future",
    },
    {
      item: "Opportunities",
      link: "/oppotunities",
    },
  ];
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    scrollUp()
  };

  return (
    <div className="dropdown flex gap-4">
      <div>{selectedItem}</div>
      <div 
          onClick={() => setIsOpen(!isOpen)}
          className=" flex gap-2  hover:bg-bluep py-3 px-5">
        Content
        <img src={GreaterThan} alt="" />
      </div>
      <div className=" relative">
        <button
          className="dropdown-toggle relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <img className="relative left-[6.8rem] z-40" src={Down} alt="" /> */}
        </button>
        <ul
          className={`absolute -left-3 bg-white w-[150px] pt-0 ${
            isOpen ? "-top-1 h-[10px] hidden" : "top-6 -mt-4"
          }`}
        >
          {items.map((item, index) => (
            <li className="w-[150px] my-1" key={index}>
              <Link
                to={item.link}
                className="cursor-pointer px-3 py-1 hover:bg-bluep w-full bg-white"
                onClick={() => {
                  handleItemClick(item.item)
                  setIsOpen(!isOpen)
                }}
              >
                {item.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>{selectedItem}</div> */}
    </div>
  );
}

export default DropdownMenu;
