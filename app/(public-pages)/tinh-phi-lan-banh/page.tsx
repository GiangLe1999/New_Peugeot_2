import FirstBanner from "@/components/FirstBanner";
import CarPriceSection from "@/components/carPage/CarPriceSection";
import { carNames } from "@/data";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

interface Props {}

export const generateMetadata = () => {
  return {
    title: "Tính phí lăn bánh Ô tô Mazda 2023",
    description:
      "Cách tính và bảng tính phí lăn bánh Ô tô Mazda chính xác nhất 2023.Tham khảo tại Website Mazda Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/tinh-phi-lan-banh`,
  };
};

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
