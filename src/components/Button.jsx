import React from "react";

export const Button = ({ label }) => {
  return (
    <div>
      <button
        className='w-full h-auto rounded-lg text-center bg-gradient-to-t from-red-900 to-black" p-2 my-2 hover:font-medium'
        type="submit"
      >
        {label}
      </button>
    </div>
  );
};
