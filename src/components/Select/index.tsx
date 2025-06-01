import { useState } from "react";
import { LuArrowDown } from "react-icons/lu";

type SelectProps = {
  title: string;
  className?: string;
};

const Select = ({ title, className }: SelectProps) => {
  const [value, setValue] = useState("0");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const hasValue = value !== "0";

  return (
    <div className={`cool-select ${hasValue ? "active" : ""} ${className}`}>
      <div className="title-select h4">{title}</div>
      <select name="select" id="select" onChange={handleChange}>
        <option value="0">Select</option>
        <option value="United States">United States</option>
        <option value="Egypt">Egypt</option>
        <option value="Lebnon">Lebnon</option>
      </select>
      <div className="value-select">{hasValue && <span>{value}</span>}</div>
      <div className="icon-select">
        <LuArrowDown />
      </div>
    </div>
  );
};

export default Select;
