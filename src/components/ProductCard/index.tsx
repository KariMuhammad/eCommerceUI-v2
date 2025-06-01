import { Product } from "@/types";
import { Rates } from "../shared";
import Box from "../shared/Box";
import Button from "../shared/Button";
import ProductDiscountCountDown from "../ProductDiscountCountDown";
import PriceWithDiscount from "../shared/PriceWithDiscount";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Box>
      <div aria-label="product-card" className="group relative">
        <div className="relative overflow-hidden rounded-lg p-3">
          <img
            src={product.image1}
            alt={product.name}
            className="w-full h-full max-h-48 object-contain group-hover:scale-105 transition-transform duration-300"
          />

          {product.discountEndTime && (
            <ProductDiscountCountDown
              discountEndTime={product.discountEndTime || ""}
              productId="1"
            />
          )}
        </div>

        <div className="mt-2">
          <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
          <Rates stars={5} sizeStars={5} rate={0} isFixed={false} />
          <PriceWithDiscount
            price={product.price}
            discount={product.discount}
          />
        </div>

        <Button
          className="bg-black text-white hover:bg-blue-700 transition-colors duration-300 mt-2"
          type="button"
          aria-label="add-to-cart-${product.id}"
        >
          <span className="text-sm">Add to Cart</span>
        </Button>
      </div>
    </Box>
  );
}
