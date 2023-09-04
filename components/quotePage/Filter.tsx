"use client";

import { FC } from "react";
import Accordion from "@/components/Accordion";
import { CarType } from "@/types";

interface Props {
  cars: CarType[];
}

const Filter: FC<Props> = ({ cars }): JSX.Element => {
  const accordionData = [
    { header: "DÒNG XE", items: cars.map((car) => car.name) },
    {
      header: "GIÁ",
      items: [
        "Dưới 500 triệu",
        "500 triệu - 700 triệu",
        "700 triệu - 1 tỷ",
        "1 tỷ - 2 tỷ",
      ],
    },
    { header: "NHIÊN LIỆU", items: ["Xăng", "Dầu"] },
    { header: "SỐ CHỖ", items: ["5", "7"] },
    {
      header: "KIÊU DÁNG",
      items: Array.from(new Set(...[cars.map((car) => car.mainInfo.kind)])),
    },
  ];

  return (
    <div className="w-[28%] bg-[#F3F3F3] p-4 h-fit">
      <h3 className="text-xl font-bold text-center">BỘ LỌC</h3>
      <Accordion data={accordionData} />
    </div>
  );
};

export default Filter;
