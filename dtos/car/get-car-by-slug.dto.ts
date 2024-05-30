import { CarEntity } from "@/entities/car.entity";
import { CommonOutput } from "../common.dto";

export interface GetCarBySlugOutput extends CommonOutput {
  data: CarEntity;
}
