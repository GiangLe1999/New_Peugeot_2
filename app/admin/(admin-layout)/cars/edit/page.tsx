"use client";

import AdminCardTitle from "@/components/admin-card-title";
import EditCarFrom from "@/components/admin-cars-page/edit-car-form";
import { CarEntity } from "@/entities/car.entity";
import { getCarBySlug } from "@/service/car.service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export const dynamic = "force-dynamic";

const Page = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [car, setCar] = useState<CarEntity>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getCarBySlug(slug as string);
      if (res) {
        setCar(res);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-page-container">
      {isLoading ? (
        <div className="admin-card p-6">
          {[...Array(9).keys()].map((item) => (
            <Skeleton className="w-full h-[70px] mb-4" key={item} />
          ))}
        </div>
      ) : (
        <div className="admin-card">
          <AdminCardTitle
            cardTitle="Cập nhật thông tin xe"
            cardIconClasses="admin-main-gradient"
            icon={MdEditSquare}
            iconSize={22}
          />

          <EditCarFrom car={car} />
        </div>
      )}
    </div>
  );
};

export default Page;
