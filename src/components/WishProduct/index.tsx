
import { BsHeart, BsX } from "react-icons/bs";

const WishProduct = ({ product }) => {
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price - product.price * (product.discount / 100));

  const original = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);

  const hasDiscount = product.discount > 0;

  return (
    <div className="position-relative  wishlist-product">
      <div className="position-absolute top-0 right-0 x-icon">
        <BsHeart />
      </div>
      <div className="product-image">
        <img src={`${product.image}`} alt={`${product.title}`} />
      </div>

      <h3 className="product-title">{product.name}</h3>

      <div className="product-price d-flex gap-3">
        <span className={`d-block fw-bold ${hasDiscount && "text-danger"}`}>
          {price}
        </span>
        {hasDiscount && (
          <span className="text-decoration-line-through original-price">
            {original}
          </span>
        )}
      </div>
    </div>
  );
};

export default WishProduct;
