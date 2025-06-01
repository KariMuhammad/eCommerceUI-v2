import { Link } from "react-router-dom";

// Icons
import { BsDash, BsShop } from "react-icons/bs";
import { cn } from "@/utils";
import SearchInput from "../SearchInput";
import SearchSide from "@/components/SearchSide";
import { BiUser } from "react-icons/bi";
import { MdCompareArrows, MdFavorite } from "react-icons/md";
import { FaCarTunnel } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import LanguageSwitch from "@/components/LanguageSwitch";

interface MobileSideBarProps {
  onCloseSidebar: () => void;
  showSidebar: boolean;
}

const MobileSideBar = ({ onCloseSidebar, showSidebar }: MobileSideBarProps) => {
  return (
    <nav
      className={cn({
        "transition-all absolute z-50 inset-y-0 bg-white text-black px-5 py-7":
          true,
        "-left-full invisible opacity-0 lg:invisible lg:opacity-0": true,
        "visible opacity-100 left-0 w-full sm:w-1/2": showSidebar,
      })}
    >
      <div className="my-3">
        <div
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white rounded-full"
          onClick={onCloseSidebar}
        >
          <BsDash className="text-xl" />
        </div>
      </div>

      {/* Sidebar Header */}
      <div className="sidebar-head">
        <div className="my-3 mb-7">
          <SearchSide />
        </div>
      </div>

      {/* Sidebar Body */}
      <div className="sidebar-body">
        {/* Middle Header */}
        <header aria-label="header-middle" className="">
          {/* Options */}
          <div
            aria-label="header-links"
            className="col-12 col-sm-4 d-flex flex-wrap align-items-center justify-content-between"
          >
            {[
              { name: "Login/Register", link: "/login", icon: <BiUser /> },
              { name: "Home", link: "/home", icon: <HiHome /> },
              { name: "Shop", link: "/shop", icon: <BsShop /> },
              {
                name: "Compare",
                link: "/compare-products",
                icon: <MdCompareArrows />,
              },
              { name: "Wishlist", link: "/wishlist", icon: <MdFavorite /> },
              { name: "Cart", link: "/cart", icon: <FaCarTunnel /> },
            ].map((e, index) => (
              <div className="icon w-full">
                <Link
                  key={index}
                  to={e.link}
                  className="w-full flex items-center gap-2 p-3 border-b border-b-gray-200 hover:bg-gray-50"
                  onClick={onCloseSidebar}
                >
                  {e.icon}
                  <p className="mb-0">{e.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </header>
        {/* Bottom Header */}
      </div>

      {/* Sidebar Bottom */}
      <div className="relative">
        <LanguageSwitch />
      </div>
    </nav>
  );
};

export default MobileSideBar;
