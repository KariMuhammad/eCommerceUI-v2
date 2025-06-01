import SearchByCategoryOptions from "@/components/SearchByCategoryOptions";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <div aria-label="header-search" className="relative flex-grow-1 my-1">
      <div className="flex bg-white">
        <div className="hidden lg:block">
          <SearchByCategoryOptions />
        </div>
        <input
          type="text"
          className="border-none outline-none p-3 w-5/6 lg:w-10/12 block lg:ml-auto lg:pr-11 rounded-md text-black"
          placeholder="Search Here..."
          aria-label="Search Here..."
          aria-describedby="basic-addon2"
          // hidden
        />
        <span
          aria-label="header-search-icon"
          className="absolute top-1/2 -translate-y-1/2 right-1 p-3 cursor-pointer bg-cyan-600 hover:bg-cyan-700"
          id="basic-addon2"
        >
          <BsSearch className="text-white font-extrabold" />
        </span>
      </div>
    </div>
  );
};

export default SearchInput;
