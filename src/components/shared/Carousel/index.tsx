import useEmblaCarousel from "embla-carousel-react";

interface CarouselProps {
  children: React.ReactNode;
  emblaContainerClass?: string;
  emblaSliderClass?: string;
  active?: boolean;
}

export default function Carousel({
  children,
  emblaContainerClass = "",
  emblaSliderClass = "",
  active = true,
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true, active: active });

  return (
    <div
      aria-label="categories-slider"
      className={`embla relative w-full overflow-hidden ${emblaSliderClass}`}
      ref={emblaRef}
    >
      <div
        aria-label="categories-container"
        className={`embla__container flex mb-7 lg:mb-0 gap-1 ${emblaContainerClass}`}
      >
        {children}
      </div>
    </div>
  );
}
