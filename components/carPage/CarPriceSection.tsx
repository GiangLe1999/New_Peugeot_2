"use client";

import { FC, useState } from "react";
import FinalPriceForm from "./FinalPriceForm";
import { CarLineType } from "@/types";
import CalInterestForm from "./CalInterestForm";
import { formatPrice } from "@/lib/formatData";
import InterestDetailTable from "./InterestDetailTable";

interface Props {
  lines: CarLineType[];
  registration: number;
}

const CarPriceSection: FC<Props> = ({ lines, registration }): JSX.Element => {
  const [choseCarLine, setChoseCarLine] = useState("");
  const [chosePercent, setChosePercent] = useState("0");
  const [choseLength, setChoseLength] = useState("5");
  const [choseInterest, setChoseInterest] = useState("7");
  const [choseKind, setChoseKind] = useState("descend");

  const [showInterestTable, setShowInterestTable] = useState(false);

  const currentLine = lines.find(
    (line) => line.name === choseCarLine
  ) as CarLineType;
  const currentListPrice = currentLine?.price || 0;

  const borrowedMoney = (Number(chosePercent) * currentListPrice) / 100;

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

  return (
    <section className="space-y-6">
      <h2 className="post-heading-2">
        <span>GIÁ XE NEW MAZDA 2</span>
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
          {lines.map((line, index) => (
            <tr key={index}>
              <td>{line.name}</td>
              <td className="text-right font-bold">
                {formatPrice(line.price)} VNĐ
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid grid-cols-2 gap-6">
        {/* Table 2 */}
        <FinalPriceForm
          lines={lines}
          choseCarLine={choseCarLine}
          setChoseCarLine={setChoseCarLine}
          registration={registration}
          currentLine={currentLine}
          currentListPrice={currentListPrice}
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
