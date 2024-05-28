import { IDatabaseImage } from "@/dtos/common.dto";
import { Schema, models, model } from "mongoose";

export enum carCategory {
  none = "",
  hatchback = "Hatchback",
  sedan = "Sedan",
  suv = "SUV",
  hybrid = "HYBRID",
}

export enum carTier {
  none = "",
  a = "Hạng A",
  b = "Hạng B",
  c = "Hạng C",
  d = "Hạng D",
  e = "Hạng E",
}

export interface ICarColor {
  color: string;
  colorImg: IDatabaseImage;
  colorText: string;
}

export interface ICarLine {
  name: string;
  price: number;
  tax: string;
}

export interface ICar {
  name: string;
  slogan: string;
  priceFrom: number;
  slug: string;
  category: carCategory;
  tier: carTier;
  registration: number;
  avatar: IDatabaseImage;
  seats: number;
  gear: string;
  fuel: string;
  engine: string;
  colors?: ICarColor[];
  carLines?: ICarLine[];
  brochure?: string;
  saleContent: string;
  content: string;
}

const CarSchema: Schema<ICar> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slogan: {
      type: String,
      trim: true,
      required: true,
    },

    priceFrom: {
      type: Number,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Hatchback", "Sedan", "SUV", "HYBRID"],
    },

    tier: {
      type: String,
      required: true,
      enum: ["Hạng A", "Hạng B", "Hạng C", "Hạng D", "Hạng E"],
    },

    registration: { type: Number, required: true },

    avatar: { type: { public_id: String, url: String }, required: true },

    seats: { type: Number, required: true },

    fuel: { type: String, required: true },

    engine: { type: String, required: true },

    gear: { type: String, required: true },

    colors: [
      {
        type: {
          color: String,
          colorImg: { public_id: String, url: String },
          colorText: String,
        },
      },
    ],

    carLines: [
      {
        type: {
          name: String,
          price: Number,
          tax: String,
        },
      },
    ],

    brochure: { type: String },

    saleContent: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

CarSchema.index({ name: "text" });

const Car = models?.Car || model("Car", CarSchema);

export default Car;
