import { IUser } from "../model/User";
import { CoreEntity } from "../dtos/common.dto";

export interface UserEntity
  extends CoreEntity,
    Omit<IUser, "password" | "books"> {}
