"use client";

import { Dispatch, FC, SetStateAction } from "react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { CarEntity } from "@/entities/car.entity";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
  setShowDeleteForm: Dispatch<SetStateAction<boolean>>;
  deletedCar: CarEntity;
}

const DeleteCarForm: FC<Props> = ({
  setShowDeleteForm,
  deletedCar,
}): JSX.Element => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await axiosInstance.delete("/api/admin/car", {
        params: { slug: deletedCar.slug },
      });
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["get-admin-cars"] });
      const previousArticles = queryClient.getQueryData(["get-admin-cars"]);
      queryClient.setQueryData(["get-admin-cars"], (old: CarEntity[]) => {
        const newCars = [...old];

        return newCars?.filter((article) => article._id !== deletedCar._id);
      });

      toast.success(`Xóa ${deletedCar.name} thành công`);
      setShowDeleteForm(false);

      return { previousArticles };
    },
    onError: (error, data, context: any) => {
      toast.error(error.message);
      queryClient.setQueryData(["get-admin-cars"], context.previousArticles);
    },
  });

  const deleteCarHandler = async () => {
    mutate();
  };
  return (
    <div className="admin-card-body">
      <p className="font-bold text-xl text-center mt-2 mb-3">
        Bạn chắc chắn muốn xóa {deletedCar.name}?
      </p>

      <div className="text-center mt-4">
        <AdminBtnWithLoading
          content="Xác nhận xóa"
          isLoading={isPending}
          type="submit"
          onClick={deleteCarHandler}
        />
      </div>
    </div>
  );
};

export default DeleteCarForm;
