import FirstBanner from "@/components/FirstBanner";
import CarList from "@/components/quotePage/CarList";
import Filter from "@/components/quotePage/Filter";
import { getAllCarsFullData } from "@/lib/fetchData";
import { CarType } from "@/types";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = async () => {
  const cars = (await getAllCarsFullData()) as CarType[];

  return (
    <div>
      <FirstBanner
        heading="BẢNG GIÁ"
        subHeading="Bảng giá chi tiết tất cả các dòng xe của Mazda"
        bgImg="/images/bao-gia/first-banner.jpg"
      />

      <div className="container">
        <div className="flex mt-8 mb-16 gap-7">
          <Filter cars={cars} />
          <CarList cars={cars} />
        </div>
      </div>
    </div>
  );
};

export default page;
