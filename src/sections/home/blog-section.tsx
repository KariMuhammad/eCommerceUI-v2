import { Blog } from "@/components";
import Carousel from "@/components/shared/Carousel";
import SectionHeader from "@/components/shared/SectionHeader";

export default function BlogSection() {
  return (
    <section aria-label="blog-section" className="p-3">
      <SectionHeader title="from our blogs" type="blogs" />

      <Carousel emblaContainerClass="space-x-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <div
            key={number}
            className="flex-shrink-0 basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/6 last:translate-x-0"
          >
            <Blog />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
