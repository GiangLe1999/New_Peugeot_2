import mongoose from "mongoose";

const QuickConsultSchema = new mongoose.Schema(
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

    carName: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Chờ xử lý",
    },
  },
  { timestamps: true }
);

QuickConsultSchema.index({ name: "text", phone: "text" });

const QuickConsult =
  mongoose.models?.QuickConsult ||
  mongoose.model("QuickConsult", QuickConsultSchema);

export default QuickConsult;
