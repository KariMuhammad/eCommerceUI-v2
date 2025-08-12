import { priceAfterDiscount, priceFormatter } from "@/utils";

type PriceWithDiscountProps = {
  price: number; // Original price of the product
  discount: number; // Discounted price of the product
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

export default function PriceWithDiscount({
  price,
  discount,
  textSize = "lg"
}: PriceWithDiscountProps) {
  const { price: finalPrice, discountPrice } = priceAfterDiscount(
    price,
    discount
  );

  if (!price) return;

  const sizeClasses = {
    sm: {
      discounted: "text-sm font-semibold",
      original: "text-xs",
      regular: "text-sm font-semibold"
    },
    md: {
      discounted: "text-base font-semibold",
      original: "text-sm",
      regular: "text-base font-semibold"
    },
    lg: {
      discounted: "text-lg font-semibold",
      original: "text-sm",
      regular: "text-lg font-semibold"
    },
    xl: {
      discounted: "text-xl font-semibold",
      original: "text-base",
      regular: "text-xl font-semibold"
    },
    "2xl": {
      discounted: "text-2xl font-semibold",
      original: "text-lg",
      regular: "text-2xl font-semibold"
    },
    "3xl": {
      discounted: "text-3xl font-semibold",
      original: "text-xl",
      regular: "text-3xl font-semibold"
    },
    "4xl": {
      discounted: "text-4xl font-semibold",
      original: "text-2xl",
      regular: "text-4xl font-semibold"
    }
  };

  const classes = sizeClasses[textSize];

  return (
    <div className="flex items-center gap-2">
      {discount > 0 ? (
        <>
          <span className={`${classes.discounted} font-semibold text-red-500`}>
            {discountPrice !== 0 ? `${priceFormatter({ price: discountPrice })}` : "Free"}
          </span>
          <span className={`${classes.original} text-gray-500 line-through`}>
            {priceFormatter({ price: finalPrice })}
          </span>
        </>
      ) : (
        <span className={`${classes.regular} font-semibold text-gray-800`}>{priceFormatter({ price })}</span>
      )}
    </div>
  );
}
