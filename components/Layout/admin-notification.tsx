"use client";

import { FC, useState } from "react";
import TimeAgo from "react-timeago";
// @ts-ignore
import vietnameseStrings from "react-timeago/lib/language-strings/vi";
// @ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import CustomModal from "../custom-modal";
import { formatShortDate } from "@/lib/formatData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateNotificationStatus } from "@/service/notification.service";
import toast from "react-hot-toast";

const formatter = buildFormatter(vietnameseStrings);

interface Props {
  detail: any;
  read: boolean;
  notiId: string;
}

const AdminNotification: FC<Props> = ({
  detail,
  read,
  notiId,
}): JSX.Element => {
  const [showDetailModal, setShowDetailModal] = useState(false);

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: () => updateNotificationStatus(notiId),
    onMutate: async () => {
      const queryKeysArr = ["get-recently-notifications"];

      await queryClient.cancelQueries({
        queryKey: queryKeysArr,
      });
      const previousNotifications = await queryClient.getQueryData(
        queryKeysArr
      );
      queryClient.setQueryData(queryKeysArr, (old: any) => {
        const newNotifications = [...old.data];

        const updatedNotificationIndex = newNotifications.findIndex(
          (notification: any) => notification._id === notiId
        );

        newNotifications[updatedNotificationIndex] = {
          ...newNotifications[updatedNotificationIndex],
          read: true,
        };

        return { ...old, data: newNotifications };
      });

      return { previousNotifications };
    },
    onError: (error, data, context: any) => {
      toast.error(error.message);
      queryClient.setQueryData(
        ["get-recently-notifications"],
        context.previousContacts
      );
    },
  });

  const showDetailModalHandler = (e: any, read: boolean) => {
    e.stopPropagation();
    setShowDetailModal(true);
    if (!read) {
      mutate();
    }
  };

  const closeDetailModalHandler = () => {
    setShowDetailModal(false);
  };

  console.log(detail);

  return (
    <>
      <div
        key={detail._id}
        className={`relative mx-2 text-left mt-3 rounded-md flex gap-2 p-3 text-xs cursor-pointer ${
          !read && "bg-[#f5faff]"
        }`}
        onClick={(e) => showDetailModalHandler(e, read)}
      >
        {!read && (
          <>
            <span className="absolute right-2 top-1 rounded-full mt-[3px] ml-2 p-1 bg-[#f65351]"></span>
            <span className="absolute right-2 top-[7px] animate-ping rounded-full ml-2 p-1 bg-[#f65351]"></span>
          </>
        )}

        <img
          src="https://lh3.googleusercontent.com/fife/ALs6j_HBGYdsudPwTJb9Lgv5LHZTh2hC1be_CSoZMOGUGfv7rxvQ3o1aB5bDwVCRohpzeStpnqmyF-yYAvIBqThcWgR_-HjzM5lPVSH2HXighQy_QBO0u5PgKhRgjczpyZ2ZtlGNPpAhIA1gVRhNw5Au1ymL407OZEgwI8JHB98XRTVi_CnFYIZ1h5CwSWiZZCCcfLaXp9iwk4aKH1dREyH6WU4KtaWqhpRgWA9izlp4wNh2ueNMUh2eEyBlwVvvG9RwCwIK5DLzd22VsoM-JNtMhoc5fUypuejS3fqPbFiNV8OhZN1R72VhPwxKAmGtcuEhfAOd16aBvt8h13hbxz1_9si6s_WdV1BRTxbSmO3HnW0PVFq_Y9XP6K0WwfbKEPH8HTpcCCyg9QIsGKYfJn6nw9bXjPQK6aWWkGUi1sYpR1KiHNEUwqOJiQFJT84BIBbSdLpdSzQUoOy0B6DC1xLSb0PFPJS-FeZnRZsz402T3cGy6CmrOuWXmVojXNaVCqCOSi7PCMy3NOKhhc9ERAVvY924B7z1hO3gatuPgcTptQl4L8t5SUheyL-VyVVvcLqTaABopxcthJCHcFSAr-r0Z1VEIzIhQ8-rPtWBdYKMuaW5fp2uert3r6rG0iaQhdLmZOL2nrIaXNMYbRc81DFZtmoWG9zmErwlBr4OeCubS1Fgyg9l51IKWr5fzNjQ4385TWYXCuQdcwC21POiDWDR2-QWYNeTu2UVR-stkWOID7A6sUdr04N04RNhgV-EU6Re4geoqWZaJlo9Wff6hQh2Rp_chILNMaUpP6M4dDWChoxczdQgRReFkgNEk4sRfQp5M0XwSgCR2G9-kALr6zwYAfw4QEIGmH_e-_0hNVf68UCx7oBhbW3RHTkhq94J-BPgRUsOO509ZF-IIj3Sm3nlqSDxkaDdZNHzggLV1hM8BmYTf9iaA3fBVTMXN7st3WUDxyrLrIbB4nlHhSJviKeftVoBWZemGwwfq2tXZWn3CTpsZOftBF--GJZGfBqnlzJX_9TepoN_SH5RJ8c3WeCAHBSKQVMacOMkqgejCrRANZxa9h0YLqPB6D6zWO5oD0DdMt8QQ552XlwT-U0VLg2mboWxv6dj-P7HM8LjhF-ImEQSCApUPkpJJ6rdmP9rfAm8D6sG9vCOS1bQl0HBd-FGy8_Q24DWDf9RV-BAOifSJfPee0_yBiXwPYA1L77fL8EE0nnmhuV6iIVMf4c1gcmOI3M0-GiYDrZ-rDUHCMKIWZk4XFZpqkyRmxVPKL10RZrDkk8rvhyW5JcjLazALPTFNfsoCJNZ5wddhPWvy5NIac32290uAGmRV0fLYyaAcKGo3EpgV_d7KhOja1EsnUCUUppABBEn1NC2f3cYD_lY1X8b1vUmLcMjeV4_hL8=s32-c"
          alt="notification user avatar"
          className="w-9 h-9 rounded-full"
        />
        <div className="ml-2 normal-case font-normal flex-1">
          <span className="font-bold hover:text-blue">{detail?.name}</span>{" "}
          <span>
            đã gửi form liên hệ về dịch vụ <b>{detail?.service}</b>
          </span>
          <p className="text-gb mt-1 first-letter:uppercase text-[#939dae]">
            <TimeAgo date={detail.createdAt} formatter={formatter} />
          </p>
          <div className="border rounded-md mt-3 cursor-pointer px-4 py-3">
            <div className="line-clamp-2 text-gray-500 text-[11px]">
              {detail.content || "Không có nội dung"}
            </div>
          </div>
        </div>
      </div>
      <CustomModal
        heading="Thông tin chi tiết"
        onClose={closeDetailModalHandler}
        open={showDetailModal}
      >
        <div className="admin-card-body">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            <div className="flex gap-2">
              <span className="font-bold">Tên khách hàng:</span>
              <span>{detail?.name || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Email:</span>
              <span>{detail?.email || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">SĐT:</span>
              <span>{detail?.phone || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Loại dịch vụ:</span>
              <span>{detail?.service || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold">Dòng xe:</span>
              <span>{detail?.carName || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold line-clamp-1">Phiên bản:</span>
              <span>{detail?.carLine || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold line-clamp-1">Tỉnh / thành:</span>
              <span>{detail?.province || "Không yêu cầu trường này"}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold line-clamp-1">Thời gian:</span>
              <span>{formatShortDate(detail?.createdAt)}</span>
            </div>
          </div>

          <div className="mt-3">
            <span className="font-bold">Nội dung:</span>{" "}
            <span>{detail?.content || "Không có nội dung"}</span>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default AdminNotification;
