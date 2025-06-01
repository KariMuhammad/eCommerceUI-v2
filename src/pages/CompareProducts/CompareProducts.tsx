import { Breadcrump, CompareProduct } from "@/components";
import { compare_products } from "@/constants";

export default function CompareProducts(props) {
  return (
    <>
      <div className="compare-products">
        <div className="breadcrump">
          <Breadcrump
            links={[
              { link: "/", name: "Home" },
              { link: "/compare-products", name: "compare-products" },
            ]}
          />
        </div>

        <div className="compare-products-content">
          <div className="container-xxl">
            <div className="products">
              {compare_products.map((product) => (
                <CompareProduct product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
