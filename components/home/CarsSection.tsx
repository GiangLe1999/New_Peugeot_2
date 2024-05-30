import { FC } from "react";
import SectionTitle from "./SectionTitle";
import CarCard from "./CarCard";
import { CarEntity } from "@/entities/car.entity";

interface Props {
  cars: CarEntity[];
}

const CarsSection: FC<Props> = ({ cars }): JSX.Element => {
  return (
    <section className="bg-lightBg">
      <div className="container py-10">
        <p className="text-textColor text-center font-bold text-sm">
          DÒNG XE KINH DOANH TẠI
        </p>
        <SectionTitle title="MAZDA SÀI GÒN" />

        <div className="grid grid-cols-3 gap-4 py-8 max-[982px]:grid-cols-2 max-[680px]:grid-cols-1">
          {cars.map((car) => (
            <CarCard car={car} key={car._id.toString()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarsSection;
