export function ProductDiscount() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-5xl font-bold">$69.00</span>
        <span className="text-xl line-through text-gray-500">$89.00</span>
      </div>

      <div className="text-xl text-green-600 font-semibold">
        You save $20.00 (22%)
      </div>
    </div>
  );
}
