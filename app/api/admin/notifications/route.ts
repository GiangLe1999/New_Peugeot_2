import dbConnect from "@/lib/db";
import Notification from "@/model/Notification";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { notisId } = await req.json();

    await dbConnect();

    await Notification.updateMany(
      { _id: { $in: notisId } },
      { $set: { read: true } }
    );
    return NextResponse.json(
      { updated: true, status: 200, msg: "Update notification successfully" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 500, msg: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
