import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema(
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

    carName: {
      type: String,
      required: true,
    },

    carLine: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Quotation =
  mongoose.models?.Quotation || mongoose.model("Quotation", QuotationSchema);

export default Quotation;