import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import Notification from "@/model/Notification";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const notifications = await Notification.find()
      .sort({
        read: 1,
        createdAt: -1,
      })
      .limit(8)
      .populate({
        path: "detail",
        model: Contact,
        select: "-__v -status -updatedAt",
      })
      .lean();

    return NextResponse.json(
      {
        data: notifications,
        status: 200,
        msg: "Get recently notifications successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }
}
