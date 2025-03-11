import React from "react";

const Input = () => {
  return (
    <input
      className="bg-gray-300 px-4 py-4 outline-none w-[280px] text-black rounded-lg  transition-colors duration-100 border-solid "
      name="text"
      placeholder="Pickup location"
      type="text"
    />
  );
};

export default Input;
