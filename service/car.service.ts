import { GetAllCarsOutput } from "@/dtos/car/get-all-cars.dto";
import { GetCarBySlugOutput } from "@/dtos/car/get-car-by-slug.dto";
import axiosInstance from "@/lib/axios";
import axios from "axios";

export const getAllCars = async () => {
  try {
    const { data }: GetAllCarsOutput = await axiosInstance("/api/cars");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsForFilter = async () => {
  try {
    const { data }: GetAllCarsOutput = await axiosInstance(
      "/api/cars/cars-for-filter"
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsForAdmin = async () => {
  try {
    const { data }: GetAllCarsOutput = await axios("/api/admin/cars");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsName = async () => {
  try {
    const { data } = await axiosInstance("/api/cars/name");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCarsNameVsSlug = async () => {
  try {
    const { data } = await axiosInstance("/api/cars/name-vs-slug");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCarBySlug = async (slug: string) => {
  try {
    const { data }: { data: GetCarBySlugOutput } = await axiosInstance(
      "/api/car",
      {
        params: { slug },
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCarByCategory = async () => {
  try {
    const { data }: { data: GetAllCarsOutput } = await axiosInstance(
      "/api/cars/by-category"
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCarLinesByCar = async () => {
  try {
    const { data } = await axiosInstance("/api/cars/carlines");
    return data;
  } catch (error) {
    console.log(error);
  }
};
