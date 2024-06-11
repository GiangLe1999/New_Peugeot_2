import dbConnect from "@/lib/db";
import { formatDateForSendingMail } from "@/lib/formatData";
import Contact from "@/model/Contact";
import Notification from "@/model/Notification";
import pusherInstance from "@/utils/pusher.config";
import sendEmail from "@/utils/sendMail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, email, carName, carLine, content, section, service } =
      await req.json();

    if (
      !name ||
      !name.trim() ||
      !phone ||
      !phone.trim() ||
      !email ||
      !email.trim() ||
      !carName ||
      !carLine ||
      !section ||
      !service
    )
      return NextResponse.json(
        { error: "Invalid request body!" },
        {
          status: 422,
        }
      );

    await dbConnect();

    const contact = new Contact({
      name,
      phone,
      email,
      car: carName,
      carLine,
      content,
      province: section,
      service,
    });

    await contact.save();

    await Notification.create({
      name,
      phone,
      email,
      carName,
      carLine,
      content,
      service,
      province: section,
    });
    pusherInstance.trigger("admin-notifications", "new-customer", contact);

    await sendEmail(
      process.env.SMTP_MAIL_TO as string,
      "KH Mazda mới gửi form liên hệ",
      `<h1>Khách hàng gửi form liên hệ tại website ${
        process.env.NEXT_PUBLIC_BASE_URL
      }:</h1>
      <ul>
        <li>Họ tên: <b>${name}</b></li>
        <li>SĐT: <b>${phone}</b></li>
        <li>Email: <b>${email}</b></li>
        <li>Tên xe: <b>${carName}</b></li>
        <li>Dòng xe: <b>${carLine}</b></li>
        <li>Nội dung: <b>${content}</b></li>
        <li>Về vấn đề: <b>${service}</b></li>
        <li>Tỉnh / thành: <b>${section}</b></li>
        <li>Thời gian gửi form: <b>${formatDateForSendingMail(
          Date.now() as any
        )}</b></li>
      </ul>
      `
    );

    return NextResponse.json(contact, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
