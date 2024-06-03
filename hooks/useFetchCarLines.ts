import { CarLinesType } from "@/app/(public-pages)/test-drive/page";
import { getCarLinesByCar } from "@/service/car.service";
import { useEffect, useState } from "react";

export const useFetchCarLines = () => {
  const [carLines, setCarLines] = useState<CarLinesType[]>([]);

  const fetchDataHandler = async () => {
    const carLines = (await getCarLinesByCar()) as CarLinesType[];
    setCarLines(carLines);
  };

  useEffect(() => {
    fetchDataHandler();
  }, []);

  return carLines;
};
