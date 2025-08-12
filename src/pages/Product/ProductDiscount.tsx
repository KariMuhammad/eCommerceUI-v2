import PriceWithDiscount from "@/components/shared/PriceWithDiscount";

type ProductDiscountProps = {
  originalPrice: number;
  discount: number;
  salePrice?: number;
  savingAmount: number;
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

export function ProductDiscount({ originalPrice, discount, savingAmount, textSize = "4xl" }: ProductDiscountProps) {
  return (
    <div className="flex flex-col gap-2">
      <PriceWithDiscount price={originalPrice} discount={discount} textSize={textSize} />

      {discount > 0 && (
        <div className="text-xl text-green-600 font-semibold">
          You save $<span>{savingAmount}</span> (<span>{discount}%</span>)
        </div>
      )}
    </div>
  );
}
