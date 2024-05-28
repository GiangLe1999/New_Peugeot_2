import { IArticle } from "../../model/Article";
import { CommonOutput } from "../common.dto";
import { ArticleEntity } from "@/entities/article.entity";

export interface CreateArticleInput
  extends Omit<IArticle, "thumbnail" | "author" | "views"> {
  thumbnail: string;
  author: string;
}

export interface CreateArticleOutput extends CommonOutput {
  data?: ArticleEntity;
}
