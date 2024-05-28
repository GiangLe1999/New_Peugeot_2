import { IDatabaseImage } from "@/dtos/common.dto";
import cloudinary, { v2 } from "cloudinary";

// Cloudinary config
v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
  secure: true,
});

export const editCloudinaryImage = async (
  newImageUrl?: string | IDatabaseImage,
  oldImage?: IDatabaseImage
) => {
  if (newImageUrl && !(newImageUrl as string).startsWith("https")) {
    if (oldImage?.public_id) {
      await cloudinary.v2.uploader.destroy(oldImage?.public_id);
    }

    const newImage = await cloudinary.v2.uploader.upload(
      newImageUrl as string,
      {
        folder: "Mazda Car",
      }
    );

    return newImage;
  }

  if ((newImageUrl && (newImageUrl as string))?.startsWith("https")) {
    return;
  }
};
