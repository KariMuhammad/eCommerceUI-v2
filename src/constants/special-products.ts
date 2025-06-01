import { Product } from "@/types";

const products = [
  {
    id: 0,
    name: "Sony WH-XB910N Wireless NC XB Headphone - Black",
    image1: "/products_3_2.webp",
    image2: "/products_4_2.webp",
    price: 100,
    discount: 0,
    rate: 4,
    category: "headphone",
  },
  {
    id: 1,
    name: "Soundcore By Anker R50i True Wireless Earbuds 10mm Drivers with Big Bass, Bluetooth 5.3, 30H Playtime, IPX5-Water Resistant, AI",
    image1: "/products_4_2.webp",
    image2: "/products_5_2.webp",
    price: 89000,
    discount: 30,
    discountEndTime: "2025-06-31T23:59:59Z",
    rate: 3,
    category: "headphone",
  },
  {
    id: 2,
    name: "Apple iPhone 15 (128 GB) - Black, IPX5-Water Resistant, AI",
    image1: "/products_5_2.webp",
    image2: "/products_9_2.webp",
    price: 100,
    discount: 0,
    rate: 4,
    category: "mobiles",
  },
  {
    id: 3,
    name: "mens ACTIV SPCIAL SPORT SHOES Sneaker",
    image1: "/products_3_2.webp",
    image2: "/products_34_2.webp",
    price: 19900,
    discount: 50,
    discountEndTime: "2025-06-02T23:59:59Z",
    rate: 2,
    category: "electronics",
  },
  {
    id: 4,
    name: "Nokia t10 android tablet (4g + wi-fi) with 8 hd display, stereo speakers with ozo playback, 4gb ram + 64gb rom. ocean blue",
    image1: "/products_3_2.webp",
    price: 10_000,
    discount: 50,
    discountEndTime: "2025-12-31T23:59:59Z",
    rate: 1,
    category: "electronics",
  },
] as Product[];

export default products;
