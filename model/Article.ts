import { IDatabaseImage } from "@/dtos/common.dto";
import { ObjectId } from "mongodb";
import { Schema, models, model } from "mongoose";

export enum articleCategory {
  none = "",
  uudai = "Ưu đãi",
  sukien = "Sự kiện",
  thongtinxe = "Thông tin xe",
}

export interface IArticle {
  name: string;
  description: string;
  slug: string;
  thumbnail?: IDatabaseImage;
  category: articleCategory;
  content: string;
  author: ObjectId;
  views: number;
}

const articleSchema: Schema<IArticle> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Ưu đãi", "Sự kiện", "Thông tin xe"],
    },

    thumbnail: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

articleSchema.index({ name: "text" });

const Article = models?.Article || model("Article", articleSchema);

export default Article;
