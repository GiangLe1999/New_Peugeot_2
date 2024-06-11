"use client";

import CarsTable from "@/components/admin-cars-page/cars-table";
import AdminCardTitle from "@/components/admin-card-title";
import { MdEditSquare } from "react-icons/md";
import { getAllCarsForAdmin } from "@/service/car.service";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Page = () => {
  const { data: cars, isPending } = useQuery({
    queryKey: ["get-admin-cars"],
    queryFn: getAllCarsForAdmin,
  });

  return (
    <div className="admin-page-container">
      {isPending ? (
        <div className="admin-card p-6">
          {[...Array(9).keys()].map((item) => (
            <Skeleton className="w-full h-[70px] mb-4" key={item} />
          ))}
        </div>
      ) : (
        <div className="admin-card">
          <AdminCardTitle
            cardTitle="Danh Sách Xe"
            cardIconClasses="admin-main-gradient"
            icon={MdEditSquare}
            iconSize={22}
          />

          <CarsTable cars={cars} />
        </div>
      )}
    </div>
  );
};

export default Page;
