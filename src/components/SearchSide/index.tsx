import { BiSearch } from "react-icons/bi";

export default function SearchSide() {
  return (
    <div aria-label="search-component">
      <h5 className="text-sm font-bold uppercase">what are you looking for?</h5>
      <div aria-label="search-input" className="relative">
        <input
          type="text"
          placeholder="search..."
          className="w-full py-1 px-3 shadow-sm rounded-full border border-gray-100 capitalize"
        />

        <div
          aria-label="search-icon"
          className="absolute top-1/2 -translate-y-1/2 right-3 rounded-full"
        >
          <BiSearch />
        </div>
      </div>
    </div>
  );
}
