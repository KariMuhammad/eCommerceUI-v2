import { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";

export default function QuantityInput() {
  const [inputValue, setInputValue] = useState(1);

  const handleDecrease = () => {
    if (inputValue > 1) {
      setInputValue((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    setInputValue((prev) => prev + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (/^\d*$/.test(value)) {
      setInputValue(value ? parseInt(value, 10) : 1);
    }
  };

  return (
    <div className="flex justify-between items-center gap-2 bg-white border border-gray-300 rounded-full p-2">
      <button
        className="font-bold bg-none rounded-full"
        onClick={handleDecrease}
      >
        <BiMinus className="text-2xl" />
      </button>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        defaultValue={1}
        className="w-9 p-2 bg-none text-center border-none outline-none"
      />

      <button className="bg-none rounded-full" onClick={handleIncrease}>
        <PiPlus className="text-2xl" />
      </button>
    </div>
  );
}
