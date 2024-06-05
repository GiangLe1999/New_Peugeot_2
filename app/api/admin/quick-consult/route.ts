import dbConnect from "@/lib/db";
import QuickConsult from "@/model/QuickConsult";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { quickConsultId, newStatus } = await req.json();

    await dbConnect();

    await QuickConsult.updateOne(
      { _id: quickConsultId },
      { $set: { status: newStatus } }
    );

    return NextResponse.json(
      { updated: true, status: 200, msg: "Update quick consult successfully" },
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
