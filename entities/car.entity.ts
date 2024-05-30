import { CoreEntity } from "@/dtos/common.dto";
import { ICar } from "@/model/Car2";

export interface CarEntity extends CoreEntity, ICar {}
