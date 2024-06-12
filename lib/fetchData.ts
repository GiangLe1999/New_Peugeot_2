import { CarType } from "@/types";
import { cache } from "react";
import axiosInstance from "./axios";

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

export const getAnalyticsStatistics = async () => {
  try {
    const [res1, res2, res3, res4] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/analytics/article-views`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/analytics/nums-of-form`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/analytics/web-views`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/analytics/web-views/yesterday`
      ),
    ]);

    if (!res1.ok || !res2.ok || !res3.ok || !res4.ok) {
      throw new Error("Failed to fetch data");
    }

    const articleTotalViews = await res1.json();
    const numsOfForms = await res2.json();
    const totalViews = await res3.json();
    const todayViews = await res4.json();

    return { articleTotalViews, numsOfForms, totalViews, todayViews };
  } catch (error) {
    console.log(error);
  }
};

interface GetAllContactsParams {
  keyword: string;
  startDate: Date;
  endDate: Date;
  carLines?: string[];
  carNames?: string[];
  provinces?: string[];
  statuses?: string[];
  limit: number;
  currentPage: number;
}

export const getAllContacts = async (bodyRequest: GetAllContactsParams) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/admin/analytics/contacts",
      bodyRequest
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTestDrives = async (bodyRequest: any) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/admin/analytics/test-drives",
      bodyRequest
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllQuickConsults = async (bodyRequest: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/analytics/quick-consults`,
      {
        method: "POST",
        body: JSON.stringify(bodyRequest),
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

export const updateContactStatus = async ({
  contactId,
  newStatus,
}: {
  contactId: string;
  newStatus: string;
}) => {
  try {
    await axiosInstance.put("/api/admin/contact", {
      contactId,
      newStatus,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateQuickConsultStatus = async ({
  quickConsultId,
  newStatus,
}: {
  quickConsultId: string;
  newStatus: string;
}) => {
  try {
    await axiosInstance.put("/api/admin/quick-consult", {
      quickConsultId,
      newStatus,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTestDriveStatus = async ({
  testDriveId,
  newStatus,
}: {
  testDriveId: string;
  newStatus: string;
}) => {
  try {
    await axiosInstance.put("/api/admin/test-drive", {
      testDriveId,
      newStatus,
    });
  } catch (error) {
    console.log(error);
  }
};
