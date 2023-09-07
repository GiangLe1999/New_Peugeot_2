import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
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

    section: {
      type: String,
      required: true,
    },

    service: {
      type: String,
      required: true,
    },

    content: {
      type: String,
    },
  },
  { timestamps: true }
);

const Contact =
  mongoose.models?.Contact || mongoose.model("Contact", ContactSchema);

export default Contact;
