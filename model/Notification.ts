import { ObjectId } from "mongodb";
import { Schema, models, model } from "mongoose";

export interface INotification {
  detail: ObjectId;
  read: boolean;
  name: String;
  phone: String;
  email: String;
  carName: String;
  province: String;
  carLine: String;
  content: String;
  service: String;
}

const notificationSchema: Schema<INotification> = new Schema(
  {
    detail: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
    service: {
      type: String,
    },
    read: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    carName: {
      type: String,
    },
    province: {
      type: String,
    },
    carLine: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Notification =
  models?.Notification || model("Notification", notificationSchema);

export default Notification;
