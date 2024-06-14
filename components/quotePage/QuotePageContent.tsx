"use client";

import { getAllCarsForFilter } from "@/service/car.service";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import FirstBanner from "../FirstBanner";
import Filter from "./Filter";
import LoadingSpinner from "../LoadingSpinner";
import CarList from "./CarList";

interface Props {}

const QuotePageContent: FC<Props> = (props): JSX.Element => {
  const { data, isPending } = useQuery({
    queryKey: ["get-all-cars-for-filter"],
    queryFn: getAllCarsForFilter,
  });

  const [cars, setCars] = useState<any[]>([]);
  const [filterLoading, setFilterLoading] = useState(false);

  useEffect(() => {
    if (data?.length) setCars(data);
  }, [data?.length]);

  return (
    <div>
      <FirstBanner
        heading="BẢNG GIÁ"
        subHeading="Bảng giá chi tiết tất cả các dòng xe của Peugeot"
        bgImg="/images/thu-tuc-tra-gop/first-banner.jpg"
        bgClasses="!bg-cover"
      />

      <div className="container">
        <div className="flex mt-8 mb-16 gap-7 max-[1000px]:flex-col">
          <Filter
            initialCars={data}
            setCars={setCars}
            filterLoading={filterLoading}
            setFilterLoading={setFilterLoading}
          />
          {isPending || filterLoading ? (
            <div className="flex-1">
              <LoadingSpinner />
            </div>
          ) : (
            <CarList cars={cars} />
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotePageContent;
