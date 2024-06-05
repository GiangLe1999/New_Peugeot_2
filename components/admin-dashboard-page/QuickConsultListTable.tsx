"use client";

import { FC, useEffect, useState } from "react";
import { FaFileWaveform } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { getAllQuickConsults } from "@/lib/fetchData";
import { formatShortDate } from "@/lib/formatData";
import QuickConsultListTableHeader from "./QuickConsultListTableHeader";
import QuickConsultListTableFooter from "./QuickConsultListTableFooter";
import ContactStatus from "./ContactStatus";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import QuickConsultStatus from "./QuickConsultStatus";

type DateRangeStateType = {
  startDate: Date;
  endDate: Date;
  key: string;
}[];

interface Props {}

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const oneMonthAgo = currentMonth - 1;
const dateBeforeOneMonth = new Date(currentDate);
dateBeforeOneMonth.setMonth(oneMonthAgo);

currentDate.setHours(23);
currentDate.setMinutes(59);
currentDate.setSeconds(59);
currentDate.setMilliseconds(999);

export const initialDateRange = [
  {
    startDate: dateBeforeOneMonth,
    endDate: currentDate,
    key: "selection",
  },
];

export interface initialFilterObj {
  carNames: string[];
  carLines: string[];
  provinces: string[];
  statuses: string[];
}

export const initialFilter: initialFilterObj = {
  carNames: [],
  carLines: [],
  provinces: [],
  statuses: [],
};

const QuickConsultListTable: FC<Props> = (props): JSX.Element => {
  const [isClient, setIsClient] = useState(false);

  const [keyword, setKeyword] = useState("");

  const [dateRange, setDateRange] =
    useState<DateRangeStateType>(initialDateRange);

  const startDate = dateRange[0].startDate;
  const endDate = dateRange[0].endDate;

  const [filter, setFilter] = useState(initialFilter);

  const [limit, setLimit] = useState(15);

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending } = useQuery({
    queryKey: [
      `admin-quick-consults`,
      keyword,
      startDate,
      endDate,
      filter,
      limit,
      currentPage,
    ],
    queryFn: () =>
      getAllQuickConsults({
        keyword,
        startDate,
        endDate,
        ...(filter.carNames.length > 0 && { carNames: filter.carNames }),
        ...(filter.statuses.length > 0 && { statuses: filter.statuses }),
        limit,
        currentPage,
      }),
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="admin-card">
      <h2 className="mt-8 mx-6 font-bold text-xl">Khách hàng cần báo giá</h2>
      <QuickConsultListTableHeader
        keyword={keyword}
        setKeyword={setKeyword}
        dateRange={dateRange}
        setDateRange={setDateRange}
        data={data?.data || []}
        filter={filter}
        setFilter={setFilter}
      />
      {isClient && (
        <table className="admin-table w-full text-sm">
          <thead>
            <tr>
              <th className="text-center border border-l-0">STT</th>
              <th className="border text-left pl-3">Họ & Tên</th>
              <th className="border text-left pl-3">SĐT</th>
              <th className="border text-left pl-3">Dòng xe</th>
              <th className="border text-left pl-3">Ngày</th>
              <th className="border text-left pl-3">Trạng thái</th>
            </tr>
          </thead>
          {isPending ? (
            <tbody>
              {[...Array(6).keys()].map((item) => (
                <tr key={item}>
                  <td colSpan={11}>
                    <Skeleton className="w-full h-[50px]" />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data?.data?.map((quickConsult: any, index: number) => (
                <tr key={index}>
                  <td className="text-center border border-l-0 !pl-0">
                    {index + 1 + limit * (currentPage - 1)}
                  </td>
                  <td className="border">{quickConsult.name}</td>
                  <td className="border">{quickConsult.phone}</td>
                  <td className="border">{quickConsult.carName}</td>
                  <td className="border">
                    {formatShortDate(quickConsult.createdAt)}
                  </td>
                  <td className="border border-r-0">
                    <QuickConsultStatus
                      initialStatus={quickConsult.status}
                      quickConsultId={quickConsult._id}
                      keyword={keyword}
                      startDate={startDate}
                      endDate={endDate}
                      filter={filter}
                      limit={limit}
                      currentPage={currentPage}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      )}

      <QuickConsultListTableFooter
        limit={limit}
        setLimit={setLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalDocuments={data?.totalDocuments}
        totalPages={data?.totalPages}
      />
    </div>
  );
};

export default QuickConsultListTable;
