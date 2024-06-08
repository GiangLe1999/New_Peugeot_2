import { Model, Schema, models, model, ObjectId } from "mongoose";

export enum userRole {
  admin = "admin",
  user = "user",
}

export interface IUser {
  name: string;
  email: string;
  role: userRole;
  password: string;
  description?: string;
  books: [ObjectId];
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  youtube?: string;
  avatar?: {
    public_id: string;
    url: string;
  };
  articles: [ObjectId];
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    role: {
      type: String,
      default: userRole.user,
      required: true,
    },

    description: {
      type: String,
    },

    facebook: {
      type: String,
    },

    twitter: {
      type: String,
    },

    youtube: {
      type: String,
    },

    linkedin: {
      type: String,
    },

    articles: {
      type: [Schema.Types.ObjectId],
      ref: "Article",
    },
  },
  { timestamps: true }
);

const User: Model<IUser> = models.User || model("User", UserSchema);

export default User;
