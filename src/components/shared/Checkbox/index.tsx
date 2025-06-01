import { cn } from "@/utils";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

type CheckboxProps = {
  name: string;
  label: string;
  checked?: boolean;
};

export default function Checkbox({ name, label, checked }: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked || false);
  const toggleChecked = () => setIsChecked((prev) => !prev);

  console.log("Checkbox rendered:", name, isChecked);

  return (
    <div aria-label={`checkbox-${name}`}>
      <label
        className="group flex items-center gap-2 cursor-pointer select-none text-lg"
        data-testid={`checkbox-${name}`} // TODO: data-testid for testing
        data-name={name} // TODO: data-name for testing
        htmlFor={name}
        onClick={toggleChecked}
      >
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          className="hidden invisible opacity-0 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <div
          role="checkbox"
          tabIndex={0}
          aria-label="custom-checkbox"
          className={cn({
            "w-5 h-5 border bg-blue-50 border-gray-200 outline-none rounded flex items-center justify-center cursor-pointer transition-colors duration-200 group-hover:border-blue-300":
              true,
            "bg-blue-100 border-blue-300": isChecked,
          })}
        >
          {isChecked && <FaCheck className="w-3 h-3 text-blue-400" />}
        </div>
        <span className="text-gray-700 capitalize ml-1">{label}</span>
      </label>
    </div>
  );
}
