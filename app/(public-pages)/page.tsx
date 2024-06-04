import HomeQuickConsultModal from "@/components/Layout/home-quick-consult-modal";
import AboutSection from "@/components/home/AboutSection";
import CarsSection from "@/components/home/CarsSection";
import MainOptions from "@/components/home/MainOptions";
import MainSwiper from "@/components/home/MainSwiper";
import PostsSection from "@/components/home/PostsSection";
import PromotionSection from "@/components/home/PromotionSection";
import QuoteSection from "@/components/home/QuoteSection";
import ReasonsSection from "@/components/home/ReasonsSection";
import SupportBuyersSection from "@/components/home/SupportBuyersSection";
import { pageConstants } from "@/data/constants";
import { CarEntity } from "@/entities/car.entity";
import { getAllCars } from "@/service/car.service";
import GoogleMaps from "@/components/home/GoogleMaps";

export const generateMetadata = () => {
  return {
    title: "Xe Mazda 5 - 7 chỗ | Mazda Sài Gòn",
    description: pageConstants.siteDescription,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_BASE_URL,
    },
  };
};

export default async function Home() {
  const cars = (await getAllCars()) as CarEntity[];

  return (
    <>
      <main>
        <MainSwiper />

        <div className="mt-4">
          <MainOptions />
          <PromotionSection />
          <CarsSection cars={cars} />
          <SupportBuyersSection />
          <ReasonsSection />
          <AboutSection />
          <QuoteSection />
          <PostsSection />
          <GoogleMaps />
        </div>
      </main>

      <HomeQuickConsultModal />
    </>
  );
}
