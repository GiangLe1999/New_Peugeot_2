"use client";

import FirstBanner from "@/components/FirstBanner";
import CarList from "@/components/quotePage/CarList";
import Filter from "@/components/quotePage/Filter";
import { CarType } from "@/types";
import { useEffect, useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const QuotePage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?getAll=true`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setCars(data);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  return (
    <div>
      <FirstBanner
        heading="BẢNG GIÁ"
        subHeading="Bảng giá chi tiết tất cả các dòng xe của Mazda"
        bgImg="/images/bao-gia/first-banner.jpg"
      />

      <div className="container">
        <div className="flex mt-8 mb-16 gap-7">
          <Filter cars={cars} setCars={setCars} />
          {loading ? (
            <div className="w-full h-screen flex flex-col items-center justify-center text-primary">
              <ImSpinner3 className="animate-spin" size={50} />
              <p className="mt-2 text-xl">Đang tải dữ liệu</p>
            </div>
          ) : (
            <CarList cars={cars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
