import { Breadcrump } from "@/components";
import WishProduct from "@/components/WishProduct";
import { compare_products } from "@/constants";

import Meta from "@/components/Meta";
const Wishlist = () => {
  return (
    <div className="wishlist-products">
      <Meta>
        <meta charSet="utf-8" />
        <title>Wishlsit</title>
      </Meta>

      <div className="breadcrump">
        <Breadcrump
          links={[
            { link: "/", name: "Home" },
            { link: "/wishlist", name: "Wishlist" },
          ]}
        />
      </div>

      <div className="wishlist-content">
        <div className="container-xxl">
          <div className="products">
            {compare_products.map((product) => (
              <WishProduct product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
