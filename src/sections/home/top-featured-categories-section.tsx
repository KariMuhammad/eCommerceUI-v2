import { Banner } from "@/components";
import BannerInfo from "@/components/Home/BannerInfo";
import Loading from "@/components/shared/Loading";
import { useGetCategoriesQuery } from "@/redux/features/category";

export default function TopFeaturedCategoriesSection() {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <Loading text="Fetching categories..." />
    )
  }

  console.log("Categories", categories);

  return (
    <section aria-label="top-featured-categories">
      <div className="p-3">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {categories!.slice(0, 3).map((category, index) => (
            <Banner
              key={index}
              className="relative flex-shrink-0 grow-0 m-3 h-[200px] basis-full md:basis-1/2 lg:basis-1/3"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full  object-cover object-center rounded-xl"
              />


              <BannerInfo
                title={category.name}
                description={category.description}
              />
            </Banner>
          ))}
        </div>
      </div>
    </section>
  );
}
