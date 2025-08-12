import { axiosInstance } from "@/utils"

export const getReviewsOfProduct = async (productId: string) => {
    const response = await axiosInstance.get(`products/${productId}/reviews/`);
    console.log(response.data);


    return response.data;
} 