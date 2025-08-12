import { getReviewsOfProduct } from "@/apis/reviews-api";
import { API_BASE_URL } from "@/constants";
import { ReviewsResponse } from "@/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const reviewsApi = createApi({
    reducerPath: "reviewsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/products`,
        prepareHeaders: (headers) => {
            const persistRoot = localStorage.getItem("persist:auth");
            const token = persistRoot ? JSON.parse(JSON.parse(persistRoot).token) ?? "" : "";

            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        }
    }),

    tagTypes: ["Review"],
    endpoints: builder => ({
        getReviewsOfProduct: builder.query<ReviewsResponse, string>({
            query: (productId: string) => `/${productId}/reviews`,
            transformResponse: (response: { data: ReviewsResponse }) => response.data,
            providesTags: (result) => result ? [
                ...result.reviews.map(review => ({ type: "Review" as const, id: review._id })),
                { type: "Review", id: "LIST" }
            ] : [{ type: "Review" as const, id: "LIST" }]
        })
    })
})

export const { useGetReviewsOfProductQuery } = reviewsApi;