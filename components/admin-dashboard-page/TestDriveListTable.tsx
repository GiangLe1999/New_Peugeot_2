"use client";

import { FC, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllTestDrives } from "@/lib/fetchData";
import { ContactEntity } from "@/entities/contact.entity";
import { formatShortDate } from "@/lib/formatData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TestDriveListTableFooter from "./TestDriveListTableFooter";
import TestDriveListTableHeader from "./TestDriveListTableHeader";
import TestDriveStatus from "./TestDriveStatus";

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
  statuses: string[];
}

export const initialFilter: initialFilterObj = {
  carNames: [],
  carLines: [],
  statuses: [],
};

const TestDriveListTable: FC<Props> = (props): JSX.Element => {
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
      `admin-test-drives`,
      keyword,
      startDate,
      endDate,
      filter,
      limit,
      currentPage,
    ],
    queryFn: () =>
      getAllTestDrives({
        keyword,
        startDate,
        endDate,
        ...(filter.carLines.length > 0 && { carLines: filter.carLines }),
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
    <div className="admin-card pt-6">
      <h2 className="font-bold text-xl mx-6">Khách hàng muốn lái thử</h2>

      <TestDriveListTableHeader
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
              <th className="border text-left pl-3">Email</th>
              <th className="border text-left pl-3">SĐT</th>
              <th className="border text-left pl-3">Dòng xe</th>
              <th className="border text-left pl-3">Phiên bản</th>
              <th className="border text-left pl-3">Tin nhắn</th>
              <th className="border text-left pl-3">Ngày</th>
              <th className="border text-left pl-3">Trạng thái</th>
            </tr>
          </thead>
          {isPending ? (
            <tbody>
              {[...Array(8).keys()].map((item) => (
                <tr key={item}>
                  <td colSpan={11}>
                    <Skeleton className="w-full h-[50px] pr-4" />
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data?.data?.map((testDrive: any, index: number) => (
                <tr key={index}>
                  <td className="text-center border border-l-0 !pl-0">
                    {index + 1 + limit * (currentPage - 1)}
                  </td>
                  <td className="border">{testDrive.name}</td>
                  <td className="border">{testDrive.email}</td>
                  <td className="border">{testDrive.phone}</td>
                  <td className="border">{testDrive.carName}</td>
                  <td className="border max-w-[250px] pr-2">
                    {testDrive.carLine}
                  </td>
                  <td
                    className="border max-w-[300px] pr-2"
                    style={{ wordWrap: "anywhere" as any }}
                  >
                    {testDrive.content}
                  </td>
                  <td className="border">
                    {formatShortDate(testDrive.createdAt)}
                  </td>
                  <td className="border border-r-0">
                    <TestDriveStatus
                      initialStatus={testDrive.status}
                      testDriveId={testDrive._id}
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

      <TestDriveListTableFooter
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

export default TestDriveListTable;
