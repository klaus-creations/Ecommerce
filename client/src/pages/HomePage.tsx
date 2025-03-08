import Daydeals from "@/components/Daydeals";
import FaqComponent from "@/components/FaqComponent";
import FeaturedComponent from "@/components/FeaturedComponent";
import GuaranteeComponent from "@/components/GuaranteeComponent";
import HeroComponent from "@/components/HeroComponent";

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroComponent />
      <GuaranteeComponent />
      <FeaturedComponent />
      <Daydeals />
      <FaqComponent />
    </div>
  );
}
