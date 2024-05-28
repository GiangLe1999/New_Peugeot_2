import { ArticleEntity } from "@/entities/article.entity";
import { CommonOutput } from "../common.dto";

export interface GetAllArticlesOutput extends CommonOutput {
  data: ArticleEntity[];
}

export interface GetAllArticlesWithPagesOutput extends CommonOutput {
  data: { articles: ArticleEntity[]; totalPages: number };
}
