import { Breadcrump } from "@/components";
import Card from "@/components/Card";
import ProductCard from "@/components/ProductCard";
import Box from "@/components/shared/Box";
import Carousel from "@/components/shared/Carousel";
import SectionHeader from "@/components/shared/SectionHeader";
import ShopSidebar from "@/components/ShopSidebar";
import { products } from "@/constants";

const Store = () => {
  return (
    <div className="p-3">
      <Box>
        <Breadcrump
          links={[
            { name: "Home", link: "/", active: false },
            { name: "Store", link: "/store", active: true },
          ]}
        />
      </Box>

      <section aria-label="categories" className="my-7">
        <SectionHeader title="Categories" />

        <div className="cards overflow-hidden">
          <Carousel emblaContainerClass="w-full justify-start">
            {[
              { image: "/public/products_3_2.webp", name: "Mobiles" },
              { image: "/public/products_4_2.webp", name: "Mobiles" },
              { image: "/public/products_5_2.webp", name: "Mobiles" },
              { image: "/public/products_3_2.webp", name: "Mobiles" },
              { image: "/public/products_2_2.webp", name: "Mobiles" },
              { image: "/public/products_3_2.webp", name: "Mobiles" },
              { image: "/public/products_4_2.webp", name: "Mobiles" },
              { image: "/public/products_34_2.webp", name: "Mobiles" },
            ].map((category) => (
              <Box className="basis-1/6 flex-none" key={category.name}>
                <Card image={category.image} name={category.name} />
              </Box>
            ))}
          </Carousel>
        </div>
      </section>

      <main aria-label="shop" className="flex flex-col items-start lg:flex-row">
        <div
          aria-label="shop-sidebar"
          className="w-full basis-full lg:basis-1/5"
        >
          <ShopSidebar />
        </div>

        <div aria-label="shop-products" className="basis-4/5 mx-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div aria-label="loading-button" className="w-full text-center my-11">
            <button
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              aria-label="load-more-products"
            >
              Load More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Store;
