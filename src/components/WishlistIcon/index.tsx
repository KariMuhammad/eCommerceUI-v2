import { Link } from "react-router-dom";

export default function WishlistIcon() {
  return (
    <div className="icon">
      <Link to={"/wishlist"} className="d-flex align-items-center gap-2">
        <img src="images/wishlist.svg" alt="icon-wishlist" />
        <p className="mb-0">
          Favourite <br /> Wishlist
        </p>
      </Link>
    </div>
  );
}
