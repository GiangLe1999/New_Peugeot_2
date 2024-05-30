import { IDatabaseImage } from "@/dtos/common.dto";
import { Schema, models, model } from "mongoose";

export enum carCategory {
  none = "",
  hatchback = "Hatchback",
  sedan_hatckback = "Sedan & Hatchback",
  couple = "Coupe (xe thể thao)",
  suv = "SUV (xe thể thao đa dụng)",
  pickup = "Pickup (xe bán tải)",
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
}

export interface ICarLine {
  name: string;
  price: number;
  tax: string;
}

export interface ICar {
  name: string;
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
      enum: [
        "Hatchback",
        "Sedan & Hatchback",
        "Sedan",
        "Coupe (xe thể thao)",
        "SUV (xe thể thao đa dụng)",
        "Pickup (xe bán tải)",
      ],
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

    colors: {
      type: [
        {
          type: {
            color: String,
            colorImg: { public_id: String, url: String },
          },
        },
      ],
      default: [],
    },

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

const Car = models?.Car2 || model("Car2", CarSchema);

export default Car;
