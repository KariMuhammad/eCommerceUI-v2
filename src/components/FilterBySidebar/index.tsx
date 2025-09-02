// import { products } from "@/constants";

import { Color, HorizontalProduct } from "../shared";
import Badge from "../shared/Badge";
import Checkbox from "../shared/Checkbox";
import NumberInput from "../shared/NumberInput";
import SectionHeader from "../shared/SectionHeader";
import { FilterBy } from "./FilterBy";
import { showInUI } from "@/constants/top-deals-days-products";
import Box from "../shared/Box";

export default function FilterBySidebar() {
  return (
    <aside aria-label="filter-by-sidebar">
      <SectionHeader title="Filter By" size="md" />

      <Box className="my-3">
        <FilterBy by="Availability">
          <Checkbox name="available" label="In Stock" checked={false} />
          <Checkbox name="available" label="In Stock" checked={false} />
        </FilterBy>
      </Box>

      <Box className="my-3">
        <FilterBy by="Price">
          <p>
            The heighst price is $<strong>1,999.00</strong>
          </p>

          <div className="flex items-center gap-2 mt-4">
            <span className="text-lg font-bold text-gray-400">$</span>
            <NumberInput name="price-start" label="From" />
            <NumberInput name="price-end" label="To" />
          </div>
        </FilterBy>
      </Box>

      <Box className="my-3">
        <FilterBy by="Brand">
          <div className="h-44 overflow-y-auto ">
            <Checkbox name="brand" label="Samsung" checked={false} />
            <Checkbox name="brand" label="Infinix" checked={false} />
            <Checkbox name="brand" label="OPPO" checked={false} />
            <Checkbox name="brand" label="Apple" checked={false} />
            <Checkbox name="brand" label="Redmi" checked={false} />
            <Checkbox name="brand" label="Xaomi" checked={false} />
            <Checkbox name="brand" label="Nokia" checked={true} />
          </div>
        </FilterBy>
      </Box>

      <Box className="my-3">
        <FilterBy by="Colors">
          <div className="flex items-center gap-3 flex-wrap">
            {/* 26 colors */}
            {Array.from({ length: 26 }, (_, i) => (
              <Color
                key={i}
                color={`hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`}
                className="w-6 h-6 rounded-full border border-gray-200 hover:scale-110 transition-all duration-200 cursor-pointer"
              />
            ))}
          </div>
        </FilterBy>
      </Box>

      <Box className="my-3">
        <FilterBy by="Size">
          <div className="badges flex flex-wrap items-center">
            <Badge text="1080 GB" />
          </div>
        </FilterBy>
      </Box>

      <Box className="my-3">
        <></>
        {/* <FilterBy by="Featured Products">
          <HorizontalProduct
            product={products[0]}
            showInUI={showInUI("image1", "image2", "price", "name")}
            imgSize="w-48 h-48"
          />

          <HorizontalProduct
            product={products[2]}
            showInUI={showInUI("image1", "image2", "price", "name")}
            imgSize="w-48 h-48"
          />

          <HorizontalProduct
            product={products[3]}
            showInUI={showInUI("image1", "image2", "price", "name")}
            imgSize="w-48 h-48"
          />

          <HorizontalProduct
            product={products[0]}
            showInUI={showInUI("image1", "image2", "price", "name")}
            imgSize="w-48 h-48"
          />
        </FilterBy> */}
      </Box>

      <div>
        <img src="/menu_2.webp" className="w-full h-full" />
      </div>
    </aside>
  );
}
