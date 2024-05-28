import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
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
      provinces,
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

    const queryObj = {
      ...(keyword && { $or: findByKeyword }),
      ...(startDate && { createdAt: { $gte: startDate } }),
      ...(endDate && { createdAt: { $lte: endDate } }),
      ...(carNames && { car: { $in: carNames } }),
      ...(carLines && { carLine: { $in: carLines } }),
      ...(provinces && { province: { $in: provinces } }),
      ...(statuses && { status: { $in: statuses } }),
    };

    const contacts = await Contact.find(queryObj)
      .sort({ createdAt: -1 })
      .skip(limit * (currentPage - 1))
      .limit(limit)
      .lean();

    const totalDocuments = await Contact.countDocuments(queryObj);

    const totalPages = limit > 0 ? Math.ceil(totalDocuments / limit) : 1;

    return NextResponse.json(
      {
        data: contacts,
        totalDocuments,
        totalPages,
        status: 200,
        msg: "Get contacts successfully",
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
