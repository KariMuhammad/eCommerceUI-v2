import SectionHeader from "@/components/shared/SectionHeader";
import Carousel from "@/components/shared/Carousel";
import { useGetCategoriesQuery } from "@/redux/features/category";
import Loading from "@/components/shared/Loading";

const CategoriesSection = () => {
  const { data: categories, isLoading } = useGetCategoriesQuery();

  if (isLoading)
    return <Loading />

  return (
    <section className="categories-section my-5">
      <div className="p-3">
        <SectionHeader title="Popular Categories" />
        <Carousel>
          {categories!.map((category, index) => (<div
            className="relative flex-shrink-0 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 p-1"
            key={index}
          >
            {/* Bookmark Background */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
              <div className="relative flex items-center">
                {/* Rectangle part */}
                <div className="bg-white/95 backdrop-blur-sm px-4 py-3 ">
                  <h3 className="text-xl font-bold text-slate-800 drop-shadow-sm">{category.name}</h3>
                  <p className="text-slate-600 text-sm font-medium">
                    (<span>{category.count}</span> products)
                  </p>
                </div>

                {/* Triangle point on the right */}
                <div
                  className="w-0 h-0"
                  style={{
                    borderLeft: '25px solid rgba(255, 255, 255, 0.95)',
                    borderTop: '25px solid transparent',
                    borderBottom: '25px solid transparent',
                  }}
                ></div>
              </div>
            </div>

            {/* Image */}
            <div className="">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-44 object-cover rounded-lg"
              />
            </div>
          </div>))}
        </Carousel>
      </div>
    </section>
  );
};

export default CategoriesSection;
