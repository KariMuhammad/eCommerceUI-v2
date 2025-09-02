import { ModalSizes, WishlistProduct } from "@/types";
import { useEffect, useState } from "react";
import { WishlistService } from "./services";
import { PriceFormatter } from "@/utils";
import { BsHeart } from "react-icons/bs";
import WishProduct from "@/components/WishProduct";
import useModal from "@/hooks/use-modal";
import ProductViewModal from "@/components/ProductViewModal";

const WishlistPage: React.FC = () => {
  const { openModal, closeModal } = useModal();

  const [wishlistItems, setWishlistItems] = useState<WishlistProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'addedAt'>('addedAt');
  const [filterBy, setFilterBy] = useState<'all' | 'available' | 'discounted'>('all');

  useEffect(() => {
    loadWishlistItems();
  }, []);

  const loadWishlistItems = async (): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      const items = await WishlistService.getWishlistItems();
      setWishlistItems(items);
    } catch (error) {
      console.error('Failed to load wishlist items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveFromWishlist = (productId: string): void => {
    WishlistService.removeFromWishlist(productId);
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleAddToCart = (productId: string): void => {
    WishlistService.addToCart(productId);
    // You might want to show a success message here
  };

  const handleViewProduct = (product: WishlistProduct): void => {
    // Navigate to product detail page
    openModal({
      title: "",
      children: <ProductViewModal product={product} onAddToCart={() => { }} onAddToWishlist={() => { }} onClose={closeModal} />,
      size: ModalSizes.xl
    })
  };

  const handleClearWishlist = (): void => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      setWishlistItems([]);
    }
  };

  const getFilteredAndSortedItems = (): WishlistProduct[] => {
    let filtered = wishlistItems;

    // Apply filters
    switch (filterBy) {
      case 'available':
        filtered = filtered.filter(item => item.availability && item.quantity > 0);
        break;
      case 'discounted':
        filtered = filtered.filter(item => item.discount > 0);
        break;
      default:
        break;
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.discountedPrice - b.discountedPrice;
        case 'addedAt':
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredItems = getFilteredAndSortedItems();
  const totalItems = wishlistItems.length;
  const totalValue = wishlistItems.reduce((sum, item) => sum + item.discountedPrice, 0);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h1>
        <p className="text-gray-600">
          {totalItems} {totalItems === 1 ? 'item' : 'items'} • Total value: {PriceFormatter.format(totalValue)}
        </p>
      </div>

      {totalItems === 0 ? (
        <div className="text-center py-16">
          <BsHeart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-6">Start adding items you love to your wishlist!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {/* Controls */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="addedAt">Sort by: Recently Added</option>
                <option value="name">Sort by: Name</option>
                <option value="price">Sort by: Price</option>
              </select>

              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as typeof filterBy)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Items</option>
                <option value="available">Available Only</option>
                <option value="discounted">On Sale</option>
              </select>
            </div>

            <button
              onClick={handleClearWishlist}
              className="px-4 py-2 text-red-600 hover:bg-red-50 border border-red-300 rounded-md transition-colors duration-200"
            >
              Clear Wishlist
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((product) => (
              <WishProduct
                key={product.id}
                product={product}
                onRemove={handleRemoveFromWishlist}
                onAddToCart={handleAddToCart}
                onViewProduct={handleViewProduct}
              />
            ))}
          </div>

          {filteredItems.length === 0 && totalItems > 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No items match your current filters.</p>
              <button
                onClick={() => setFilterBy('all')}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WishlistPage;