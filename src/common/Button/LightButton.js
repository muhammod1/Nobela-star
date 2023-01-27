import React from "react";

const LightButton = ({text}) => {
  return (
    <button className=" text-pink py-2 px-5 border-pink border-2 rounded-lg">
      {text}
    </button>
  );
};

export default LightButton;
