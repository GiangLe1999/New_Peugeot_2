import FirstBanner from "@/components/FirstBanner";
import StyledAccordion from "@/components/StyledAccordion";
import { paymentData } from "@/data/payment";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH THANH TOÁN"
        subHeading="Thông tin chi tiết về quy trình thanh toán tại Mazda."
        bgImg="/images/chinh-sach-bao-hanh/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <h2 className="text-center font-bold text-primary text-3xl pb-8">
          CHI TIẾT CHÍNH SÁCH THANH TOÁN
        </h2>
        <StyledAccordion data={paymentData} initialOpened={0} />
      </div>
    </div>
  );
};

export default page;
