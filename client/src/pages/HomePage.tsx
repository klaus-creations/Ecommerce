import BestSelling from "@/components/Home/BestSelling";
import BlogIntro from "@/components/Home/BlogIntro";
import Category from "@/components/Home/Category";
import Daydeals from "@/components/Home/Daydeals";
import FaqComponent from "@/components/Home/FaqComponent";
import FeaturedComponent from "@/components/Home/FeaturedComponent";
import HeroComponent from "@/components/Home/HeroComponent";
import LittleAbout from "@/components/Home/LittleAbout";
import NewArrivals from "@/components/Home/NewArrival";
import NewsLetterSubscribe from "@/components/Home/NewsLetterSubscribe";
import PopularCategories from "@/components/Home/PopularCategories";
import Testimonials from "@/components/Home/Testimonials";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center gap-10 lg:gap-16 overflow-hidden">
      <HeroComponent />
      <Daydeals />
      <LittleAbout />
      <BestSelling />
      <PopularCategories />
      <FeaturedComponent />
      <Category />
      <BlogIntro />
      <NewArrivals />
      <Testimonials />
      <FaqComponent />
      <NewsLetterSubscribe />
    </div>
  );
}
