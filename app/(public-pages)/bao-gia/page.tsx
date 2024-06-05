"use client";

import FirstBanner from "@/components/FirstBanner";
import QuickConsultForm from "@/components/Layout/quick-consult-form";
import { CarLineType } from "@/types";

export type CarLinesType = {
  name: string;
  carLines: CarLineType[];
};

const RequireQuotationPage = () => {
  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ NHẬN BÁO GIÁ"
        subHeading="Đăng ký và đặt lịch lái thử dòng xe bạn mong muốn tại đại lý gần nhất."
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <QuickConsultForm />
      </div>
    </div>
  );
};

export default RequireQuotationPage;
