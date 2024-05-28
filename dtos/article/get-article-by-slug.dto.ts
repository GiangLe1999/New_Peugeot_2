import { ArticleEntity } from "@/entities/article.entity";
import { CommonOutput } from "../common.dto";

export interface GetArticleBySlugOutput extends CommonOutput {
  data: ArticleEntity;
}
