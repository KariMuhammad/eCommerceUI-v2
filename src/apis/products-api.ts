import { ProductResponse } from "@/types";
import axiosInstance from "@/utils/api";

export async function addToWishlist(productId?: string) {
    if (!productId) {
        console.log("productId not exist");
        return;
    }

    const response = await axiosInstance.post(`/wishlist/add`, {
        productId
    })

    console.log("Response data", response.data);

    return response.data;
}

export async function getAllWishlistProducts(): Promise<ProductResponse[]> {
    const response = await axiosInstance.get("/wishlist");

    console.log("Response data", response.data.data);

    return response.data.data.products;
}