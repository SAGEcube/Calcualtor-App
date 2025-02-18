import { useState } from "react";
import Display from "./Components/Display";
import ButtonGrid from "./Components/ButtonsGrid"; // Import ButtonGrid

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => {
      if (/[+\-*/]$/.test(prev) && /[+\-*/]/.test(value)) {
        return prev;
      }
      return prev + value;
    });
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black/80 to-[rgba(25,25,112,0.7)] bg-radial-gradient from-[#0f3460] to-[#16213e]">
      <div className="w-80 p-5 bg-[#f0f8ff] text-blue-900 rounded-xl shadow-lg">
        {/* Display Component */}
        <Display value={input} />

        {/* Button Grid Component */}
        <ButtonGrid
          onButtonClick={handleClick}
          onClear={clearInput}
          onCalculate={calculateResult}
        />
      </div>
    </div>
  );
}
