import { BsX } from "react-icons/bs";

const CompareProduct = ({ product }) => {
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
    <div className="position-relative  compare-product">
      <div className="position-absolute top-0 right-0 x-icon">
        <BsX />
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

      <div className="product-info">
        {Object.keys(product?.features)?.map((info) => {
          return (
            <div className={`info info-${info}`}>
              <h5 className="info-name">{info}</h5>
              <p className="info-value">{product.features[info]}</p>
            </div>
          );
        })}

        <div className="colors">
          <div className={`info info-color`}>
            <h5 className="info-name">Color: </h5>
            <p className="info-value d-flex gap-1">
              {product.colors.map((color) => (
                <div
                  className="circle"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
