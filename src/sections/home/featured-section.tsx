import { featured } from "@/constants";

const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <div className="mt-5">
        <div className="py-7 carousel overflow-hidden bg-slate-950">
          <div aria-label="products-wrapper" className="flex flex-wrap gap-y-3">
            {featured.map((feature, index) => (
              <div
                key={index}
                className="p-5 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="feature flex align-items-center gap-5">
                  <div className="feature-image">
                    <feature.image className="w-10 h-10 text-cyan-500" />
                  </div>

                  <div className="feature-content">
                    <h3 className="text-xl text-white">{feature.title}</h3>
                    <p className="text-md text-gray-400 ">{feature.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
