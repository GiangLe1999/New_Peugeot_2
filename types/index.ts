import { Types } from "mongoose";

export interface CarType {
  _id: Types.ObjectId;
  name: string;
  priceFrom: number;
  priceFromText: string;
  slug: string;
  avatar: string;
  registration: number;
  mainInfo: {
    kind: string;
    seats: number;
    gear: string;
    engine: string;
    fuel: string;
  };
  colors: { color: string; colorImg: string }[];
  carLines: {
    name: string;
    price: number;
    tax: string;
  }[];
}

export interface CarLineType {
  name: string;
  price: number;
  tax: string;
}
