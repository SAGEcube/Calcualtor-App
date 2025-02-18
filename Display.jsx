import React from "react";

const Display = ({ value }) => {
  return (
    <input
      type="text"
      value={value}
      className="w-full text-right p-4 text-2xl bg-[#27c0ac] text-blue-900 rounded-md mb-4 border-none outline-none"
      readOnly
    />
  );
};

export default Display;
