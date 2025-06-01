import { useEffect, useState } from "react";
import topDealsDaysProducts from "@/constants/top-deals-days-products";
import CountdownTimer from "@/components/CountdownTimer";
import { HorizontalProduct } from "@/components/shared";
import Carousel from "@/components/shared/Carousel";
import SectionHeader from "@/components/shared/SectionHeader";

export default function TopDealsDaysSection() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const handleResize = () => {
      setMobileView(mq.matches);
    };

    mq.addEventListener("change", handleResize);
    handleResize();

    return () => mq.removeEventListener("change", handleResize);
  }, []);

  return (
    <section aria-label="top-deals-days-products">
      <div className="p-3">
        <SectionHeader title="Top  Deals Of The Day">
          <p className="flex flex-wrap items-center gap-3 font-semibold text-lg">
            Hurry up! Offer ends in: <CountdownTimer days={1} />
          </p>
        </SectionHeader>

        <div className="">
          <Carousel
            emblaContainerClass="justify-between gap-3"
            active={mobileView}
          >
            {topDealsDaysProducts.slice(0, 3).map((map, index) => (
              <HorizontalProduct
                key={index}
                product={map.product}
                showInUI={map.showInUI}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
