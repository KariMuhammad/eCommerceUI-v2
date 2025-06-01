export type Product = {
  id?: number;
  category?: string;
  image2?: string;
  details?: {
    [key: string]: string;
  };
  options?: boolean;
  name: string;
  price: number;
  discount: number;
  discountEndTime?: string;
  rate: number;
  image1: string;
};

export type ProductShowUI = {
  [K in keyof Product]?: boolean;
};
