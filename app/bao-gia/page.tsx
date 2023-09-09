"use client";

import FirstBanner from "@/components/FirstBanner";
import NextImage from "@/components/NextImage";
import CustomerForm from "@/components/testDrivePage/CustomerForm";
import { useFetchCarLines } from "@/hooks/useFetchCarLines";
import { CarLineType } from "@/types";

export type CarLinesType = {
  name: string;
  carLines: CarLineType[];
};

const RequireQuotationPage = () => {
  const carLines = useFetchCarLines();

  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ NHẬN BÁO GIÁ"
        subHeading="Đăng ký và đặt lịch lái thử dòng xe bạn mong muốn tại đại lý gần nhất."
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <div className="shadow-md grid grid-cols-2 border rounded-md overflow-hidden">
          <div className="relative w-full h-full">
            <NextImage
              src="/images/bao-gia/form-image-1.jpg"
              alt="Lái thử Mazda"
            />
          </div>

          <CustomerForm carLines={carLines} isQuotation />
        </div>
      </div>
    </div>
  );
};

export default RequireQuotationPage;
