import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    priceFrom: {
      type: Number,
      required: true,
    },

    priceFromText: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    avatar: { type: String, required: true },

    mainInfo: {
      type: {
        kind: String,
        seats: Number,
        gear: String,
        engine: String,
        fuel: String,
      },
    },

    colors: [{ type: { color: String, colorImg: String } }],

    carLines: [{ type: { name: String, price: Number, priceText: String } }],
  },
  { timestamps: true }
);

const Car = mongoose.models?.Car || mongoose.model("Car", CarSchema);

export default Car;
