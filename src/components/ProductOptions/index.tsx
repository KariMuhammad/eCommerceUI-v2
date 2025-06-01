import {
  BsArrowDownUp,
  BsCart,
  BsEye,
  BsFillSuitHeartFill,
} from "react-icons/bs";

export default function ProductOptions() {
  return (
    <div
      aria-label="product-options"
      className="bg-white p-2 rounded-full shadow-md transition-all invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-0 -right-10 group-hover:right-0 flex flex-col gap-1"
    >
      <div
        aria-label="product-add-cart"
        className="rounded-full transition-all p-2 hover:bg-black hover:text-white"
      >
        <a href="/cart">
          <BsCart />
        </a>
      </div>
      <div
        aria-label="product-compare"
        className="rounded-full transition-all p-2 hover:bg-black hover:text-white"
      >
        <a href="/compare-products">
          <BsArrowDownUp />
        </a>
      </div>
      <div
        aria-label="product-wishlist"
        className="rounded-full transition-all p-2 hover:bg-black hover:text-white"
      >
        <a href="/wishlist">
          <BsFillSuitHeartFill />
        </a>
      </div>
      <div
        aria-label="product-preview"
        className="rounded-full transition-all p-2 hover:bg-black hover:text-white"
      >
        <a href="/product/1">
          <BsEye />
        </a>
      </div>
    </div>
  );
}
