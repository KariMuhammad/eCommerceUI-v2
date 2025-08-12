import { HorizontalProduct } from "@/components/shared";
import Carousel from "@/components/shared/Carousel";
import {
  hideInUI,
} from "@/constants/top-deals-days-products";
import { useGetProductsQuery } from "@/redux/features/products/productsApi";
import { Product } from "@/types";

export default function TopFeatureProductsSection() {

  const { data: topDealsDaysProducts } = useGetProductsQuery({ page: 1, limit: 10 });
  console.log("Products", topDealsDaysProducts);

  if (!topDealsDaysProducts) {
    return <h1>Loading</h1>
  }

  const miniProducts = topDealsDaysProducts?.products.reduce(
    function (result, map) {
      const reducerArray = result.acc;
      const slides: Product[][] = reducerArray.length ? reducerArray : [[]];

      let position = result.position || 0;
      // console.log("Current Slide", slides[position]);
      // console.log("Position", position);

      if (slides[position]?.length == 2) {
        // console.log("Got it");
        position++;
        result.position = position;
      }

      if (!slides[position]?.length) {
        // console.log("[if]");
        slides[position] = [map];
      } else {
        // console.log("[else]");
        slides[position].push(map);
      }

      result.acc = slides;

      return result;
    },
    { acc: [[]], position: 0 } as { acc: Product[][]; position: number }
  );

  // console.log("Top Feature Products", miniProducts);

  return (
    <section aria-label="top-feature-products">
      <div className="p-3">
        <div className="flex flex-wrap gap-3">
          {/* Left */}
          <div aria-label="left" className="w-full sm:w-4/12">
            <Carousel emblaSliderClass="h-full" emblaContainerClass="h-full">
              <HorizontalProduct
                className="basis-full flex-shrink-0"
                imgSize="w-56 h-56"
                product={topDealsDaysProducts.products[2]}
                showInUI={hideInUI("id")}
              />

              <HorizontalProduct
                className="basis-full flex-shrink-0"
                imgSize="w-56 h-56"
                product={topDealsDaysProducts.products[3]}
                showInUI={hideInUI("id")}
              />
            </Carousel>
          </div>
          {/* Right */}
          <div aria-label="right" className="w-full sm:w-7/12 grow">
            <Carousel emblaContainerClass="">
              {miniProducts?.acc.map((products) => (
                <div className="flex-shrink-0 basis-full sm:basis-1/3">
                  {products.map((product) => (
                    <HorizontalProduct
                      className="!flex-row"
                      imgSize="w-32 h-32 object-contain"
                      product={product}
                      showInUI={hideInUI("details", "rate")}
                    />
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
