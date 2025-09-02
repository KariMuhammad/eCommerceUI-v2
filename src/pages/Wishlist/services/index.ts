import { getAllWishlistProducts } from "@/apis/products-api";
import { WishlistProduct } from "@/types";
import { mapProductFromApi } from "@/utils";

export class WishlistService {
    private static readonly STORAGE_KEY = 'wishlist_items';

    static async getWishlistItems(): Promise<WishlistProduct[]> {
        // In a real app, this would be an API call
        // For demo purposes, using mock data

        const data = await getAllWishlistProducts();
        return data.map(s => ({
            ...mapProductFromApi(s),
            addedAt: s.updatedAt,
        })); // addedAt field need to add
    }

    static removeFromWishlist(productId: string): void {
        // In a real app, this would be an API call
        console.log(`Removing product ${productId} from wishlist`);
    }

    static addToCart(productId: string): void {
        // In a real app, this would be an API call
        console.log(`Adding product ${productId} to cart`);
    }
}  
