import { frontType } from "../app/(public-pages)/tin-tuc/[postSlug]/page";
import { CarType } from "@/types";
import { cache } from "react";

export const getAllCarsFullData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?getAll=true`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<CarType[]>;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsLinesData = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cars?getLines=true`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

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

export const getCarData = cache(async (carSlug?: string, carName?: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/car?${
        carSlug ? `slug=${carSlug}` : `name=${carName}`
      }`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<CarType>;
  } catch (error) {
    console.log(error);
  }
});

export const getCarPostData = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<{
      content: string;
      data: { promotion: string };
    }>;
  } catch (error) {
    console.log(error);
  }
};

export const getNewsPostData = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/${slug}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<{
      content: string;
      data: frontType;
    }>;
  } catch (error) {
    console.log(error);
  }
};

export const getAllNewsPostsData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json() as Promise<frontType[]>;
  } catch (error) {
    console.log(error);
  }
};
