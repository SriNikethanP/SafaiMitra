import React from "react";

const Card = () => {
  return (
    <div className="w-72 px-4 py-5 bg-gray-300 flex flex-col gap-3 rounded-md shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
      <legend className="text-xl font-semibold mb-3 select-none">Select</legend>
      <label
        htmlFor="wet"
        name="status"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
      >
        Wet
        <input
          defaultChecked
          type="radio"
          name="status"
          className="peer/html w-4 h-4 absolute accent-current right-3"
          id="wet"
        />
      </label>
      <label
        htmlFor="dry"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
      >
        Dry
        <input
          type="radio"
          name="status"
          className="w-4 h-4 absolute accent-current right-3"
          id="dry"
        />
      </label>
      <label
        htmlFor="recycle"
        name="recycle"
        className="font-medium h-14 relative hover:bg-zinc-100 flex items-center px-3 gap-3 rounded-lg has-[:checked]:text-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:ring-blue-300 has-[:checked]:ring-1 select-none"
      >
        Recycle
        <input
          type="radio"
          name="status"
          className="w-4 h-4 absolute accent-blue-500 right-3"
          id="recycle"
        />
      </label>
    </div>
  );
};

export default Card;
