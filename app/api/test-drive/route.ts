import dbConnect from "@/lib/db";
import { formatDateForSendingMail } from "@/lib/formatData";
import Notification from "@/model/Notification";
import TestDriver from "@/model/TestDriver";
import pusherInstance from "@/utils/pusher.config";
import sendEmail from "@/utils/sendMail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, phone, email, carName, carLine, content } = await req.json();

  if (
    !name ||
    !name.trim() ||
    !phone ||
    !phone.trim() ||
    !email ||
    !email.trim() ||
    !carName ||
    !carLine
  )
    return NextResponse.json(
      { error: "Invalid request body!" },
      {
        status: 422,
      }
    );

  await dbConnect();

  const testDriver = new TestDriver({
    name,
    phone,
    email,
    carName,
    carLine,
    content,
  });

  await testDriver.save();

  await Notification.create({
    name,
    phone,
    email,
    carName,
    carLine,
    content,
    service: "Lái thử",
  });
  pusherInstance.trigger("admin-notifications", "new-customer", {});

  await sendEmail(
    process.env.SMTP_MAIL_TO as string,
    "KH Peugeot mới đăng ký lái thử",
    `<h1>Khách hàng gửi form đăng ký lái thử tại website ${
      process.env.NEXT_PUBLIC_BASE_URL
    }:</h1>
      <ul>
        <li>Họ tên: <b>${name}</b></li>
        <li>SĐT: <b>${phone}</b></li>
        <li>Email: <b>${email}</b></li>
        <li>Tên xe: <b>${carName}</b></li>
        <li>Dòng xe: <b>${carLine}</b></li>
        <li>Nội dung: <b>${content}</b></li>
        <li>Về vấn đề: <b>Lái thử</b></li>
        <li>Thời gian gửi form: <b>${formatDateForSendingMail(
          Date.now() as any
        )}</b></li>
      </ul>
    `
  );

  return NextResponse.json(testDriver, {
    status: 201,
  });
}
