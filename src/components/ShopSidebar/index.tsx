import FilterBySidebar from "../FilterBySidebar";
import Box from "../shared/Box";
import SectionHeader from "../shared/SectionHeader";

export default function ShopSidebar() {
  return (
    <div aria-label="shop-sidebar" className="lg:flex flex-col gap-3">
      <SectionHeader title="Products Categories" size="md" />

      <Box>
        <div aria-label="filters-categories">
          <ul className="list-none">
            {[
              "Babies & Toys",
              "Beauty & Health",
              "Books & Stationery",
              "Clothing & Accessories",
              "Computers & Electronics",
              "Food & Beverages",
              "Home & Garden",
              "Jewelry & Watches",
              "Sports & Outdoors",
            ].map((category) => (
              <li
                key={category}
                className="transition-all duration-200 hover:text-blue-500 cursor-pointer text-gray-700 text-sm py-1 px-2 rounded-md hover:bg-gray-100"
                aria-label={`category-${category
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
              >
                {category}
                <span className="text-gray-400 ml-2 text-sm">(3)</span>
              </li>
            ))}
          </ul>
        </div>
      </Box>

      <FilterBySidebar />
    </div>
  );
}
