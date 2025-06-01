import { priceAfterDiscount } from "@/utils";

type PriceWithDiscountProps = {
  price: number; // Original price of the product
  discount: number; // Discounted price of the product
};

export default function PriceWithDiscount({
  price,
  discount,
}: PriceWithDiscountProps) {
  const { price: finalPrice, discountPrice } = priceAfterDiscount(
    price,
    discount
  );

  if (!price) return;

  return (
    <div className="flex items-center gap-2">
      {discount > 0 ? (
        <>
          <span className="text-lg font-semibold text-red-500">
            ${discountPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${finalPrice.toFixed(2)}
          </span>
        </>
      ) : (
        <span className="text-lg font-semibold text-gray-800">${price}</span>
      )}
    </div>
  );
}
