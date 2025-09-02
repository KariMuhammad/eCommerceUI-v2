import { Product } from "@/types";
import { PriceFormatter } from "@/utils";
import { useState } from "react";
import { BsCartPlus, BsHeart, BsShare, BsStar, BsStarFill, BsX } from "react-icons/bs";

interface ViewProductModalProps {
    product: Product;
    onClose: () => void;
    onAddToCart: (productId: number | string) => void;
    onAddToWishlist: (productId: number | string) => void;
    isInWishlist?: boolean;
}

const ProductViewModal: React.FC<ViewProductModalProps> = ({
    product,
    onClose,
    onAddToCart,
    onAddToWishlist,
    isInWishlist = false
}) => {
    const [selectedImage, setSelectedImage] = useState<string>(product.image1);
    const [quantity, setQuantity] = useState<number>(1);

    const discountedPrice = PriceFormatter.calculateDiscountedPrice(product.price, product.discount);
    const originalPrice = PriceFormatter.format(product.price);
    const finalPrice = PriceFormatter.format(discountedPrice);
    const hasDiscount = product.discount > 0;
    const isOutOfStock = !product.availability || product.quantity === 0;
    const isDiscountEnded = hasDiscount ? new Date(product.discountEndTime!).getTime() < Date.now() : undefined;

    const handleAddToCart = () => {
        if (!isOutOfStock && product.id) {
            onAddToCart(product.id);
        }
    };

    const handleAddToWishlist = () => {
        if (product.id) {
            onAddToWishlist(product.id);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: product.name,
                    text: `Check out this product: ${product.name}`,
                    url: window.location.href
                });
            } catch (error) {
                console.log('Error sharing:', error);
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            alert('Product link copied to clipboard!');
        }
    };

    const handleQuantityChange = (newQuantity: number) => {
        if (newQuantity >= 1 && newQuantity <= product.quantity) {
            setQuantity(newQuantity);
        }
    };

    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<BsStarFill key={i} className="text-yellow-400" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<BsStarFill key={i} className="text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />);
            } else {
                stars.push(<BsStar key={i} className="text-gray-300" />);
            }
        }
        return stars;
    };

    const availableImages = [product.image1, product.image2].filter(Boolean);

    return (
        <>
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    aria-label="Close modal"
                >
                    <BsX className="w-6 h-6" />
                </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                {/* Image Section */}
                <div className="space-y-4">
                    <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={selectedImage || '/placeholder-image.jpg'}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        {hasDiscount && (
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                -{product.discount}% OFF
                            </div>
                        )}
                        {isOutOfStock && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Out of Stock</span>
                            </div>
                        )}
                    </div>

                    {/* Image Thumbnails */}
                    {availableImages.length > 1 && (
                        <div className="flex gap-2">
                            {availableImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(image!)}
                                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${selectedImage === image ? 'border-blue-500' : 'border-gray-200'
                                        }`}
                                >
                                    <img
                                        src={image!}
                                        alt={`${product.name} view ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info Section */}
                <div className="space-y-6">
                    {/* Product Name & Category */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                        <p className="text-lg text-gray-600">{product.category.name}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            {renderStars(product.rate)}
                        </div>
                        <span className="text-gray-600">({product.rate.toFixed(1)})</span>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className={`text-3xl font-bold ${hasDiscount ? 'text-red-600' : 'text-gray-900'}`}>
                                {finalPrice}
                            </span>
                            {hasDiscount && (
                                <span className="text-xl text-gray-500 line-through">
                                    {originalPrice}
                                </span>
                            )}
                        </div>
                        {hasDiscount && (
                            <p className="text-green-600 font-medium">
                                You save: {PriceFormatter.format(product.savingsAmount)}
                            </p>
                        )}
                    </div>

                    {/* Availability & Stock */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">Availability:</span>
                            <span className={`font-semibold ${product.availability ? 'text-green-600' : 'text-red-600'}`}>
                                {product.availability ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                        {product.availability && (
                            <p className="text-sm text-gray-600">
                                {product.quantity} items available
                            </p>
                        )}
                    </div>

                    {/* Quantity Selector */}
                    {!isOutOfStock && (
                        <div className="space-y-2">
                            <label className="font-medium text-gray-900">Quantity:</label>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => handleQuantityChange(quantity - 1)}
                                    disabled={quantity <= 1}
                                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    -
                                </button>
                                <span className="w-16 text-center font-medium">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange(quantity + 1)}
                                    disabled={quantity >= product.quantity}
                                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleAddToCart}
                            disabled={isOutOfStock}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${isOutOfStock
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                }`}
                        >
                            <BsCartPlus className="w-5 h-5" />
                            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                        </button>

                        <button
                            onClick={handleAddToWishlist}
                            className={`p-3 rounded-lg border transition-colors duration-200 ${isInWishlist
                                ? 'bg-red-50 border-red-300 text-red-600'
                                : 'bg-gray-50 border-gray-300 text-gray-600 hover:bg-gray-100'
                                }`}
                            aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                        >
                            <BsHeart className={`w-5 h-5 ${isInWishlist ? 'fill-current' : ''}`} />
                        </button>

                        <button
                            onClick={handleShare}
                            className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                            aria-label="Share product"
                        >
                            <BsShare className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Product Details */}
                    {product.details && Object.keys(product.details).length > 0 && (
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-gray-900">Product Details</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <dl className="space-y-2">
                                    {Object.entries(product.details).map(([key, value]) => (
                                        <div key={key} className="flex flex-col justify-between gap-1">
                                            <dt className="text-lg font-medium text-gray-700">{key}:</dt>
                                            <dd className="text-gray-900">
                                                <div dangerouslySetInnerHTML={{ __html: value }} className="line-clamp-6" />
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    )}

                    {/* Product Options */}
                    {product.options && (
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-600 font-medium">✨ Multiple options available</span>
                            </div>
                            <p className="text-sm text-blue-600 mt-1">
                                This product has different variations or customization options.
                            </p>
                        </div>
                    )}

                    {/* Discount End Time */}
                    {hasDiscount && product.discountEndTime && (
                        <div className="bg-red-50 p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <span className="text-red-600 font-medium">⏰ Limited Time Offer</span>
                            </div>
                            <p className="text-sm text-red-600 mt-1">
                                Discount end{isDiscountEnded ? "ed" : "s"}: {new Date(product.discountEndTime)?.toLocaleDateString()}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductViewModal;