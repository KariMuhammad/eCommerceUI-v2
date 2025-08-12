import { DateCountDown } from "@/utils";
import { useEffect, useState } from "react";

type ProductDiscountCountDownProps = {
  productId: string; // Unique identifier for the product
  discountEndTime: Date; // The end time of the discount
  // onDiscountEnd?: (productId: string) => void; // Callback when discount ends
};

export default function ProductDiscountCountDown({
  discountEndTime,
}: ProductDiscountCountDownProps) {
  const [time, setTime] = useState(() => {
    return DateCountDown(discountEndTime);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const countdown = DateCountDown(discountEndTime);

      if (countdown.seconds > 0) {
        countdown.seconds -= 1;
      } else if (countdown.minutes > 0) {
        countdown.minutes -= 1;
        countdown.seconds = 59;
      } else if (countdown.hours > 0) {
        countdown.hours -= 1;
        countdown.minutes = 59;
        countdown.seconds = 59;
      } else if (countdown.days > 0) {
        countdown.days -= 1;
        countdown.hours = 23;
        countdown.minutes = 59;
        countdown.seconds = 59;
      }

      setTime(countdown);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [discountEndTime]);

  return (
    <div
      aria-label="product-discount-countdown"
      className="absolute bottom-1 left-1/2 -translate-x-1/2 group-hover:translate-y-full w-full flex items-center justify-center gap-3 rounded-full bg-white drop-shadow-md px-3 py-1 text-xs font-semibold text-[#333] transition-transform"
    >
      <div aria-label="days-countdown" className="flex flex-col items-center">
        <span className="value text-sm font-bold">{time.days}</span>
        <span className="label">Days</span>
      </div>
      <div aria-label="hours-countdown" className="flex flex-col items-center">
        <span className="value text-sm font-bold">{time.hours}</span>
        <span className="label">Hrs</span>
      </div>
      <div
        aria-label="minutes-countdown"
        className="flex flex-col items-center"
      >
        <span className="value text-sm font-bold">{time.minutes}</span>
        <span className="label">Mins</span>
      </div>
      <div
        aria-label="seconds-countdown"
        className="flex flex-col items-center"
      >
        <span className="value text-sm font-bold">{time.seconds}</span>
        <span className="label">Secs</span>
      </div>
    </div>
  );
}
