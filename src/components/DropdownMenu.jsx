import React, { useState } from "react";
import { Link } from "react-router-dom";
import Down from '../assets/Down.svg'

function DropdownMenu({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const handleLinkMove = (link) => {
    const newLinks = [...links];
    const linkIndex = newLinks.indexOf(link);
    newLinks.splice(linkIndex, 1);
    newLinks.unshift(link);
    setSelectedLink(link);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle relative" onClick={() => setIsOpen(true)}>
        Links
        <img src={Down} alt='' />
      </button>
      <div className={`dropdown-menu p-3 gap-3 bg-white flex flex-col absolute ${isOpen ? "show" : ""}`}>
       
        {links.map((link) => (
          <Link
            key={link}
            className={`dropdown-item ${selectedLink === link ? "bg-[#18A0FB]" : ""}`}
            to={`/${link}`}
            onClick={() => {
              handleLinkClick(link);
              handleLinkMove(link);
              setIsOpen(false);
            }}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
