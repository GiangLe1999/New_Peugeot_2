import { CarType } from "@/types";

export const getAllCarsData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cars`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<CarType[]>;
  } catch (error) {
    console.log(error);
  }
};
