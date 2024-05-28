import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import QuickConsult from "@/model/QuickConsult";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const currentDate = new Date();

  const startDate = new Date(currentDate);
  startDate.setHours(0, 0, 0, 0);

  const endDate = new Date(currentDate);
  endDate.setHours(23, 59, 59, 999);

  try {
    await dbConnect();

    const [numsOfContacts, numsOfQuickConsults] = await Promise.all([
      Contact.count({ createdAt: { $gte: startDate, $lte: endDate } }),
      QuickConsult.count({ createdAt: { $gte: startDate, $lte: endDate } }),
    ]);

    const data = numsOfContacts + numsOfQuickConsults;

    return NextResponse.json(
      {
        data,
        status: 200,
        msg: "Get form quantity successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, error: "Internal server error", msg: error },
      { status: 500 }
    );
  }
}
