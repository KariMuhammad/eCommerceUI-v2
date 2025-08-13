import { getReviewsOfProduct } from "@/apis/reviews-api";
import { API_BASE_URL } from "@/constants";
import { CreateReviewRequest, Review, ReviewsResponse } from "@/types";
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
        }),

        createReview: builder.mutation<Review, CreateReviewRequest>({
            query: (data) => ({
                url: `/${data.productId}/reviews`,
                method: "POST",
                body: data,
            }),

            invalidatesTags: (result) => [{ type: "Review", id: "LIST" }],

            transformResponse: (response: { data: Review }) => response.data,

            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                const patches = [];

                try {
                    const { data: newReview } = await queryFulfilled;

                    patches.push(
                        dispatch(reviewsApi.util.updateQueryData("getReviewsOfProduct", data.productId, (draft) => {
                            draft.reviews.unshift(newReview);
                            draft.stats.totalReviews++;
                            draft.stats.averageRating += newReview.stars / draft.stats.totalReviews;
                        }))
                    )
                } catch (error) {
                    console.log("Error", error);
                    patches.forEach(patch => patch.undo());
                }
            }
        })
    })
})

export const { useGetReviewsOfProductQuery, useCreateReviewMutation } = reviewsApi;