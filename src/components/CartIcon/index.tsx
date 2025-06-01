import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function CartIcon() {
  return (
    <div aria-label="cart-icon" className="">
      <Link to={"/cart"} className="relative flex items-center gap-1">
        <BiCart className="text-4xl" />
        <span className="absolute -top-1 -left-1 flex items-center justify-center w-5 h-5 rounded-full text-center bg-white text-black font-bold">
          0
        </span>
        <div aria-label="header-middle__cart-label" className="hidden lg:block">
          <p className="">$500</p>
        </div>
      </Link>
    </div>
  );
}
