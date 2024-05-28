import dbConnect from "@/lib/db";
import Notification from "@/model/Notification";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { notiId } = await req.json();

    await dbConnect();

    await Notification.updateOne({ _id: notiId }, { $set: { read: true } });

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
