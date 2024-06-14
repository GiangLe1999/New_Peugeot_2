import FirstBanner from "@/components/FirstBanner";
import CarPriceSection from "@/components/carPage/CarPriceSection";
import { getAllCarsNameVsSlug } from "@/service/car.service";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

interface Props {}

export const generateMetadata = () => {
  const thisYear = new Date().getFullYear();
  return {
    title: `Tính phí lăn bánh Ô tô Peugeot ${thisYear}`,
    description: `Cách tính và bảng tính phí lăn bánh Ô tô Peugeot chính xác nhất ${thisYear}.Tham khảo tại Website Peugeot Thủ Đức.`,
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/tinh-phi-lan-banh`,
  };
};

const page: NextPage<Props> = async () => {
  const carNameArr = (await getAllCarsNameVsSlug())?.map(
    (car: any) => car.name
  );

  return (
    <div>
      <FirstBanner
        heading={`TÍNH PHÍ LĂN BÁNH PUEGOT ${new Date().getFullYear()}`}
        subHeading="Cập nhật chính xác nhất giá lăn bánh các dòng xe của Peugeot"
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container py-12">
        <CarPriceSection
          name={"new mazda 2"}
          carNameArr={carNameArr}
          isInstallmentPage
        />
      </div>
    </div>
  );
};

export default page;
