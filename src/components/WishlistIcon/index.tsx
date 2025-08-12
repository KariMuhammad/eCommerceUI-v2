import { BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function WishlistIcon() {
  return (
    <div className="icon">
      <Link to={"/wishlist"} className="flex items-center gap-2">
        <BiHeart className="text-2xl text-white" />
        <p className="mb-0">
          Favourite <br /> My Wishlist
        </p>
      </Link>
    </div>
  );
}
