import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import QuickConsult from "@/model/QuickConsult";
import TestDriver from "@/model/TestDriver";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const currentDate = new Date();

  const realStartDate = currentDate;
  realStartDate.setHours(0, 0, 0, 0);
  const realStartDateString =
    realStartDate.toISOString().split("T")[0] + "T00:00:00.000Z";

  const realEndDate = currentDate;
  realEndDate.setHours(23, 59, 59, 999);
  const realEndDateString =
    realEndDate.toISOString().split("T")[0] + "T23:59:59.999Z";

  try {
    await dbConnect();

    const [numsOfContacts, numsOfQuickConsults, numsOfTestDrives] =
      await Promise.all([
        Contact.count({
          createdAt: { $gte: realStartDateString, $lte: realEndDateString },
        }),
        QuickConsult.count({
          createdAt: { $gte: realStartDateString, $lte: realEndDateString },
        }),
        TestDriver.count({
          createdAt: { $gte: realStartDateString, $lte: realEndDateString },
        }),
      ]);

    const data = numsOfContacts + numsOfQuickConsults + numsOfTestDrives;

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
