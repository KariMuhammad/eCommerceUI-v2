import { categories } from "@/constants";
import SectionHeader from "@/components/shared/SectionHeader";
import Carousel from "@/components/shared/Carousel";

const CategoriesSection = () => {
  return (
    <section className="categories-section my-5">
      <div className="p-3">
        <SectionHeader title="Popular Categories" />
        <Carousel>
          {categories.map((category, index) => (
            <div
              className="relative flex-shrink-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 p-1"
              key={index}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-3 text-white p-3">
                <h3 className="text-xl font-bold">{category.name}</h3>
                <p className="text-gray-50 text-sm">
                  ({category.quantity} products)
                </p>
              </div>

              <div className="">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default CategoriesSection;
