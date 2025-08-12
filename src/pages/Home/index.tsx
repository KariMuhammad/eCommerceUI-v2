// Sectionss
import {
  BannerSection,
  CategoriesSection,
  FeaturedSection,
  SponsersSection,
  TopFeatureProductsSection,
} from "@/sections/home";
import BlogSection from "@/sections/home/blog-section";
import RecommendedProductsSection from "@/sections/home/recommended-products";
import TopDealsDaysSection from "@/sections/home/top-deals-day-section";
import TopFeaturedCategoriesSection from "@/sections/home/top-featured-categories-section";
import TrendingProductsSection from "@/sections/home/trending-products-section";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state) => state);

  console.log("Home Page State:", state);

  return (
    <div className="bg-[#f4f5f7]">
      <BannerSection />

      <TrendingProductsSection />

      <CategoriesSection />

      <TopDealsDaysSection />

      <SponsersSection />

      <TopFeaturedCategoriesSection />

      <TopFeatureProductsSection />

      <RecommendedProductsSection />

      <BlogSection />

      <FeaturedSection />

      {/* <NewsletterSection /> */}

      {/* <SpecialCollectionSection /> */}

      {/* <SpecialProductsSection /> */}
    </div>
  );
};

export default Home;
