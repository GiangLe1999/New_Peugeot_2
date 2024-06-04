"use client";

import { FC } from "react";
import { IoBarChart } from "react-icons/io5";
import AnalyticsBlock from "./AnalyticsBlock";
import { BsFillTagsFill } from "react-icons/bs";
import { PiClockCountdownFill } from "react-icons/pi";
import { BiSolidCalculator } from "react-icons/bi";
import { formatLongDate } from "@/lib/formatData";
import { IoIosSend } from "react-icons/io";
import { FaBookReader, FaEdit, FaFile } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAnalyticsStatistics } from "@/lib/fetchData";

interface Props {}

const AnalyticsBlocks: FC<Props> = (props): JSX.Element => {
  const { data, isPending } = useQuery({
    queryKey: [`admin-analytics`],
    queryFn: () => getAnalyticsStatistics(),
  });

  return (
    <div className="grid grid-cols-4 gap-10 mt-14">
      <AnalyticsBlock
        icon={IoBarChart}
        iconSize={28}
        title="Tổng lượt xem Website"
        number={data?.totalViews.data || 0}
        iconBelow={BsFillTagsFill}
        explainText="Theo dõi thông qua Google Analytics"
      />

      <AnalyticsBlock
        icon={PiClockCountdownFill}
        iconSize={32}
        title="Lượt xem hôm qua"
        number={data?.todayViews.data || 0}
        iconBelow={BiSolidCalculator}
        explainText={`Tính từ lúc 0h00 - 24h00 - ${formatLongDate(
          new Date().getTime() - 1000 * 60 * 60 * 24
        )}`}
      />

      <AnalyticsBlock
        icon={FaFile}
        iconSize={26}
        title="Số form nhận được hôm nay"
        number={data?.numsOfForms.data || 0}
        iconBelow={IoIosSend}
        explainText={`Tính từ lúc 0h00 - ${formatLongDate(Date.now())}`}
      />

      <AnalyticsBlock
        icon={FaBookReader}
        iconSize={28}
        title="Số lượt đọc bài viết"
        number={data?.articleTotalViews.data || 0}
        iconBelow={FaEdit}
        explainText="Tổng số lượt đọc bài viết từ trước đến nay"
      />
    </div>
  );
};

export default AnalyticsBlocks;
