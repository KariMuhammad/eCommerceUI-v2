import { cn } from "@/utils";
import { useRef, useState } from "react";

type NumberInputProps = {
  /**
   * The initial value of the input.
   * @default 0
   */
  initialValue?: number;
  /**
   * The label for the input.
   * @default ""
   */
  label?: string;
  /**
   * The HTML `for` attribute for the label.
   * @default ""
   */
  name?: string;
};

/**
 * NumberInput component allows users to input a number with a custom label.
 * It manages focus, blur, and change events to provide a smooth user experience.
 *
 * @returns {JSX.Element} The rendered NumberInput component.
 */

export default function NumberInput({
  initialValue = 0,
  label = "",
  name = "",
}: NumberInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // State to manage the input value
  const [value, setValue] = useState<number | null>(initialValue || null);
  //   State to manage the activity of the input
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue === "" || /^[0-9]+$/.test(newValue)) {
      setValue(Number(newValue));
    }
  };

  const handleFocus = () => {
    setIsActive(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "" || e.target.value === null) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div
      aria-label="custom-int-input"
      className="group relative border border-gray-300 p-6 w-28 rounded-md shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center"
      onClick={handleFocus}
    >
      {label && (
        <label
          htmlFor={label}
          className={cn({
            "absolute text-md font-semibold text-gray-400 transition-all duration-200":
              true,
            "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2": !isActive,
            "scale-90 left-1 top-1": isActive,
          })}
        >
          {label}
        </label>
      )}

      <input
        ref={inputRef}
        name={name}
        id={name}
        type="number"
        className={cn({
          "w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 outline-none bg-transparent text-gray-700 font-bold placeholder:text-gray-400 text-center":
            true,
          "hidden opacity-0 invisible": !isActive,
          "block visible opacity-100": isActive,
        })}
        value={value || 0}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
}
