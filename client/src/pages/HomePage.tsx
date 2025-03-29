import Category from "@/components/Home/Category";
import Daydeals from "@/components/Home/Daydeals";
import FaqComponent from "@/components/Home/FaqComponent";
import FeaturedComponent from "@/components/Home/FeaturedComponent";
import GuaranteeComponent from "@/components/Home/GuaranteeComponent";
import HeroComponent from "@/components/Home/HeroComponent";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center gap-10 lg:gap-16">
      <HeroComponent />
      <GuaranteeComponent />
      <FeaturedComponent />
      <Category />
      <Daydeals />
      <FaqComponent />
    </div>
  );
}
