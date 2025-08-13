import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { AxiosError } from "axios";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { toast } from "sonner";
import { Product, ProductResponse } from "@/types";

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

export function DateCountDown(date: Date) {
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

export function catchAsyncThunk<T>(asyncFn: () => Promise<T>): Promise<T> {
  return (async () => {
    try {
      return await asyncFn()
    } catch (error) {
      console.error('Async thunk error:', error)
      throw error instanceof AxiosError ? new Error(error.response?.data.errors.message) : error
    }
  })()
}

// Utility function for handling token expiration in RTK Query
export const createBaseQueryWithAuth = (baseUrl: string) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      const persistRoot = localStorage.getItem("persist:auth");
      const token = persistRoot ? JSON.parse(JSON.parse(persistRoot).token) ?? "" : "";

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    }
  });

  return async (args: any, api: any, extraOptions: any) => {
    const result = await baseQuery(args, api, extraOptions);

    // Handle token expiration
    if (result.error && result.error.status === 401) {
      try {
        // Import store and logout mutation dynamically
        const store = (await import('@/redux/store')).default;
        const authApi = (await import('@/redux/features/auth/authApi')).default;

        // Trigger logout mutation to clear server-side session
        const logoutMutation = store.dispatch(
          authApi.endpoints.logout.initiate({})
        );

        // Wait for logout to complete (optional)
        await logoutMutation.unwrap().catch(() => {
          // Handle logout error silently since user is already being logged out
          console.warn('Logout request failed, but continuing with client-side cleanup');
        });

        // Clear any auth-related data from Redux state
        store.dispatch(authApi.util.resetApiState());

        // Show user-friendly message
        toast.error("Session expired. Please sign in again.");

        // Navigate to login page
        setTimeout(() => {
          window.location.href = "/auth/sign-in";
        }, 100);

      } catch (error) {
        console.error('Error during logout process:', error);
        // Still navigate to login even if logout fails
        setTimeout(() => {
          window.location.href = "/auth/sign-in";
        }, 100);
      }
    }

    return result;
  };
};

/**
 * Check if Token is expired or still OK
 * @param token 
 * @returns 
 */
export const isTokenExpired = (token: string): boolean => {
  if (!token) return true;

  try {
    // Decode JWT token (without verification - just to read payload)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

    // Check if token has expired (exp is in seconds)
    return payload.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true; // Treat invalid tokens as expired
  }
};

export const getTokenExpirationTime = (token: string): number | null => {
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp * 1000; // Convert to milliseconds
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};

export const mapProductFromApi = (apiResponse: ProductResponse): Product => ({
  id: apiResponse._id,
  name: apiResponse.name,
  image1: apiResponse.images[0].url,
  image2: apiResponse.images[1].url ?? "",
  price: apiResponse.price,
  rate: apiResponse.averageRatings,

  category: apiResponse.category[0].name,
  slug: apiResponse.slug,

  discount: apiResponse.discount.percentage,
  savingsAmount: apiResponse.savingsAmount,
  discountEndTime: apiResponse.discount.endDate,

  quantity: apiResponse.quantity,
  availability: apiResponse.availability,

  details: { description: apiResponse.description },
  options: true,
})

export const priceFormatter = ({ price = 0, currency = 'USD', locale = 'en-US', showCents = true }) => {

  const formatPrice = (amount: number) => {
    if (amount === null || amount === undefined || isNaN(amount)) {
      return 'N/A';
    }

    const options: NumberFormatOptions = {
      style: 'currency',
      currency: currency,
      currencySign: "accounting",
      minimumFractionDigits: showCents ? 2 : 0,
      maximumFractionDigits: showCents ? 2 : 0,
    };

    return new Intl.NumberFormat(locale, options).format(amount);
  };

  return formatPrice(price);
};