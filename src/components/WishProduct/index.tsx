import { WishlistProduct } from "@/types";
import { PriceFormatter } from "@/utils";
import { BsCartPlus, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import ProductViewEye from "../ProductViewEye";

interface WishProductProps {
  product: WishlistProduct;
  onRemove: (productId: string | string) => void;
  onAddToCart: (productId: string | string) => void;
  onViewProduct: (product: WishlistProduct) => void;
}

// Enhanced WishProduct Component
const WishProduct: React.FC<WishProductProps> = ({
  product,
  onRemove,
  onAddToCart,
  onViewProduct
}) => {
  const discountedPrice = PriceFormatter.format(
    PriceFormatter.calculateDiscountedPrice(product.price, product.discount)
  );

  const originalPrice = PriceFormatter.format(product.price);
  const hasDiscount = product.discount > 0;
  const isOutOfStock = !product.availability || product.quantity === 0;

  const handleRemove = () => {
    onRemove(product.id!);
  };

  const handleAddToCart = () => {
    if (!isOutOfStock) {
      onAddToCart(product.id!);
    }
  };

  const handleViewProduct = () => {
    onViewProduct(product!);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 group">
      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 p-2 bg-red-100 hover:bg-red-200 rounded-full transition-colors duration-200 z-10"
        aria-label="Remove from wishlist"
      >
        <BsX className="w-4 h-4 text-red-600" />
      </button>

      {/* Product Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image1 || '/placeholder-image.jpg'}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {hasDiscount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 cursor-pointer"
          onClick={handleViewProduct}>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>

        {/* Category */}
        <p className="text-sm text-gray-500">{product.category.name}</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className={`font-bold text-lg ${hasDiscount ? 'text-red-600' : 'text-gray-900'}`}>
            {discountedPrice}
          </span>
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Savings */}
        {hasDiscount && (
          <p className="text-sm text-green-600 font-medium">
            You save: {PriceFormatter.format(product.savingsAmount)}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rate) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.rate})</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md font-medium transition-colors duration-200 ${isOutOfStock
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
          >
            <BsCartPlus className="w-4 h-4" />
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </button>

          <ProductViewEye onView={handleViewProduct} />
        </div>
      </div>
    </div>
  );
};

export default WishProduct;