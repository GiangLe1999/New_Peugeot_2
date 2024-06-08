"use client";

import { FC, useEffect, useState } from "react";
import FinalPriceForm from "./FinalPriceForm";
import { CarLineType } from "@/types";
import CalInterestForm from "./CalInterestForm";
import { formatPrice } from "@/lib/formatData";
import InterestDetailTable from "./InterestDetailTable";
import { useFetchCarLines } from "@/hooks/useFetchCarLines";
import { getCarData } from "@/lib/fetchData";

interface Props {
  name?: string;
  lines?: CarLineType[];
  registration?: number;
  carNameArr?: string[];
  isInstallmentPage?: boolean;
}

const CarPriceSection: FC<Props> = ({
  name,
  lines,
  registration,
  isInstallmentPage,
  carNameArr,
}): JSX.Element => {
  const [choseCarLine, setChoseCarLine] = useState("");
  const [chosePercent, setChosePercent] = useState("0");
  const [choseLength, setChoseLength] = useState("5");
  const [choseInterest, setChoseInterest] = useState("7");
  const [choseKind, setChoseKind] = useState("descend");
  const [choseCarName, setChoseCarName] = useState("");
  const [choseCarData, setChoseCarData] = useState({
    registration: 0,
  });

  const [showInterestTable, setShowInterestTable] = useState(false);

  let currentLine = lines?.find(
    (line) => line.name === choseCarLine
  ) as CarLineType;

  let currentListPrice = currentLine?.price;

  const allCarLines = useFetchCarLines();

  let carLines = [] as CarLineType[];
  if (isInstallmentPage && choseCarName) {
    carLines = allCarLines.find((item) => item.name === choseCarName)
      ?.carLines as CarLineType[];
    currentLine = carLines?.find(
      (line) => line.name === choseCarLine
    ) as CarLineType;
    currentListPrice = currentLine?.price;
  }

  console.log(choseCarName);

  const borrowedMoney = (Number(chosePercent) * currentListPrice) / 100 || 0;

  const originalPaidMonthly = borrowedMoney / (Number(choseLength) * 12);

  const lengthArr = Array.from(
    { length: Number(choseLength) * 12 },
    (_, i) => i + 1
  );

  let interestTotal = 0;
  let interestArr = [];
  let remainArr = [borrowedMoney];
  if (choseKind === "descend") {
    for (let i = 0; i < lengthArr.length; i++) {
      const interestMonthly = Math.round(
        (remainArr[i] * (Number(choseInterest) / 100)) / 12
      );
      interestArr.push(interestMonthly);
      remainArr[i + 1] = remainArr[i] - originalPaidMonthly;
    }
    interestTotal = interestArr.reduce((acc, cur) => acc + cur, interestTotal);
  } else if (choseKind === "linear") {
    interestTotal =
      ((originalPaidMonthly * Number(choseInterest)) / 100) *
      Number(choseLength) *
      12;

    for (let i = 0; i < lengthArr.length; i++) {
      remainArr[i + 1] = remainArr[i] - originalPaidMonthly;
      interestArr.push((originalPaidMonthly * Number(choseInterest)) / 100);
    }
  }

  const fetchCarDataByName = async () => {
    const carData = (await getCarData("", choseCarName)) as {
      registration: number;
    };
    setChoseCarData(carData);
  };

  useEffect(() => {
    fetchCarDataByName();
    setChoseCarLine("");
  }, [choseCarName]);

  return (
    <section className="space-y-6">
      {!isInstallmentPage && (
        <>
          <h2 className="post-heading-2">
            <span>Giá xe {name}</span>
          </h2>
          {/* Table 1 */}
          <table className="price-table w-full">
            <thead>
              <tr>
                <td>Phiên Bản</td>
                <td className="text-right">Giá Xe</td>
              </tr>
            </thead>

            <tbody>
              {lines?.map((line, index) => (
                <tr key={index}>
                  <td>{line.name}</td>
                  <td className="text-right font-bold">
                    {formatPrice(line.price)} VNĐ
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <div className="grid grid-cols-2 gap-6 max-[890px]:grid-cols-1">
        {/* Table 2 */}
        <FinalPriceForm
          lines={isInstallmentPage ? carLines : lines}
          choseCarLine={choseCarLine}
          setChoseCarLine={setChoseCarLine}
          registration={
            isInstallmentPage
              ? (choseCarData?.registration as number)
              : (registration as number)
          }
          currentLine={currentLine}
          currentListPrice={currentListPrice}
          carNameArr={carNameArr}
          isInstallmentPage={isInstallmentPage}
          choseCarName={choseCarName}
          setChoseCarName={setChoseCarName}
        />

        {/* Table 3 */}
        <CalInterestForm
          chosePercent={chosePercent}
          setChosePercent={setChosePercent}
          choseLength={choseLength}
          setChoseLength={setChoseLength}
          choseInterest={choseInterest}
          setChoseInterest={setChoseInterest}
          choseKind={choseKind}
          setChoseKind={setChoseKind}
          borrowedMoney={borrowedMoney}
          originalPaidMonthly={originalPaidMonthly}
          interestTotal={interestTotal}
          showInterestTable={showInterestTable}
          setShowInterestTable={setShowInterestTable}
        />
      </div>

      {showInterestTable && (
        <InterestDetailTable
          interestArr={interestArr}
          remainArr={remainArr}
          originalPaidMonthly={originalPaidMonthly}
          lengthArr={lengthArr}
        />
      )}
    </section>
  );
};

export default CarPriceSection;
