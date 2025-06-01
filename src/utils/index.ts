import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function priceAfterDiscount(
  price: number,
  discount: number
): { price: number; discountPrice: number } {
  const discountPrice = price - (price * discount) / 100;
  return { price, discountPrice };
}

export default function DateCountDown(date: string) {
  return {
    days: Math.floor(
      (new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    ),
    hours: Math.floor(
      ((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60)) %
        24
    ),
    minutes: Math.floor(
      ((new Date(date).getTime() - new Date().getTime()) / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      ((new Date(date).getTime() - new Date().getTime()) / 1000) % 60
    ),
  };
}
