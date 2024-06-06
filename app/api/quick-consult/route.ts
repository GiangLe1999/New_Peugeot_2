import dbConnect from "@/lib/db";
import Notification from "@/model/Notification";
import QuickConsult from "@/model/QuickConsult";
import pusherInstance from "@/utils/pusher.config";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, choseCar } = await req.json();

  if (!name || !name.trim() || !phone || !phone.trim() || !choseCar)
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const quickConsult = new QuickConsult({
    name,
    phone,
    carName: choseCar,
  });

  await quickConsult.save();

  await Notification.create({
    name,
    phone,
    carName: choseCar,
    service: "Báo giá",
  });
  pusherInstance.trigger("admin-notifications", "new-customer", {});

  return NextResponse.json(quickConsult, {
    status: 201,
  });
}
