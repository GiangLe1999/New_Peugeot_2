import { CarEntity } from "@/entities/car.entity";
import { CoreOutput } from "../common.dto";

export interface GetAllCarsOutput extends CoreOutput {
  data: CarEntity[];
}
