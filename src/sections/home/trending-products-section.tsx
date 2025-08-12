import { VerticalProduct } from "@/components/shared";
import Carousel from "@/components/shared/Carousel";
import Loading from "@/components/shared/Loading";
import SectionHeader from "@/components/shared/SectionHeader";
// import trendingProducts from "@/constants/trending-products";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";

export default function TrendingProductsSection() {
  const { data: trendingProducts, isLoading } = useGetProductsQuery({});

  if (isLoading)
    return <Loading />

  return (
    <section aria-label="trending-products" className="my-7">
      <div className="p-3">
        <SectionHeader title="Trending Products" type="products" />

        <Carousel>
          {trendingProducts?.products.map((product, index) => (
            <div
              className="relative flex-shrink-0 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6 p-1"
              key={index}
            >
              <VerticalProduct key={product.id} product={product} />
            </div>
          ))}
        </Carousel>
      </div>
      {/* <GridProducts products={trendingProducts} Card={HorizontalProduct} num="3" /> */}
    </section>
  );
}
