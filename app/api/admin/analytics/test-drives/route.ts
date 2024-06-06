import dbConnect from "@/lib/db";
import TestDriver from "@/model/TestDriver";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const {
      keyword,
      startDate,
      endDate,
      carNames,
      carLines,
      statuses,
      limit,
      currentPage,
    } = await req.json();

    let findByKeyword: any = [];
    if (keyword) {
      findByKeyword = [
        { name: { $regex: keyword, $options: "i" } },
        { phone: { $regex: keyword, $options: "i" } },
        { email: { $regex: keyword, $options: "i" } },
      ];
    }

    const realStartDate = new Date(startDate);
    realStartDate.setDate(realStartDate.getDate() + 1);
    realStartDate.setHours(0, 0, 0, 0);
    const realStartDateString =
      realStartDate.toISOString().split("T")[0] + "T00:00:00.000Z";

    const realEndDate = new Date(endDate);
    realEndDate.setHours(23, 59, 59, 999);
    const realEndDateString =
      realEndDate.toISOString().split("T")[0] + "T23:59:59.999Z";

    const queryObj = {
      ...(keyword && { $or: findByKeyword }),
      ...(startDate &&
        endDate && {
          createdAt: {
            $gte: realStartDateString,
            $lte: realEndDateString,
          },
        }),
      ...(startDate &&
        !endDate && { createdAt: { $gte: realStartDateString } }),
      ...(endDate && !startDate && { createdAt: { $lte: realEndDateString } }),
      ...(carNames && { carName: { $in: carNames } }),
      ...(carLines && { carLine: { $in: carLines } }),
      ...(statuses && { status: { $in: statuses } }),
    };

    const contacts = await TestDriver.find(queryObj)
      .sort({ createdAt: -1 })
      .skip(limit * (currentPage - 1))
      .limit(limit)
      .lean();

    const totalDocuments = await TestDriver.countDocuments(queryObj);

    const totalPages = limit > 0 ? Math.ceil(totalDocuments / limit) : 1;

    return NextResponse.json(
      {
        data: contacts,
        totalDocuments,
        totalPages,
        status: 200,
        msg: "Get test drives successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: 500,
        error: "Internal server error",
        msg: error.message,
      },
      { status: 500 }
    );
  }
}
