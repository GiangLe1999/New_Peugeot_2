"use client";

import { Dispatch, FC, SetStateAction } from "react";
import FilterAccordion from "@/components/quotePage/FilterAccordion";
import { CarType } from "@/types";

interface Props {
  setCars: Dispatch<SetStateAction<CarType[]>>;
  setFilterLoading: Dispatch<SetStateAction<boolean>>;
  filterLoading: boolean;
}

const Filter: FC<Props> = ({
  setCars,
  setFilterLoading,
  filterLoading,
}): JSX.Element => {
  const accordionData = [
    {
      header: "line",
      items: [
        "new mazda 2",
        "new mazda 2 sport",
        "new mazda cx-3",
        "new mazda 3",
        "new mazda3 sport",
        "new mazda cx-30",
        "new mazda 6",
        "new mazda cx-5 ipm",
        "new mazda cx-8",
        "new mazda bt-50",
      ],
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
    { header: "seats", items: ["5", "7"] },
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
    <div className="w-[28%] bg-[#F3F3F3] p-4 h-fit">
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
