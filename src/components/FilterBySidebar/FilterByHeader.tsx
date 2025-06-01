import { BiMinus } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";

type FilterByHeaderProps = {
  title: string;
  isOpen?: boolean;
  toggleOpen?: () => void;
};

export function FilterByHeader({
  title,
  isOpen,
  toggleOpen,
}: FilterByHeaderProps) {
  return (
    <header
      aria-label={`filter-by-${title}`}
      className="w-full flex items-center justify-between"
    >
      <div className="left flex items-center gap-2">
        {isOpen ? (
          <BiMinus
            className="text-gray-600 cursor-pointer"
            onClick={toggleOpen}
          />
        ) : (
          <PiPlus
            className="text-gray-600 cursor-pointer"
            onClick={toggleOpen}
          />
        )}

        <h3 className="text-lg font-bold text-gray-800 uppercase">{title}</h3>
      </div>

      <div className="right">
        <p className="cursor-pointer hover:text-blue-500">Reset</p>
      </div>
    </header>
  );
}
