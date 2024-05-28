// import cloudinary from "cloudinary";
// import { CreateCarInput } from "@/dtos/car/create-car.dto";
// import { editCloudinaryImage } from "@/lib/cloudinary";
// import dbConnect from "@/lib/db";
// import Car from "@/model/Car";
// import { NextResponse } from "next/server";
// export const dynamic = "force-dynamic";

// export async function POST(req: Request) {
//   try {
//     const body: CreateCarInput = await req.json();

//     const { avatar, colors } = body;

//     const requiredFields = [
//       "name",
//       "slogan",
//       "avatar",
//       "slug",
//       "priceFrom",
//       "registration",
//       "seats",
//       "gear",
//       "fuel",
//       "engine",
//       "category",
//       "tier",
//       "content",
//     ];

//     for (let index = 0; index < requiredFields.length; index++) {
//       const requiredField = requiredFields[index];
//       if (!(requiredField in body) || (body as any)[requiredField] === "") {
//         return NextResponse.json(
//           {
//             status: 400,
//             error: "Bad request",
//             msg: "Missing required fields",
//           },
//           { status: 400 }
//         );
//       }
//     }

//     let savedAvatar = { public_id: "", url: "" };
//     if (avatar) {
//       const processedImage = await editCloudinaryImage(avatar);
//       if (processedImage) {
//         savedAvatar = {
//           public_id: processedImage.public_id,
//           url: processedImage.secure_url,
//         };
//       }
//     }

//     if (colors) {
//       const colorsLength = colors.length;
//       for (let i = 0; i < colorsLength; i++) {
//         const processedImage = await editCloudinaryImage(colors[i].colorImg);
//         if (processedImage) {
//           colors[i] = {
//             ...colors[i],
//             colorImg: {
//               public_id: processedImage.public_id,
//               url: processedImage.secure_url,
//             },
//           } as any;
//         }
//       }
//     }

//     await dbConnect();

//     const car = await Car.create({
//       ...body,
//       avatar: savedAvatar,
//     });

//     return NextResponse.json(
//       {
//         status: 201,
//         msg: "Create car successfully",
//         data: car,
//       },
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         status: 500,
//         error: "Internal server error",
//         msg: error,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");

//     if (!id) {
//       return NextResponse.json(
//         {
//           status: 400,
//           error: "Bad request",
//           msg: "Missing car id",
//         },
//         { status: 400 }
//       );
//     }

//     await dbConnect();

//     const car = await Car.findById(id);

//     if (!car) {
//       return NextResponse.json(
//         {
//           status: 404,
//           error: "Not found",
//           msg: "Car does not exist",
//         },
//         { status: 404 }
//       );
//     }

//     const body: CreateCarInput = await req.json();

//     let { avatar, colors } = body;

//     const requiredFields = [
//       "name",
//       "slogan",
//       "avatar",
//       "slug",
//       "priceFrom",
//       "registration",
//       "seats",
//       "gear",
//       "fuel",
//       "engine",
//       "category",
//       "tier",
//       "content",
//     ];

//     for (let index = 0; index < requiredFields.length; index++) {
//       const requiredField = requiredFields[index];
//       if (!(requiredField in body) || (body as any)[requiredField] === "") {
//         return NextResponse.json(
//           {
//             status: 400,
//             error: "Bad request",
//             msg: "Missing required fields",
//           },
//           { status: 400 }
//         );
//       }
//     }

//     if (avatar) {
//       const processedImage = await editCloudinaryImage(avatar, car.avatar);
//       if (processedImage) {
//         car.avatar = {
//           public_id: processedImage.public_id,
//           url: processedImage.secure_url,
//         };
//       }
//     }

//     if (colors) {
//       const colorsLength = colors.length;
//       for (let i = 0; i < colorsLength; i++) {
//         const processedImage = await editCloudinaryImage(
//           colors[i].colorImg,
//           car.colors[i].colorImg
//         );
//         if (processedImage) {
//           car.colors[i].colorImg = {
//             public_id: processedImage.public_id,
//             url: processedImage.secure_url,
//           } as any;
//         }
//       }
//     }

//     const updatedCar = await Car.findByIdAndUpdate(
//       id,
//       {
//         ...body,
//         avatar: car.avatar,
//         colors: car.colors,
//       },
//       { new: true }
//     );

//     return NextResponse.json(
//       {
//         status: 200,
//         msg: "Update car successfully",
//         data: updatedCar,
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         status: 500,
//         error: "Internal server error",
//         msg: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(req: Request) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const slug = searchParams.get("slug");

//     if (!slug) {
//       return NextResponse.json(
//         {
//           status: 400,
//           error: "Bad request",
//           msg: "Missing car slug",
//         },
//         { status: 400 }
//       );
//     }

//     await dbConnect();

//     const car = await Car.findOne({ slug }).lean();

//     if (!car) {
//       return NextResponse.json(
//         {
//           status: 404,
//           error: "Not found",
//           msg: "Car does not exist",
//         },
//         { status: 404 }
//       );
//     }

//     if (car.avatar.public_id) {
//       await cloudinary.v2.uploader.destroy(car.avatar.public_id);
//     }

//     if (car.colors) {
//       const carColorsLength = car.colors.length;
//       for (let i = 0; i < carColorsLength; i++) {
//         if (car.colors[i].colorImg.public_id) {
//           await cloudinary.v2.uploader.destroy(
//             car.colors[i].colorImg.public_id
//           );
//         }
//       }
//     }

//     await Car.findByIdAndDelete(car._id);

//     return NextResponse.json(
//       {
//         status: 200,
//         msg: "Delete car successfully",
//       },
//       { status: 200 }
//     );
//   } catch (error: any) {
//     return NextResponse.json(
//       {
//         status: 500,
//         error: "Internal server error",
//         msg: error.message,
//       },
//       { status: 500 }
//     );
//   }
// }
