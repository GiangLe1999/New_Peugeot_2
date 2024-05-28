import axiosInstance from "@/lib/axios";

export const getRecentlyNotifications = async () => {
  try {
    const data = await axiosInstance("/api/admin/notifications/recently");
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateNotificationStatus = async (notiId: string) => {
  try {
    await axiosInstance.put("/api/admin/notification", {
      notiId,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateNotificationsStatus = async (notisId: string[]) => {
  try {
    const res = await axiosInstance.put("/api/admin/notifications", {
      notisId,
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
