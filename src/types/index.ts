export enum ModalSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  full = "full"
}

export type Color = {
  _id: string;
  name: string;
  hexCode: string;
  quantity: number;
}

export type Product = {
  id?: string;
  slug: string;
  // category: string;
  category: { _id: string, name: string };
  image2?: string;
  image1: string;
  details?: {
    [key: string]: string;
  };
  options?: boolean;
  name: string;
  price: number;
  discount: number;
  discountedPrice: number;
  savingsAmount: number;
  discountEndTime?: Date;
  quantity: number;
  availability: boolean;
  rate: number;
};

export type ProductResponseForUI = {
  products: Product[];
  pagination: Pagination;
}

export type ProductShowUI = {
  [K in keyof Product]?: boolean;
};

export type ProductResponse = {
  _id: string;
  name: string;
  slug: string;
  description: string;

  price: number;
  discount: {
    percentage: number;
    startDate: Date;
    endDate: Date;
  }
  discountedPrice: number;
  savingsAmount: number;
  quantity: number;
  availability: boolean;
  sold: number;

  images: { url: string }[];
  colors: Color[];

  averageRatings: number;
  reviewsCount: number;

  category: { _id: string, name: string }[];
  tags: string[];
  brand: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WishlistProduct extends Product {
  addedAt: Date;
}

export type Pagination = {
  page: number,
  limit: number,
  nextPage: number | null,
  prevPage: number | null,
  totalCount: number,
  count: number
}

export type User = {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  mobile: string;
  role: string;
  address: string[];
  wishlist: string[];
}

export type Category = {
  _id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  slug: string;
}

export interface Review {
  _id: string;
  user: {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
  };
  product: {
    _id: string;
    name: string;
    images?: string[];
    price?: number;
    slug?: string;
  };

  title: string;
  review: string;
  stars: number;
  verified: boolean;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}


// ================== Requests Types ================== 
export type CreateUserRequest = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobile: undefined;
};

export type GetProductsResponse = {
  products: ProductResponse[],
  pagination: Pagination
}

export type RequestQueries = {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

export interface ReviewsResponse {
  reviews: Review[];
  stats: ReviewStats;
}

export interface ReviewStatsResponse {
  data: ReviewStats;
}

export interface CreateReviewRequest {
  productId: string;
  title: string;
  review: string;
  stars: number;
}