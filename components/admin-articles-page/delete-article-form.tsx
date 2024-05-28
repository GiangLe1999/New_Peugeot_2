"use client";

import { Dispatch, FC, SetStateAction } from "react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { ArticleEntity } from "@/entities/article.entity";
import AdminBtnWithLoading from "../admin-btn-with-loading";
import { useMutation, useQueryClient } from "@tanstack/react-query"; // Import useMutation

interface Props {
  setShowDeleteForm: Dispatch<SetStateAction<boolean>>;
  deletedArticle: ArticleEntity;
}

const DeleteArticleForm: FC<Props> = ({
  setShowDeleteForm,
  deletedArticle,
}): JSX.Element => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await axiosInstance.delete(`/api/admin/article`, {
        params: { slug: deletedArticle.slug },
      });
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["get-admin-articles"] });
      const previousArticles = queryClient.getQueryData(["get-admin-articles"]);
      queryClient.setQueryData(
        ["get-admin-articles"],
        (old: ArticleEntity[]) => {
          const newAticles = [...old];

          return newAticles?.filter(
            (article) => article._id !== deletedArticle._id
          );
        }
      );

      toast.success(`Xóa bài viết ${deletedArticle.name} thành công`);
      setShowDeleteForm(false);

      return { previousArticles };
    },
    onError: (error, data, context: any) => {
      toast.error(error.message);
      queryClient.setQueryData(
        ["get-admin-articles"],
        context.previousArticles
      );
    },
  });

  // Use mutation function in place of deleteArticleHandler
  const confirmDelete = () => {
    mutate();
  };

  return (
    <div className="admin-card-body">
      <p className="font-bold text-xl text-center mt-2 mb-3">
        Bạn chắc chắn muốn xóa bài viết {deletedArticle.name}?
      </p>

      <div className="text-center mt-4">
        <AdminBtnWithLoading
          content="Xác nhận xóa"
          isLoading={isPending} // Consider mutation loading state
          type="submit"
          onClick={confirmDelete}
        />
      </div>
    </div>
  );
};

export default DeleteArticleForm;
