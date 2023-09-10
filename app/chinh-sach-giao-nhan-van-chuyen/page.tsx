import FirstBanner from "@/components/FirstBanner";
import StyledAccordion from "@/components/StyledAccordion";
import { deliveryData } from "@/data/delivery";
import { privacyData } from "@/data/privacy";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN"
        subHeading="Thông tin chi tiết về chính sách Giao nhận - Vận chuyển tại Mazda."
        bgImg="/images/chinh-sach-bao-hanh/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH GIAO NHẬN - VẬN CHUYỂN
        </h2>
        <StyledAccordion data={deliveryData} initialOpened={0} />
      </div>
    </div>
  );
};

export default page;
