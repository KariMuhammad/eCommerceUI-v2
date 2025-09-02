import { Product, ProductShowUI } from "@/types";

function initUIWithDefaultValue(value: boolean): ProductShowUI {
  return {
    id: value,
    category: value,
    name: value,
    price: value,
    image1: value,
    image2: value,
    discount: value,
    rate: value,
    details: value,
    availability: value,
    discountedPrice: value,
    discountEndTime: value,
    options: value,
    quantity: value,
    savingsAmount: value,
    slug: value,
  };
}

export function showInUI(...keys: (keyof Product)[]) {
  const UI = initUIWithDefaultValue(false);

  keys.forEach((key) => {
    UI[key] = true;
  });

  return UI;
}

export function hideInUI(...keys: (keyof Product)[]) {
  const UI = initUIWithDefaultValue(true);

  keys.forEach((key) => {
    UI[key] = false;
  });

  return UI;
}
