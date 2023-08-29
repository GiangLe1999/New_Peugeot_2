import { Types } from "mongoose";

export interface CarType {
  _id: Types.ObjectId;
  name: string;
  priceFrom: number;
  priceFromText: string;
  slug: string;
  avatar: string;
  mainInfo: {
    kind: string;
    seats: number;
    gear: string;
    engine: string;
    fuel: string;
  };
  colors: { color: string; colorImg: string }[];
  carLines: { name: string; price: number; priceText: string }[];
}
