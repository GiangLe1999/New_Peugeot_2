import { Schema, models, model } from "mongoose";

export interface IContact {
  name: string;
  phone: string;
  email: string;
  car: string;
  carLine: string;
  service: string;
  province: string;
  content: string;
  createdAt: string;
  status: string;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
    },
    car: {
      type: String,
    },
    carLine: {
      type: String,
    },
    service: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      default: "Chờ xử lý",
    },
  },
  { timestamps: true }
);

ContactSchema.index({ name: "text", phone: "text", email: "text" });

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
