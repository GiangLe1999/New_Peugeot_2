import { ICar, ICarColor } from "@/model/Car2";
import { CommonOutput } from "../common.dto";
import { CarEntity } from "@/entities/car.entity";

export interface CreateCarInput extends Omit<ICar, "avatar" | "colors"> {
  avatar: string;
  colors: { color: string; colorImg: string }[];
}

export interface CreateCarOutput extends CommonOutput {
  data?: CarEntity;
}
