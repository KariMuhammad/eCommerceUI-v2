import { VerticalProduct } from "@/components/shared";
import Carousel from "@/components/shared/Carousel";
import SectionHeader from "@/components/shared/SectionHeader";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";

export default function RecommendedProductsSection() {
  const { data: trendingData } = useGetProductsQuery({});

  return (
    <section className="p-3">
      <SectionHeader title="Recommended Products" type="products" />

      <Carousel>
        {trendingData?.products.map((product, index) => (
          <div className="flex-shrink-0 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
            <VerticalProduct product={product} key={index} />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
