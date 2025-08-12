import { API_BASE_URL } from "@/constants";
import { GetProductsResponse, ProductResponse, ProductResponseForUI, RequestQueries } from "@/types";
import { mapProductFromApi } from "@/utils";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/products` }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query<ProductResponseForUI, RequestQueries>({
            query: ({ page = 1, limit = 50, search = "", category = "", ...filters }) => {
                const params = new URLSearchParams({
                    page: page.toString(),
                    limit: limit.toString()
                })

                if (search) params.append("search", search);
                if (category) params.append("category", category);

                // Add any other filters
                Object.entries(filters).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value) {
                        params.append(key, value.toString());
                    }
                });

                return `?${params.toString()}`
            },

            transformResponse: (response: { data: GetProductsResponse }) => ({
                products: response.data.products.map(mapProductFromApi),
                pagination: response.data.pagination
            }),

            providesTags: (result) => result ? [
                ...result.products.map(({ id }) => ({ type: "Product" as const, id })),
                { type: "Product", id: "LIST" }
            ] : [{ type: "Product", id: "LIST" }],


            keepUnusedDataFor: 300, // 5 minutes ( 5 * 60 = 300 seconds )
        }),

        getProductsInfinite: builder.query<{ pages: ProductResponseForUI[], hasNextPage: boolean }, RequestQueries>({
            query: ({ page = 1, limit = 10, search, category, ...filters }) => {
                const params = new URLSearchParams({
                    page: page.toString(),
                    limit: limit.toString(),
                });

                if (search) params.append('search', search);
                if (category) params.append('category', category);

                Object.entries(filters).forEach(([key, value]) => {
                    if (value !== undefined && value !== null) {
                        params.append(key, value.toString());
                    }
                });

                return `?${params.toString()}`;
            },

            transformResponse: (response: { data: GetProductsResponse }) => {
                const pages = [
                    {
                        products: response.data.products.map(mapProductFromApi),
                        pagination: response.data.pagination
                    }
                ]

                return {
                    pages,
                    hasNextPage: response.data.pagination.nextPage !== null
                }
            },

            // Merge function for infinite loading
            serializeQueryArgs: ({ queryArgs, ...args }) => {
                const { page, ...otherArgs } = queryArgs;
                return { ...args, queryArgs: otherArgs };
            },

            merge: (currentCache, newData) => {
                if (!currentCache) {
                    return newData;
                }

                // Merge the pages
                return {
                    pages: [...currentCache.pages, ...newData.pages],
                    hasNextPage: newData.hasNextPage,
                };
            },
            forceRefetch: ({ currentArg, previousArg }) => {
                return currentArg?.page !== previousArg?.page;
            },
            providesTags: ['Product'],

        }),

        getProductById: builder.query<ProductResponse, string>({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: 'Product', id }],
        }),

        getProductBySlug: builder.query<ProductResponse, string>({
            query: (slug) => `/s/${slug}`,
            transformResponse: (response: { data: { product: ProductResponse } }) => response.data.product,
            providesTags: (result, error, id) => [{ type: 'Product', id: result?._id }],
        }),
    })
})

export const { useGetProductsQuery, useGetProductByIdQuery, useGetProductsInfiniteQuery, useGetProductBySlugQuery } = productsApi;