import dbConnect from "@/lib/db";
import { formatDateForSendingMail } from "@/lib/formatData";
import Notification from "@/model/Notification";
import QuickConsult from "@/model/QuickConsult";
import pusherInstance from "@/utils/pusher.config";
import sendEmail from "@/utils/sendMail";
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

  await sendEmail(
    process.env.SMTP_MAIL_TO as string,
    "KH Peugeot mới cần báo giá",
    `<h1>Khách hàng gửi form yêu cầu báo giá tại website ${
      process.env.NEXT_PUBLIC_BASE_URL
    }:</h1>
    <ul>
      <li>Họ tên: <b>${name}</b></li>
      <li>SĐT: <b>${phone}</b></li>
      <li>Tên xe: <b>${choseCar}</b></li>
      <li>Về vấn đề: <b>Báo giá</b></li>
      <li>Thời gian gửi form: <b>${formatDateForSendingMail(
        Date.now() as any
      )}</b></li>
    </ul>
    `
  );

  return NextResponse.json(quickConsult, {
    status: 201,
  });
}
