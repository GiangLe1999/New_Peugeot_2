import { QueryType } from "@/components/quotePage/FilterAccordion";
import dbConnect from "@/lib/db";
import Car from "@/model/Car";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();

  const { line, price, fuel, seats, kind } = query as QueryType;

  let carQuery = {} as any;

  if (line.length) {
    carQuery.name = line;
  }

  if (fuel.length) {
    carQuery["mainInfo.fuel"] = fuel;
  }

  if (seats.length) {
    const newSeats = seats.map((seat) => Number(seat));
    carQuery["mainInfo.seats"] = newSeats;
  }

  if (kind.length) {
    carQuery["mainInfo.kind"] = kind;
  }

  if (price.length) {
    carQuery.$or = [];
    price.forEach((item) => {
      switch (item) {
        case "Dưới 500 triệu":
          carQuery.$or = [...carQuery.$or, { priceFrom: { $lte: 500000000 } }];
          break;
        case "500 triệu - 700 triệu":
          carQuery.$or = [
            ...carQuery.$or,
            { priceFrom: { $gte: 500000000, $lte: 700000000 } },
          ];
          break;
        case "700 triệu - 1 tỷ":
          carQuery.$or = [
            ...carQuery.$or,
            { priceFrom: { $gte: 700000000, $lte: 1000000000 } },
          ];
          break;
        case "1 tỷ - 2 tỷ":
          carQuery.$or = [
            ...carQuery.$or,
            { priceFrom: { $gte: 100000000, $lte: 2000000000 } },
          ];
          break;
      }
    });
  }

  const cars = await Car.find(carQuery);

  await dbConnect();

  if (!cars.length) {
    return NextResponse.json("Found no cars", {
      status: 201,
    });
  }

  return NextResponse.json(cars, {
    status: 201,
  });
}
