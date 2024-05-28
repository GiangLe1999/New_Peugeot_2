import { IContact } from "@/model/Contact";
import { CoreEntity } from "../dtos/common.dto";

export interface ContactEntity extends CoreEntity, IContact {}
