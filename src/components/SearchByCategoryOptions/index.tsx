import { cn } from "@/utils";
import { useState } from "react";
import { CgArrowDown } from "react-icons/cg";

export default function SearchByCategoryOptions() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((s) => !s);

  return (
    <div className="h-full z-[9999] relative">
      <button
        className={cn({
          "bg-white hover:bg-blue-700 hover:text-white border-white flex items-center justify-between border-r border-r-black text-black py-2 px-2 h-full":
            true,
          "bg-blue-700 text-white": openMenu,
        })}
        onClick={toggleMenu}
      >
        <span className="">All Categories</span> <CgArrowDown />
      </button>
      <ul
        className={cn({
          "transition-all absolute top-0 left-0 bg-white text-black w-full m-0 p-0":
            true,
          "invisible opacity-0": !openMenu,
          "visible opacity-100 top-full": openMenu,
        })}
      >
        {["PC", "Mouse & Keyboard", "Monitors", "Games", "Offices"].map(
          (category) => (
            <li
              key={category}
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </li>
          )
        )}
      </ul>

      {/* Result of response api */}
      <ul></ul>
    </div>
  );
}
