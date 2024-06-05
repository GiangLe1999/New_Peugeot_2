"use client";

import { Dispatch, FC, SetStateAction } from "react";
import FilterAccordion from "@/components/quotePage/FilterAccordion";
import { CarType } from "@/types";

interface Props {
  initialCars: any;
  setCars: Dispatch<SetStateAction<CarType[]>>;
  setFilterLoading: Dispatch<SetStateAction<boolean>>;
  filterLoading: boolean;
}

const Filter: FC<Props> = ({
  initialCars,
  setCars,
  setFilterLoading,
  filterLoading,
}): JSX.Element => {
  const accordionData = [
    {
      header: "line",
      items: initialCars?.map((car: any) => car.name),
    },
    {
      header: "price",
      items: [
        "Dưới 500 triệu",
        "500 triệu - 700 triệu",
        "700 triệu - 1 tỷ",
        "1 tỷ - 2 tỷ",
      ],
    },
    { header: "fuel", items: ["Xăng", "Dầu"] },
    { header: "seats", items: ["5", "6", "7"] },
    {
      header: "kind",
      items: [
        "Hatchback",
        "Sedan",
        "Sedan & Hatchback",
        "Coupe (xe thể thao)",
        "SUV (xe thể thao đa dụng)",
        "Pickup (xe bán tải)",
      ],
    },
  ];

  return (
    <div className="w-[28%] bg-[#F3F3F3] p-4 h-fit max-[1000px]:w-full">
      <h3 className="text-xl font-bold text-center">BỘ LỌC</h3>
      <FilterAccordion
        data={accordionData}
        setCars={setCars}
        setFilterLoading={setFilterLoading}
        filterLoading={filterLoading}
      />
    </div>
  );
};

export default Filter;
