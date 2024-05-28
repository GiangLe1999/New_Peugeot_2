import { ObjectId } from "mongodb";
import { Schema, models, model } from "mongoose";

export interface INotification {
  detail: ObjectId;
  read: boolean;
}

const notificationSchema: Schema<INotification> = new Schema(
  {
    detail: {
      type: Schema.Types.ObjectId,
      ref: "Contact",
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notification =
  models?.Notification || model("Notification", notificationSchema);

export default Notification;
