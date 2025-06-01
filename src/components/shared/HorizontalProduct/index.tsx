import { Product, ProductShowUI } from "@/types";
import { Link } from "react-router-dom";

import Rates from "../Rates";
import PriceWithDiscount from "../PriceWithDiscount";
import ProductOptions from "@/components/ProductOptions";

type HorizontalProductProps = {
  product: Product;
  showInUI: ProductShowUI;
  imgSize?: string;
  className?: string;
};

const HorizontalProduct = ({
  product,
  showInUI,
  imgSize = "w-72",
  className = "",
}: HorizontalProductProps) => {
  return (
    <div
      aria-label="product-card"
      className={`group relative flex flex-col sm:flex-row bg-white p-3 shadow-sm rounded-xl ${className}`}
    >
      <div aria-label="product-image" className={`relative ${imgSize}`}>
        {showInUI.image1 && (
          <img
            className="transition-all w-full scale-100 group-hover:scale-0"
            src={product.image1}
            alt={product.name}
          />
        )}

        {showInUI.image2 && (
          <img
            className="transition-all w-full absolute top-0 left-0 inset-0 scale-0 group-hover:scale-100"
            src={product.image2}
            alt={product.name}
          />
        )}

        {showInUI.options && <ProductOptions />}
      </div>

      <div aria-label="product-content" className="flex flex-col gap-y-2 p-3">
        <h3
          aria-label="product-title"
          className="text-lg font-bold line-clamp-2"
        >
          {/* Use <Link> instead */}
          <Link to="/product/1">{product.name}</Link>
        </h3>

        <div aria-label="product-rate" className="flex items-center gap-1">
          <Rates rate={product.rate} isFixed={false} sizeStars={3} />

          {/* (reviews) Should be separated on rates */}
          {showInUI.rate && (
            <div aria-label="product-reviews" className="">
              (4 reviews)
            </div>
          )}
        </div>

        <div aria-label="product-price" className="flex items-center gap-1">
          {showInUI.price && (
            <>
              <PriceWithDiscount
                price={product.price}
                discount={product.discount}
              />
            </>
          )}
        </div>

        <p
          aria-label="product-discount"
          className="absolute left-1 top-1 bg-green-700 text-white py-1 px-4"
        >
          -{product.discount}%
        </p>

        {showInUI.details && (
          <div aria-label="product-details" className="">
            <ul className="m-0 p-0 text-gray-500 list-disc list-inside">
              <li>Bass and stereo sound.</li>
              <li>Display with 3088 x 1440 pixels resolution.</li>
              <li>Memory, Storage & SIM: 12GB RAM, 256GB</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalProduct;
