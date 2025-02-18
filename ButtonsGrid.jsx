import React from "react";

const ButtonGrid = ({ onButtonClick, onClear, onCalculate }) => {
  const buttons = [
    "9",
    "8",
    "7",
    "/",
    "6",
    "5",
    "4",
    "*",
    "3",
    "2",
    "1",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="grid grid-cols-4 gap-2">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => (btn === "=" ? onCalculate() : onButtonClick(btn))}
          className={`p-4 text-xl rounded-md shadow-md transition-all hover:shadow-lg hover:-translate-y-1
            ${
              ["/", "*", "-", "+"].includes(btn)
                ? "bg-yellow-400 hover:bg-yellow-500"
                : ""
            }
            ${btn === "=" ? "bg-green-400 text-white hover:bg-green-500" : ""}
            ${btn === "0" ? "col-span-1" : "bg-[#b0e0e6] text-blue-900"}
          `}
        >
          {btn}
        </button>
      ))}
      <button
        onClick={onClear}
        className="p-4 text-xl bg-red-400 text-white hover:bg-red-500 rounded-md shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
      >
        C
      </button>
    </div>
  );
};

export default ButtonGrid;
