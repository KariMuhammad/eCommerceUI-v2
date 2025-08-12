import useEmblaCarousel from "embla-carousel-react";

import { Banner } from "@/components";
import { hero_banners } from "@/constants";
import { Link } from "react-router-dom";
import Button from "@/components/shared/Button";
import small_banners from "@/constants/banners";

const BannerSection = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section aria-label="banner-section" className="p-3">
      <div aria-label="banner-wrapper">
        <div
          aria-label="banners"
          className="w-full flex flex-col lg:flex-row gap-1"
        >
          <div
            aria-label="slider-container"
            className="basis-5/12 grow embla overflow-hidden"
            ref={emblaRef}
          >
            <div
              aria-label="banners-wrapper"
              className="embla__container flex mb-7 lg:mb-0 h-full"
            >
              {hero_banners.map((banner, index) => (
                <div
                  aria-label="hero-banner"
                  id="hero-banner"
                  className="embla__slide basis-full min-w-full"
                >
                  <Banner key={index} className="h-full p-3">
                    <img
                      className="w-full h-full block object-cover rounded-2xl"
                      src={banner.image}
                      alt={banner.small_title}
                    />
                    <div
                      aria-label="banner-content"
                      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 w-4/5 text-center sm:text-left sm:w-1/2"
                    >
                      <h3 className="capitalize text-xl sm:text-3xl lg:text-5xl font-semibold text-white">
                        {banner.big_title}
                      </h3>
                      <p className="text-md sm:text-lg lg:text-lg text-gray-100 my-3">
                        {banner.description}
                      </p>
                      <Link to={"#"}>
                        <Button className="uppercase font-bold">
                          Discover Now
                        </Button>
                      </Link>
                    </div>
                  </Banner>
                  {/* {index} */}
                </div>
              ))}
            </div>
          </div>
          {/* Left */}
          <div className="basis-5/12">
            <div
              aria-label="small-banners"
              className="w-full sm:flex flex-wrap h-full"
            >
              {small_banners.map((banner, index) => (
                <div
                  key={index}
                  aria-label="small-banner"
                  className="sm:basis-1/2 ps-3 p-3"
                >
                  <Banner
                    className="group h-full my-2 lg:my-0 overflow-hidden rounded-xl"
                  >
                    <img
                      className="w-full h-full transition-all object-cover object-center rounded-xl group-hover:scale-110"
                      src={banner.image}
                      alt={banner.small_title}
                    />
                    <div
                      aria-label="small-banner-content"
                      className="absolute top-1/2 -translate-y-1/2 left-7 sm:translate-x-0 w-2/3 sm:text-left sm:w-1/2"
                    >
                      <h3 className="capitalize text-xl sm:text-3xl font-semibold text-white line-clamp-2">
                        {banner.small_title}
                      </h3>
                      <p className="text-md sm:text-lg text-gray-100 my-3">
                        {banner.description}
                      </p>
                    </div>
                  </Banner>
                </div>
              ))}
            </div>
            {/* Right */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
