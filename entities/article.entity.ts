import { CoreEntity } from "@/dtos/common.dto";
import { IArticle } from "@/model/Article";
import { UserEntity } from "@/entities/user.entity";

export interface ArticleEntity extends CoreEntity, Omit<IArticle, "author"> {
  author: UserEntity;
}
