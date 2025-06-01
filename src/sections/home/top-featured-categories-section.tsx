import { Banner } from "@/components";
import BannerInfo from "@/components/Home/BannerInfo";
import topCategories from "@/constants/top-categories";

export default function TopFeaturedCategoriesSection() {
  return (
    <section aria-label="top-featured-categories">
      <div className="p-3">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {topCategories.map((category, index) => (
            <Banner
              key={index}
              attrs={{
                className:
                  "flex-shrink-0 grow-0 m-3 h-[250px] h-full basis-full md:basis-1/2 lg:basis-1/3",
              }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover object-center rounded-xl"
              />

              <BannerInfo
                title={category.title}
                description={category.description}
              />
            </Banner>
          ))}
        </div>
      </div>
    </section>
  );
}
