"use client";

import { FC, useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";
import { BsBellFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import {
  getRecentlyNotifications,
  updateNotificationsStatus,
} from "@/service/notification.service";
import { ContactEntity } from "@/entities/contact.entity";
import { INotification } from "@/model/Notification";
import { useRouter } from "next/navigation";
import { linkConstants } from "@/data/constants";
import AdminNotification from "@/components/Layout/admin-notification";

interface Props {}

const AdminNotifications: FC<Props> = (props): JSX.Element => {
  const [showNoti, setShowNoti] = useState(false);
  const notiDivRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      notiDivRef.current &&
      !notiDivRef.current.contains(event.target as Node)
    ) {
      setShowNoti(false);
    }
  };

  const { data, isPending, refetch } = useQuery({
    queryKey: ["get-recently-notifications"],
    queryFn: getRecentlyNotifications,
  });

  const unreadNotis = data?.data
    .filter((notification: INotification) => !notification.read)
    .map((noti: any) => noti._id);

  const markReadAllHandler = async () => {
    if (unreadNotis.length > 0) {
      const result = await updateNotificationsStatus(unreadNotis);
      if (result.updated) {
        refetch();
      }
    }
  };

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
    });

    const channel = pusher.subscribe("admin-notifications");
    channel.bind("new-contact", (data: any) => {
      refetch();
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex gap-2 uppercase text-sm font-bold relative cursor-pointer"
      onClick={() => setShowNoti(!showNoti)}
      ref={notiDivRef}
    >
      <span>
        <span className="relative">
          <BsBellFill size={16} />
          {unreadNotis?.length > 0 && (
            <span className="absolute left-[-0.125rem] top-[-12px] border text-[9px] bg-[#f44336] text-white min-w-[20px] h-5 text-center leading-[19px] align-middle block px-[5px] py-0 rounded-[10px] border-solid border-white">
              {unreadNotis?.length || 0}
            </span>
          )}
        </span>
      </span>
      Thông báo
      {showNoti && (
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[465px] absolute bg-white rounded-md shadow-md border z-10 top-7 right-0 overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700 pt-4"
        >
          <div className="flex items-center justify-between px-4">
            <span>Liên hệ ({unreadNotis?.length || 0}) </span>
            <button
              className="text-xs text-[#939dae]"
              onClick={markReadAllHandler}
            >
              Đánh dấu đã đọc tất cả
            </button>
          </div>

          <div className="max-h-[50vh] overflow-y-auto mb-3 no-scrollbar">
            {data?.data.map(
              ({
                _id,
                detail,
                read,
              }: {
                _id: string;
                detail: ContactEntity;
                read: boolean;
              }) => (
                <AdminNotification
                  key={_id}
                  detail={detail}
                  read={read}
                  notiId={_id}
                />
              )
            )}
          </div>

          <div
            onClick={(e) => {
              e.stopPropagation();
              router.push(linkConstants.dashboard);
              setShowNoti(false);
            }}
            className="admin-main-gradient p-3 text-xs text-center cursor-pointer text-white normal-case hover:underline"
          >
            Xem tất cả
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminNotifications;
