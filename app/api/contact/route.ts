import dbConnect from "@/lib/db";
import Contact from "@/model/Contact";
import Notification from "@/model/Notification";
import pusherInstance from "@/utils/pusher.config";
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
      detail: contact._id,
    });
    pusherInstance.trigger("admin-notifications", "new-contact", contact);

    return NextResponse.json(contact, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 500,
    });
  }
}
