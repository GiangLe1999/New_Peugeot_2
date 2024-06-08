import FirstBanner from "@/components/FirstBanner";
import StyledAccordion from "@/components/StyledAccordion";
import { privacyData } from "@/data/privacy";
import { NextPage } from "next";

export const generateMetadata = () => {
  return {
    title: "Chính sách bảo mật thông tin",
    description:
      "Thông tin mới nhất về chính sách bảo mật thông tin khách hàng tại website chính thức của Mazda Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/chinh-sach-bao-mat`,
  };
};

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH BẢO MẬT"
        subHeading="Thông tin chi tiết về chính sách bảo mật thông tin tại Mazda."
        bgImg="/images/chinh-sach-bao-hanh/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH BẢO MẬT
        </h2>
        <StyledAccordion data={privacyData} initialOpened={0} />
      </div>
    </div>
  );
};

export default page;
