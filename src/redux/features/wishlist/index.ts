import { API_BASE_URL } from "@/constants";
import { ProductResponse } from "@/types";
import { createBaseQueryWithAuth } from "@/utils";
import { createApi } from "@reduxjs/toolkit/query/react";

export const wishlistApi = createApi({
    reducerPath: "wishlistApi",
    baseQuery: createBaseQueryWithAuth(`${API_BASE_URL}/reviews`),
    tagTypes: ["Wishlist"],
    endpoints: (builder) => ({
        getWishlist: builder.query<ProductResponse[], void>({
            query: () => "/",
            providesTags: ["Wishlist"],
            transformResponse: (response: { data: { products: ProductResponse[] } }) => response.data.products,
        }),
    })
})

export const { useGetWishlistQuery } = wishlistApi