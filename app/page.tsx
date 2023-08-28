import MainOptions from "@/components/home/MainOptions";
import MainSwiper from "@/components/home/MainSwiper";
import PromtionSection from "@/components/home/PromtionSection";

export default function Home() {
  return (
    <main>
      <MainSwiper />

      <div className="container mt-4">
        <MainOptions />
        <PromtionSection />
      </div>
    </main>
  );
}
