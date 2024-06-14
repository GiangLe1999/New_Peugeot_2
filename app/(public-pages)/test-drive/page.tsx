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

const TestDrivePage = () => {
  const carLines = useFetchCarLines();

  return (
    <div>
      <FirstBanner
        heading="ĐĂNG KÝ LÁI THỬ"
        subHeading="Đăng ký và nhận bảng báo giá mới nhất cho dòng xe mà bạn quan tâm."
        bgImg="/images/test-drive/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container my-12">
        <div className="customer-form-wrapper">
          <div className="relative w-full h-full">
            <NextImage
              src="/images/test-drive/lai-thu-peugeot.jpg"
              alt="Lái thử Peugeot"
            />
          </div>

          <CustomerForm carLines={carLines} />
        </div>
      </div>
    </div>
  );
};

export default TestDrivePage;
