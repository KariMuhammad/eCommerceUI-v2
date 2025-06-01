import Rates from "../Rates";
import { Product } from "@/types";
import Button from "../Button";
import PriceWithDiscount from "../PriceWithDiscount";
import ProductDiscountCountDown from "@/components/ProductDiscountCountDown";
import ProductOptions from "@/components/ProductOptions";
interface VerticalProductProps {
  product: Product;
}

export default function VerticalProduct({ product }: VerticalProductProps) {
  // const [love, setLove] = React.useState(false);

  console.log("Product ", product.id);
  console.log("Discount ", product.discount);
  return (
    <div aria-label="product" className="relative p-3 bg-white">
      <div
        aria-label="image-wrapper"
        className="relative group w-full overflow-hidden"
      >
        <img
          src={product.image1}
          className="w-full scale-100 group-hover:scale-0 hover:opacity-0" //visible opacity-100 group-hover:invisible group-hover:opacity-0
        />
        <img
          src={product.image2}
          className="w-full absolute top-0 left-0 inset-0 transition-all scale-0 opacity-0 group-hover:scale-100 hover:opacity-100 backdrop-blur-0" // invisible opacity-0 group-hover:visible group-hover:opacity-100
        />

        {product.discountEndTime && (
          <ProductDiscountCountDown
            discountEndTime={product.discountEndTime || ""}
            productId="1"
          />
        )}

        <ProductOptions />
      </div>

      <h5 className="text-md font-semibold">{product.name}</h5>

      <div aria-label="product-info" className="flex items-center gap-1">
        <Rates rate={product.rate} isFixed={true} sizeStars={4} />
        <span>(4 reviews)</span>
      </div>

      <div aria-label="product-price" className="flex items-center gap-1">
        <PriceWithDiscount price={product.price} discount={product.discount} />
      </div>

      {product.discount > 0 && (
        <div
          aria-label="product-discount"
          className="absolute top-1 left-1 bg-red-600 text-white py-1 px-4"
        >
          -{product.discount}%
        </div>
      )}

      <Button
        aria-label="add-to-cart"
        className="transition-all my-3 rounded-3xl hover:bg-cyan-500"
        onClick={() => console.log("Add to Cart")}
      >
        Add to Cart
      </Button>
    </div>
  );
}
