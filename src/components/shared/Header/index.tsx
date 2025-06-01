import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

// Modals
import ModelSidebar from "@/components/Modals/Sidebar";

// Components
import AuthIcon from "@/components/AuthIcon";
import CartIcon from "@/components/CartIcon";
import LanguageSwitch from "@/components/LanguageSwitch";
import CurrencySwitch from "@/components/CurrencySwitch";
import CompareProductIcon from "@/components/CompareProductIcon";
import ShopByDepartment from "@/components/ShopByDepartment";
import WishlistIcon from "@/components/WishlistIcon";
import SearchInput from "../SearchInput";
import MobileSideBar from "../MobileSideBar";
import { TbDiscountFilled } from "react-icons/tb";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log("showSidebar", openMenu);

  const toggleSidebar = () => setOpenMenu((prev) => !prev);
  const closeSidebar = () => setOpenMenu(false);

  return (
    <header aria-label="header" className="bg-blue-900 text-white">
      <div className="container mx-auto px-1 py-3">
        <div className="container-xxl">
          {/* Top Header */}
          <header
            aria-label="header-top"
            className="relative hidden lg:flex z-50"
          >
            {/* left text */}
            <LanguageSwitch />
            <CurrencySwitch />

            <div className="flex items-center justify-between flex-1">
              <p className="px-2">Need help? +123 456 789</p>

              {/* right text */}
              <ul className="flex gap-1">
                <li className="px-2 border-l border-l-black border-opacity-20">
                  About us
                </li>
                <li className="px-2 border-l border-l-black border-opacity-20">
                  Order Tracking
                </li>
                <li className="px-2 border-l border-l-black border-opacity-20">
                  Contact us
                </li>
                <li className="px-2 border-l border-l-black border-opacity-20">
                  FAQs
                </li>
              </ul>
            </div>
          </header>

          {/* Middle Header */}
          <div aria-label="header-options">
            {/* Top-Middle Header */}
            <header
              aria-label="header-middle"
              className="my-3 flex items-center justify-between"
            >
              <div
                aria-label="menu-toggle"
                className="lg:hidden text-white"
                onClick={toggleSidebar}
              >
                <LuMenu className="text-3xl" />
              </div>

              {/* LOGO */}
              <div aria-label="logo-name" className="flex justify-between mb-3">
                <Link to={"/"} className="text-4xl font-extrabold text-white">
                  Stori
                </Link>
              </div>

              <div className="hidden lg:block flex-1 mx-6">
                {/* SEARCH */}
                <div className="search">
                  <SearchInput />
                </div>

                {/* Options */}
                <div
                  aria-label="header-links"
                  // TODO: hidden in all screens for now, change after
                  className="hidden flex-wrap items-center justify-between"
                >
                  <CompareProductIcon />

                  <WishlistIcon />

                  <AuthIcon />
                </div>
              </div>

              {/* Common component */}
              <CartIcon />
            </header>

            {/* Bottom-Middle Header */}
            <header aria-label="header-bottom">
              {/* SEARCH */}
              <div className="lg:hidden">
                <SearchInput />
              </div>

              <div className="hidden lg:flex gap-3 items-center">
                <div className="basis-1/4">
                  <ShopByDepartment />
                </div>

                <div
                  aria-label="header-links"
                  className="flex basis-2/4 items-center gap-3"
                >
                  {["Home", "Store", "Blog", "Contact"].map((link) => (
                    <NavLink
                      key={link}
                      to={`/${
                        link.toLowerCase() === "home" ? "" : link.toLowerCase()
                      }`}
                      className="transition-all text-white py-2 px-3 text-sm font-bold uppercase hover:bg-blue-600"
                    >
                      {link}
                    </NavLink>
                  ))}
                </div>

                <div className="basis-1/4">
                  <p className="flex items-center gap-1 text-md">
                    <TbDiscountFilled className="bg-cyan-500 text-xl" /> Sales
                    20% Off Your First Order
                  </p>
                </div>
              </div>
            </header>
          </div>

          {/* Mobile Sidebar */}
          <ModelSidebar showSidebar={openMenu} onCloseSidebar={closeSidebar}>
            <MobileSideBar
              showSidebar={openMenu}
              onCloseSidebar={closeSidebar}
            />
          </ModelSidebar>
        </div>
      </div>
    </header>
  );
};

export default Header;
