import { API_BASE_URL } from "@/constants";
import { Category } from "@/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


export const categoryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${API_BASE_URL}/category` }),
    tagTypes: ["Category"],
    endpoints(build) {
        return {
            getCategories: build.query<Category[], void>({
                query: () => "/",
                transformResponse: (response: { data: { categories: Category[] } }) => response.data.categories,

                providesTags: (result) => result ? [
                    ...result.map(category => ({ type: "Category" as const, id: category._id })),
                    { type: "Category" as const, id: "LIST" }
                ] : [{ type: "Category" as const, id: "LIST" }]
            }),
        }
    },
})

export const { useGetCategoriesQuery } = categoryApi;