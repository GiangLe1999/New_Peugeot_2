"use client";

import FirstBanner from "@/components/FirstBanner";
import LoadingSpinner from "@/components/LoadingSpinner";
import CarList from "@/components/quotePage/CarList";
import Filter from "@/components/quotePage/Filter";
import { CarType } from "@/types";
import { Metadata } from "next";
import { useEffect, useState } from "react";

const QuotePage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);

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
    <>
      <div>
        <FirstBanner
          heading="BẢNG GIÁ"
          subHeading="Bảng giá chi tiết tất cả các dòng xe của Mazda"
          bgImg="/images/bao-gia/first-banner.jpg"
        />

        <div className="container">
          <div className="flex mt-8 mb-16 gap-7 max-[1000px]:flex-col">
            <Filter
              setCars={setCars}
              filterLoading={filterLoading}
              setFilterLoading={setFilterLoading}
            />
            {loading || filterLoading ? (
              <div className="flex-1">
                <LoadingSpinner />
              </div>
            ) : (
              <CarList cars={cars} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuotePage;
