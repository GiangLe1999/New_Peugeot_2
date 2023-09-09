import FirstBanner from "@/components/FirstBanner";
import CarPriceSection from "@/components/carPage/CarPriceSection";
import { carNames } from "@/data";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="TÍNH PHÍ LĂN BÁNH MAZDA 2023"
        subHeading="Cập nhật chính xác nhất giá lăn bánh các dòng xe của Mazda"
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container py-12">
        <CarPriceSection
          name={"new mazda 2"}
          carNameArr={carNames}
          isInstallmentPage
        />
      </div>
    </div>
  );
};

export default page;
