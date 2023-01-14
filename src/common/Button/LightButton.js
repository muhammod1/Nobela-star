import React from "react";

const RedButton = ({text, bg}) => {
  return (
    <button className=" text-pink py-2 px-5 border-pink border-2 rounded-lg">
      {text}
    </button>
  );
};

export default RedButton;
