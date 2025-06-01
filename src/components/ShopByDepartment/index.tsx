import { cn } from "@/utils";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function ShopByDepartment() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu((p) => !p);

  return (
    <div
      aria-label="header-dropdown"
      className="relative border-r py-1 rounded-2 z-40"
    >
      <button
        className="flex items-center gap-1 uppercase text-sm font-bold border-none px-2"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        onClick={toggleMenu}
      >
        <BiMenu className="text-2xl" /> shop by department
      </button>
      <ul
        className={cn({
          "transition-all absolute top-0 left-0 bg-white shadow-md text-black w-full p-2":
            true,
          "invisible opacity-0": !openMenu,
          "visible opacity-100 top-full": openMenu,
        })}
        aria-labelledby="dropdownMenuButton1"
      >
        {[
          "Laptop & Ipad",
          "Desktop",
          "PC & Monitors",
          "Offices",
          "Kitchen",
          "Bathroom",
          "Clean",
        ].map((department) => (
          <li key={department} className="py-1 px-2">
            <a href="#" className="text-black">
              {department}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
