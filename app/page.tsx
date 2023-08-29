import CarsSection from "@/components/home/CarsSection";
import MainOptions from "@/components/home/MainOptions";
import MainSwiper from "@/components/home/MainSwiper";
import PromotionSection from "@/components/home/PromotionSection";
import ReasonsSection from "@/components/home/ReasonsSection";
import { getAllCarsData } from "@/lib/fetchData";
import { CarType } from "@/types";

export default async function Home() {
  const cars = (await getAllCarsData()) as CarType[];

  return (
    <main>
      <MainSwiper />

      <div className="mt-4">
        <MainOptions />
        <PromotionSection />
        <CarsSection cars={cars} />
        <ReasonsSection />
      </div>
    </main>
  );
}
