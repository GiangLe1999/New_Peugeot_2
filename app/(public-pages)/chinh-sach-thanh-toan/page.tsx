import FirstBanner from "@/components/FirstBanner";
import StyledAccordion from "@/components/StyledAccordion";
import { paymentData } from "@/data/payment";
import { NextPage } from "next";
export const dynamic = "force-dynamic";

export const generateMetadata = () => {
  return {
    title: "Chính sách thanh toán",
    description:
      "Thông tin mới nhất về chính sách thanh toán sản phẩm xe Peugeot tại website chính thức của Peugeot Thủ Đức.",
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/chinh-sach-thanh-toan`,
  };
};

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div>
      <FirstBanner
        heading="CHÍNH SÁCH THANH TOÁN"
        subHeading="Thông tin chi tiết về quy trình thanh toán tại Peugeot"
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover !bg-[50%_50%]"
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
